import { getAllPosts } from "@/lib/blogPost";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://thebadge.xyz",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://thebadge.xyz/en",
          es: "https://thebadge.xyz/es",
          de: "https://thebadge.xyz/de",
        },
      },
    },
    {
      url: "https://thebadge.xyz/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://thebadge.xyz/blog",
      lastModified: new Date(),
    },
    ...getAllPosts().map((slug) => ({
      url: `https://thebadge.xyz/blog/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
