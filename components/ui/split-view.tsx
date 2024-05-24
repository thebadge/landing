"use client";
import React, { useEffect } from "react";

const SplitView = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const parent = document.querySelector(".splitview") as HTMLElement;
    const topPanel = parent.querySelector(".top") as HTMLElement;
    const handle = parent.querySelector(".handle") as HTMLElement;
    let skewHack = 0;
    let delta = 0;

    // If the parent has .skewed class, set the skewHack var.
    if (parent.className.indexOf("skewed") !== -1) {
      skewHack = 1000;
    }

    const handleMouseMove = (event: MouseEvent) => {
      // Get the delta between the mouse position and center point.
      delta = (event.clientX * 0.9 - window.innerWidth / 2) * 0.1;

      // Move the handle.
      if (handle)
        handle.style.left = `${window.innerWidth - (event.clientX + delta)}px`;

      // Adjust the top panel width.
      if (topPanel)
        topPanel.style.width = `${
          window.innerWidth - (event.clientX - skewHack + delta)
        }px`;
    };

    parent.addEventListener("mousemove", handleMouseMove);

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="splitview skewed">{children}</div>;
};

export default SplitView;
