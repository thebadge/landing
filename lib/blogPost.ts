import { compareDesc } from "date-fns";
import * as fs from "fs";
import matter from "gray-matter";
import * as path from "path";

const contentDirectory = path.join(process.cwd(), "markdown");

export function getAllPosts() {
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
      const { data, content } = matter(fileContents);
      // console.log(data, content);
      return {
        data,
        content,
        slug,
      };
    })
    .sort((a, b) => {
      return compareDesc(a.data.date, b.data.date);
    });
}

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
