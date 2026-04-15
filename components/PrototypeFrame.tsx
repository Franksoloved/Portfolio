"use client";

import { useEffect, useRef, useState } from "react";

/* Renders a desktop-width iframe scaled down to fit its container.
   The iframe renders at a full laptop viewport (1440 × 860) and is
   scaled so it fills the container width exactly — no clipping. */
export default function PrototypeFrame({ src }: { src: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const DESKTOP_W = 1440; // laptop viewport width rendered inside iframe
  const DESKTOP_H = 860;  // laptop viewport height rendered inside iframe

  useEffect(() => {
    const update = () => {
      if (wrapperRef.current) {
        setScale(wrapperRef.current.offsetWidth / DESKTOP_W);
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, []);

  const visibleH = Math.round(DESKTOP_H * scale);

  return (
    <div className="border border-[#E2DFD8]">

      {/* Chrome bar */}
      <div className="bg-[#F0EEE9] border-b border-[#E2DFD8] px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#E2DFD8]" />
          <span className="w-3 h-3 rounded-full bg-[#E2DFD8]" />
          <span className="w-3 h-3 rounded-full bg-[#E2DFD8]" />
        </div>
        <div className="flex-1 bg-white border border-[#E2DFD8] rounded px-3 py-1 min-w-0">
          <p className="text-xs text-[#BBBAAF] truncate">forecasterly.com</p>
        </div>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#BBBAAF] hover:text-[#E8441C] transition-colors shrink-0"
          title="View full screen"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Scaled iframe — wrapper is exactly the visual size of the scaled site */}
      <div ref={wrapperRef} style={{ height: visibleH, overflow: "hidden" }}>
        <iframe
          src={src}
          title="Forecasterly website — live prototype"
          loading="lazy"
          style={{
            width: DESKTOP_W,
            height: DESKTOP_H,
            border: "none",
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            display: "block",
            pointerEvents: "auto",
          }}
        />
      </div>
    </div>
  );
}
