"use client";

import { useTheme } from "next-themes";
import React, { useEffect } from "react";

export function LightModeWrapper({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
    return () => {
      setTheme("dark");
    };
  }, []);

  return <>{children}</>;
}
