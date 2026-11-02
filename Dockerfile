# syntax=docker/dockerfile:1.7

# ==============================================================================
# Zenith Asset Group - Enterprise Production Dockerfile
# Multi-stage, hardened, non-root, minimal attack-surface container for Next.js
# ==============================================================================

# --- Stage 1: Base Alpine Environment ---
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat wget git
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate

# --- Stage 2: Dependencies Installation ---
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
ENV CI=true
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile

# --- Stage 3: Builder Stage ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js telemetry disable & production optimizations
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build the Next.js standalone application
RUN pnpm build

# --- Stage 4: Production Runner (Hardened & Minimal) ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Install lightweight utility for health probe and ensure glibc compatibility
RUN apk add --no-cache libc6-compat wget

# Create dedicated non-root user and group
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy public static assets
COPY --from=builder /app/public ./public

# Prepare .next directory with proper ownership
RUN mkdir .next && chown nextjs:nodejs .next

# Leverage Next.js output standalone artifacts
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to unprivileged user
USER nextjs

EXPOSE 3000

# Continuous container health validation
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:3000/api/health || exit 1

# Launch standalone Node.js server
CMD ["node", "server.js"]

