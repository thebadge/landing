import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Analytics />

      <div className="fixed w-full h-full -z-10 dark:bg-radial-gradient-dark bg-radial-gradient-light"></div>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
