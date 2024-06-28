import OracleRootLayout from "@/components/Layout/OracleRootLayout";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  unstable_setRequestLocale("en");

  return (
    <OracleRootLayout>
      <div className="pt-[120px] prose dark:prose-invert max-w-screen-xl m-auto prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
        <div className="max-h-fit">
          <main>
            <div className="container dark:bg-slate-900">{children}</div>
          </main>
        </div>
      </div>
    </OracleRootLayout>
  );
}
