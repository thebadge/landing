import Footer from "@/components/Footer/Agro";
import Header from "@/components/Header/Agro";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import React from "react";

export default function AgroRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-theme="agro" className="bg-primary-800">
      <Analytics />

      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
}
