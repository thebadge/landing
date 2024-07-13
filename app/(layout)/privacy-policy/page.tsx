import { getPrivacyPolicy } from "@/lib/blogPost";
import { unstable_setRequestLocale } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function PrivacyPage() {
  unstable_setRequestLocale("en");
  const { content } = getPrivacyPolicy();

  return <MDXRemote source={content} />;
}
