"use client";

import * as React from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: (error: Error, reset: () => void) => React.ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
}

/**
 * Wrap a risky subtree (a widget fed by unpredictable data, a third-party
 * embed) so its failure doesn't take out the rest of the page. Next's
 * app/error.tsx only catches errors for a whole route segment — this is for
 * isolating one component inside an otherwise-healthy page.
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  reset = () => this.setState({ error: null });

  render() {
    const { error } = this.state;

    if (error) {
      if (this.props.fallback) return this.props.fallback(error, this.reset);
      return (
        <EmptyState
          icon={AlertTriangle}
          title="Something went wrong"
          description={error.message}
          action={
            <Button variant="secondary" onClick={this.reset}>
              Try again
            </Button>
          }
        />
      );
    }

    return this.props.children;
  }
}
