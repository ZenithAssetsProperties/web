# Zenith Asset Group — Web Product Architecture and Build Plan

## 1. Repository boundary

**This repository is for the public website only. Do not build the customer portal or admin portal here.** Keep this repo focused on property discovery, brand, public content, public enquiries, and marketing/SEO.

Recommended product/repository split:

| Product | Repository | Purpose |
|---|---|---|
| Public website | Current `web` repo | Public company site and property marketplace; no authenticated customer or staff dashboards. |
| Customer portal | New, separate customer-portal repo | Signed-in customer workspace for properties, transactions, payments, documents, inspections, reservations, messages, profile, saved properties, and alerts. |
| Admin portal | New, separate admin-portal repo | Internal operations for properties, media, documents, customers, leads, inspections, transactions, agents, and reporting. |
| Backend/API | New backend repo | Authoritative identity, property, lead, inspection, reservation, transaction, payment, document, notification, staff permission, and reporting services. |

Deploy the public site, customer portal, admin portal, and API independently, with separate environments and release pipelines. Use distinct origins such as `www`, `account`, and `admin` subdomains after domain and identity design is approved. Do not make the public website responsible for portal route protection or admin authorization.

The apps may share brand tokens and genuinely common UI primitives through a private design-system package after those foundations stabilize. Do not import the public website as a dependency of either portal, and do not create a shared package prematurely. Each portal should own its navigation, layouts, role-specific components, and release cycle.

## 2. Current public website audit

The current repo provides a useful foundation:

- Next.js App Router, TypeScript, Tailwind CSS v4, reusable branded UI primitives, and light/dark themes.
- Home, About, Listings, and Contact routes; shared header and footer; home hero, property search, category paths, featured demo properties, customer journey, transparency principles, and FAQ.
- Brand icon/pattern assets and hero video/poster.
- Metadata, robots/sitemap, loading/error/404 screens, basic security headers, and CI gates for lint/typecheck/format/build.

At the start of this build, the repo did **not** provide a property data contract, catalogue/search experience, property detail routes, virtual tours, inspection booking, contact persistence, a CMS/API connection, or analytics event definitions. The former listings route was a placeholder, and waitlist/newsletter forms simulated success without saving. The first implementation slice below adds a clearly labeled frontend catalogue prototype; it is not live inventory and is not connected to a backend.

The original site copy described fractional investment, while the supplied PRD defines a property brokerage and sales marketplace. The user has designated the PRD as the build scope, so this public-site work now follows its property discovery and sales journey. Actual inventory, verification criteria, prices, and financial claims still require approved business data and are not invented in this prototype.

## 3.1 Build status

Last updated: 27 October 2026. Status is recorded per phase so the team can see what is implemented and what still needs review. A phase is not marked complete until its exit criteria are reviewed and its code-quality gates pass.

| Phase | Status | Evidence / remaining work |
|---|---|---|
| 0 — Product and content decisions | PRD scope adopted; content approval pending | This build follows the PRD's brokerage/property discovery model. Demo content is explicitly fictional; live inventory, verification policy, prices, and transaction terms still need approval. |
| 1 — Public-site architecture/design foundation | In progress | Public navigation, asynchronous typed catalogue adapter, shared property card/visual/search components, and responsive homepage composition are in the repo. The landing page and property cards now use a restrained editorial direction, photo-led category tiles, image treatments, and reduced-motion-aware transitions. Native pointer is preserved and the carousel marquee is removed. Device, accessibility, visual, and code-quality review remains. |
| 2 — Public property discovery | In progress | URL-driven demo filters cover text, category, location, min/max price, bedrooms, availability, and price sorting. Detail pages show facts and document states. A virtual-tour route has an explicit missing-media preview state. Unsplash concept photography is labeled and credited in the UI; replace all concept imagery with Zenith-approved property media before launch. Approved inventory, PRD field coverage, and final review remain. |
| 3 — Public conversion flows | In progress | Property detail includes an inspection-request interaction that requires fictional details and explicitly confirms that nothing is sent or stored. Contact/callback, document-request, and seller/request flows remain. |
| 4 — Public content and launch quality | In progress | Home/About/FAQ copy follows the PRD scope; the non-persisting waitlist path is removed. Home hero uses a static optimized poster instead of autoplay video. Final content approval, production metadata/sitemap, accessibility, performance, and responsive review remain. |

The customer portal, admin portal, and backend are separately scoped projects; none is being implemented in this repo.

## 3. Cross-product architecture

### Frontend now: no backend connection

