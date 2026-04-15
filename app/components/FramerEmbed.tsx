"use client";

import { useEffect, useState } from "react";

/**
 * FramerEmbed — lazy-loads the 4.4MB Framer HTML export only after the page
 * load event fires. This prevents the iframe from blocking LCP and TBT on
 * first paint.
 *
 * Strategy:
 * - On mount, we listen for the window `load` event (or a 1.5s safety timeout).
 * - Until then we render a same-colour placeholder so there is no CLS.
 * - Once ready, the iframe renders with loading="lazy" as an extra hint.
 */
export default function FramerEmbed() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setReady(true);
    } else {
      const onLoad = () => setReady(true);
      window.addEventListener("load", onLoad, { once: true });
      const timeout = setTimeout(() => setReady(true), 1500);
      return () => {
        window.removeEventListener("load", onLoad);
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#0a0a0a",
      }}
    >
      {ready && (
        <iframe
          title="Lumina Clippers Website"
          src="/lumina.html"
          loading="lazy"
          style={{ width: "100%", height: "100%", border: "0" }}
        />
      )}
    </div>
  );
}
