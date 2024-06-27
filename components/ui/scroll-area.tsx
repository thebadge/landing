"use client";

import * as React from "react";
import { useCallback, useEffect, useRef } from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    orientation?: "horizontal" | "vertical";
  }
>(({ className, children, orientation = "vertical", ...props }, ref) => {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const wheelTimeout = useRef<NodeJS.Timeout | undefined>();

  // block the body from scrolling (or any other element)
  useEffect(() => {
    const cancelWheel = (e) => wheelTimeout.current && e.preventDefault();
    document.body.addEventListener("wheel", cancelWheel, {
      passive: false,
    });
    return () => document.body.removeEventListener("wheel", cancelWheel);
  }, []);

  const onWheel = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      // Ignore this event unless it's a strictly vertical wheel event (horizontal wheel events are already handled by the library)
      if (
        orientation == "vertical" ||
        !viewportRef.current ||
        e.deltaY === 0 ||
        e.deltaX !== 0
      ) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      // Capture up/down wheel events and scroll the viewport horizontally
      const delta = e.deltaY;
      const currPos = viewportRef.current.scrollLeft;
      const scrollWidth = viewportRef.current.scrollWidth;

      // Generate new position
      viewportRef.current.scrollLeft = Math.max(
        0,
        Math.min(scrollWidth, currPos + delta)
      );

      // while wheel is moving, do not release the lock
      clearTimeout(wheelTimeout.current);

      // flag indicating to lock page scrolling (setTimeout returns a number)
      wheelTimeout.current = setTimeout(() => {
        wheelTimeout.current = undefined;
      }, 500);
    },
    [orientation]
  );

  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        ref={viewportRef}
        onWheel={onWheel}
        className="h-full w-full rounded-[inherit]"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
});
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-lightGreen" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
