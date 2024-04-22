"use client";
import { useTheme } from "next-themes";
import React, { useCallback, useEffect, useRef } from "react";

const GlowMouseTracing = () => {
  useEffect(() => {
    if (window === undefined) return;
    const captures =
      window.document.querySelectorAll<HTMLDivElement>(".glow-capture");
    captures.forEach((capture) => {
      // Clone a child element. For example, we can clone the first child.
      const clonedChild = capture.children[0].cloneNode(true);
      const overlay = capture.querySelector<HTMLDivElement>(".glow-overlay");
      if (!overlay) return;
      // Append the cloned child to the overlay.
      overlay.appendChild(clonedChild);
    });

    return () => {};
    // empty dependency array ensures the effect runs only once after mount
  }, []);

  return null;
};

const MouseTracingCapture = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  const ref = useRef<HTMLDivElement>();
  const handleMouseMove = useCallback(
    (event: any) => {
      const boundingRect = ref.current.getBoundingClientRect();
      const x = event.clientX - boundingRect.left;
      const y = event.clientY - boundingRect.top;

      ref.current.style.setProperty("--glow-x", `${x}px`);
      ref.current.style.setProperty("--glow-y", `${y}px`);
      ref.current.style.setProperty(
        "--glow-opacity",
        theme.theme == "light" ? ".5" : "1"
      );
    },
    [theme.theme]
  );

  const handleMouseLeave = useCallback(() => {
    ref.current.style.setProperty("--glow-opacity", "0");
  }, []);

  return (
    <div
      className="relative glow-capture"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

const MouseTracingOverlay = ({
  glowColor = "#7c3aed",
}: {
  glowColor?: string;
}) => {
  /* @ts-ignore ignore error since we sent the variable */
  return <div className="glow-overlay" style={{ "--glow-color": glowColor }} />;
};

export default GlowMouseTracing;

export { MouseTracingCapture, MouseTracingOverlay };
