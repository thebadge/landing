"use client";

import { useTheme } from "next-themes";
import React, { useEffect } from "react";

export function DarkModeWrapper({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
    return () => {
      setTheme("light");
    };
  }, []);

  return <>{children}</>;
}
