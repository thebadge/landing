import { Blog } from "@/types/blog";
import { cache } from "react";
import { compareDesc } from "date-fns";
import * as fs from "fs";
import matter from "gray-matter";
import * as path from "path";

const contentDirectory = path.join(process.cwd(), "markdown");

export const getAllPosts = cache(() => {
  const blogsPath = path.join(contentDirectory, "/blogs");
  const allPosts = fs.readdirSync(blogsPath);
  // console.log(allPosts);

  return allPosts
    .map((fileName) => {
      const slug = fileName.replace(".mdx", "");
      const fileContents = fs.readFileSync(
        path.join(blogsPath, fileName),
        "utf8"
      );
      const { data } = matter(fileContents);
      // console.log(data, content);
      return { data, slug };
    })
    .sort((a, b) => compareDesc(a.data.date, b.data.date))
    .map(({ slug }) => slug);
});

export const getBlog = cache((slug: string) => {
  const blogsPath = path.join(contentDirectory, "/blogs");
  const blogFile = fs.readFileSync(
    path.join(blogsPath, `/${slug}.mdx`),
    "utf8"
  );

  const { data, content } = matter(blogFile);

  return {
    id: data.slug,
    title: data.title,
    paragraph: data.summary,
    publishDate: data.date.toISOString(),
    author: {
      name: data.author,
      image: data.avatar,
      designation: data.designation,
    },
    image: data.frontImage,
    url: `/blog/${data.slug}`,
    tags: data.tags,
    content,
  } as Blog;
});

export function getPrivacyPolicy() {
  const blogsPath = path.join(contentDirectory, "/pages");

  const privatePolicy = fs.readFileSync(
    path.join(blogsPath, "/privacy.mdx"),
    "utf8"
  );
  // console.log(allPosts);
  const { data, content } = matter(privatePolicy);
  // console.log(data, content);
  return {
    data,
    content,
    slug: "privacy",
  };
}
