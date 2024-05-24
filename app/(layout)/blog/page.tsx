import Blog from "@/components/Blog";
import { unstable_setRequestLocale } from "next-intl/server";

export default function BlogsPage() {
  unstable_setRequestLocale("en");

  return (
    <>
      <Blog showAll />
    </>
  );
}