Build each frontend against a local, typed mock-data adapter. Keep route pages and UI components independent of fixture files. Use realistic but fictional sample records clearly labeled as demo; never use customer data, actual sensitive property documents, real payment credentials, or production secrets in fixtures. Simulate filters, navigation, validation, and preview states. Do not claim that an enquiry, account, payment, reservation, upload, or notification was persisted.

Define domain shapes from the PRD and mark unknown values as unresolved rather than filling them in. Expected domains include property, media, location, documentation summary, inspection, lead, customer, agent, reservation, transaction, payment summary, notification, and report metrics. Do not let each app invent a different property shape.

### Backend later: one contract, separate clients

Before backend integration, approve a versioned API contract (preferably OpenAPI) and generate or maintain typed clients from it. The backend becomes the source of truth for property availability, customer identity, lead/inspection records, transaction status, document permissions, and payment confirmation. Each frontend replaces its mock adapter with an API adapter without rewriting page composition.

Start the backend as a modular application with clear domain boundaries; do not split it into microservices without operational need. Keep server-side authorization close to the protected data/action. Frontend route guards and hidden buttons improve navigation but are not security controls. When authentication is implemented, use server-managed sessions and security review; Next.js documents session management and authorization boundaries in its [authentication guide](https://nextjs.org/docs/app/guides/authentication). Use a verifiable security checklist such as the [OWASP Application Security Verification Standard](https://asvs.owasp.org/) for the protected portal and admin/API work.

## 4. Current repo scope: public website only

### Public route plan

| Route/screen | Public website responsibility |
|---|---|
| `/` | Explain the approved product, provide property search entry, feature approved inventory, build trust, and route visitors to inspection/enquiry actions. Replace concept property cards when real publication-approved listing data is available. |
| `/start` | Optional guided entry for approved journeys such as buy a home, buy land, invest, rent, or sell. Only expose journeys Zenith confirms. |
| `/properties` | Public search results, supported filters, sorting, URL-addressable search state, result count, pagination/load more, and empty/loading/error states. |
| `/properties/[slug]` | Public property details, media, location context, availability, features, approved verification explanation, documentation status, virtual tour, inspection, and contact actions. |
| `/properties/land`, `/properties/homes`, `/properties/commercial` | Category landing pages, only for categories with approved content and inventory. |
| `/compare` | Optional public property comparison if the product confirms it belongs in the acquisition journey. |
| `/virtual-tours/[slug]` | Public tour player/embed or media fallback, with property context and a path to a human inspection. |
| `/how-it-works` | Explain the public journey, making it clear where staff support or offline steps are involved. |
| `/about` | Approved company story, mission, values, team/credentials, operating areas, and contact details. Resolve the current fractional-investment positioning first. |
| `/contact` | Verified contact methods and public inspection, consultation, callback, or property-request entry points. |
| `/sell-property` | Public seller/developer submission page only if Zenith confirms it accepts listing submissions. No portal/dashboard here. |
| `/faq` | Approved answers about finding, verifying, viewing, reserving, and buying properties. Avoid unsupported payment, return, or legal claims. |

Login/register links on the public site may link to the separate customer portal origin once it exists. Do not implement the portal’s authentication or dashboard routes in this repo.

## 5. Build phases for the current public website repo

### Phase 0 — Product and content decisions

Use the supplied PRD's brokerage/property sales model as the current build scope. Approve launch categories, initial inventory and source of truth, listing attributes, currency/pricing presentation, publication authority, location privacy, “Zenith Verified” criteria, public document status wording, contact destinations, and which customer journeys are live at launch. Confirm whether comparison, seller submissions, rentals, and investment content are in scope.

**Exit:** page copy, navigation, filters, and example records are grounded in approved decisions; unknowns are explicitly marked.

### Phase 1 — Public-site information architecture and design foundation

Refine the sitemap and desktop/mobile wireframes for home → search → property detail → inspect/contact. Update the public navigation to the approved pages and add consistent marketplace UI patterns (property card, price/status, filters, gallery, document status, breadcrumbs, and form states) using the existing design tokens and primitives. Keep current public site components; do not add user/admin shells.

**Exit:** approved route map, content model, responsive designs, and reusable public marketplace components.

### Phase 2 — Public property discovery

Implement the catalogue, categories, filters, sorting, URL state, pagination, property detail routes, media gallery/video fallback, location context, document-status messaging, verification explanation, and virtual-tour layout. Use the agreed typed property contract and local fictional fixtures while there is no backend. Ensure fixtures display a persistent demo label and do not get indexed as real inventory.

**Exit:** visitor can discover, filter, open, understand, and compare approved demo property content across mobile and desktop; unavailable and empty states are designed; no live availability is implied.

### Phase 3 — Public conversion flows

Build inspection request, contact/callback/consultation, document-access request, and optional seller/property-request forms as front-end prototypes. Include validation, consent copy placeholders, loading/error/success presentation, and source/property context. Since no backend is connected, clearly state that submission is a demo and do not claim the business received it. The non-persisting waitlist/newsletter paths have been removed from the public journey.

**Exit:** all actions have intentional destinations and honest demo behavior; forms do not collect real customer information in the disconnected build.

### Phase 4 — Public content and launch quality

Complete About, How It Works, FAQ, SEO metadata, canonical URLs, sitemap generation from published mock/approved catalogue data, responsive image/video behavior, accessibility, reduced-motion behavior, responsive review, and analytics event definitions. Keep event instrumentation planning separate from a live analytics connection until approved.

**Exit:** all public routes meet the screen definition of done below; content and inventory are approved; no dead CTAs, misleading success states, or prototype records are exposed as production facts.

## 6. Separate customer portal plan (new repo; not this repo)

Create a new independently deployable frontend with its own App Router, CI, design shell, and demo fixtures. Scope the UI from the PRD: login/register/recovery; dashboard overview; properties and property status; transactions and progress; payment history/receipt preview; document vault; inspections; reservations; messages; profile/settings; favorites and alerts. Build those as frontend prototypes against the shared domain/API contract, with demo labels and no real credential or payment collection. Integrate with the backend only in a later, separately approved phase.

## 7. Separate admin portal plan (new repo; not this repo)

Create a distinct staff application with its own deployment and release pipeline. Scope the UI from the PRD: staff sign-in; overview/reports; property list/create/edit/preview/status; media/tour management; documentation review/assignment/access status; customer profiles/activity; lead pipeline/assignment/notes; inspection schedule; transaction/payment-status views; agent management; notifications and audit/settings screens. Use fictional fixtures and simulated workflow transitions until backend integration. Admin UX must not be represented as secure authorization before the backend enforces permissions.

## 8. Separate backend/API plan (later)

The future backend should define ownership and APIs for identity, catalog, enquiries/CRM, inspections, reservations/transactions, payments, documents, notifications, staff permissions, and reporting. Agree API contracts before connecting the apps. The server must enforce customer/staff access, authoritative inventory and transaction status, payment confirmation, document permissions, and audit events. The frontends must not be trusted to enforce these rules.

Suggested integration order: public catalog → public enquiry/inspection → customer identity → customer records/dashboard → reservations/transactions → payment provider → document vault/notifications → admin write operations and reporting. This order lets the public marketplace use live data before customer money and sensitive documents are involved.

## 9. Frontend engineering standards for every repo

1. Server Components by default; use Client Components only for interactive state and browser APIs.
2. Separate route composition, domain UI components, primitives, domain types, and data adapters.
3. Keep mock fixtures in a dedicated module; production UI must not import fixture records directly.
4. Build mobile-first, with deliberate patterns for filters, dense tables, touch controls, and reachable primary actions.
5. Handle loading, empty, error, validation, unavailable, and permission-denied states as first-class designs.
6. Meet keyboard, screen-reader, focus, contrast, alt-text, and reduced-motion expectations. Keep native pointer affordances, avoid continuous promotional carousels, and audit the remaining reveal/hero motion for reduced-motion behavior.
7. Optimize responsive listing media and keep interactive JavaScript scoped to the pages/components that need it.
8. Preserve lint, typecheck, formatting, and production build gates. Add automated route/interaction checks as the public workflows are implemented; a successful build alone does not prove a journey works.
9. No portal code, portal route, portal-specific navigation, or admin dashboard should be added to this `web` repo.

## 10. Definition of done for a public page

- The page has an approved route, purpose, copy owner, and design reference.
- Desktop and mobile layouts are implemented and reviewed.
- Populated, empty, loading, and error/unavailable states are covered where applicable.
- Every CTA has a valid route or clearly labeled demo behavior.
- Data comes through the agreed typed adapter, not duplicated hardcoded JSX.
- Synthetic property information is obvious and excluded from production indexing.
- Keyboard/focus semantics, alt text, reduced motion, and form feedback are addressed.
- Metadata and internal links are correct; no broken route or simulated success implies live processing.

## 11. Immediate kickoff

1. Confirm the product positioning and first public inventory/category scope.
2. Approve the public sitemap and property fields; design the home/search/detail journey at mobile and desktop sizes.
3. Build the public-site property contract and isolated mock adapter.
4. Implement the shared public marketplace patterns, then the catalogue and property detail routes.
5. Build public inspection/contact form prototypes with honest disconnected-state messaging.
6. Plan customer portal, admin portal, and backend as separate projects with their own owners and repositories; do not create them inside this repo.
