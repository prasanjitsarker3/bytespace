"use client";

import { useEffect, useState } from "react";

/**
 * Fixed site header. Transparent over the blue page banner at the top,
 * then switches to a solid blue bar with a shadow once the page scrolls.
 */
export function HeaderShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className="group/header fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-300 ease-out data-[scrolled=true]:bg-primary data-[scrolled=true]:shadow-[0_8px_24px_rgb(0_0_0/0.18)]"
    >
      {children}
    </header>
  );
}
