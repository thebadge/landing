import { getBlog } from "@/lib/blogPost";
import { Metadata, ResolvingMetadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const blog = getBlog(params.slug);
  const { title, paragraph, author, image } = blog;
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${title} by ${author}`,
    description: `${paragraph}`,
    applicationName: "TheBadge",
    keywords: ["Crypto", "RWA", "Real word assets", "certificates", "Blog"],
    openGraph: {
      title: `${title} by ${author}`,
      description: `${paragraph}`,
      type: "website",
      siteName: "TheBadge",
      locale: "en",
      images: [
        {
          url: image,
        },
        {
          url: "/the_badge_banner.png",
          width: 1280,
          height: 426,
        },
        ...previousImages,
      ],
    },
  };
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  unstable_setRequestLocale("en");
  // Create any shared layout or styles here
  return <div className="py-[140px]">{children}</div>;
}
