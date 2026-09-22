"use client";

import { useEffect } from "react";

/**
 * Loads the Tawk.to live chat widget (real third-party chat — messages reach
 * an actual inbox, not a placeholder). Deliberately a no-op until both env
 * vars below are set, so no chat bubble ever appears promising a
 * conversation that goes nowhere.
 *
 * Setup: create a free account at tawk.to, then in
 * Administration > Channels > Chat Widget, copy the Property ID and
 * Widget ID out of the embed URL (https://embed.tawk.to/<propertyId>/<widgetId>)
 * into NEXT_PUBLIC_TAWK_TO_PROPERTY_ID / NEXT_PUBLIC_TAWK_TO_WIDGET_ID.
 */
export function TawkChat() {
  useEffect(() => {
    const propertyId = process.env.NEXT_PUBLIC_TAWK_TO_PROPERTY_ID;
    const widgetId = process.env.NEXT_PUBLIC_TAWK_TO_WIDGET_ID;
    if (!propertyId || !widgetId) return;
    if (document.getElementById("tawk-to-script")) return;

    const script = document.createElement("script");
    script.id = "tawk-to-script";
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return null;
}
