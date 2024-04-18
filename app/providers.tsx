"use client";

import { ThemeProvider } from "next-themes";
require("@/styles/index.css");
require("node_modules/react-modal-video/css/modal-video.css");

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
