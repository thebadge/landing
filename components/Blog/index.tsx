import { getAllPosts, getBlog } from "@/lib/blogPost";
import { Blog } from "@/types/blog";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

function getBlogsData(showAll: boolean): Blog[] {
  const allPosts = getAllPosts();
  return allPosts
    .map((slug) => {
      return getBlog(slug);
    })
    .slice(0, showAll ? allPosts.length : 3);
}

const Blog = ({ showAll }: { showAll?: boolean }) => {
  const blogsData = getBlogsData(showAll);
  return (
    <section id="blog" className="bg-primary-500/5 py-16 md:py-20 lg:py-28">
      <div className="container flex flex-col gap-6">
        <SectionTitle
          title="Our latest Medium blogs"
          paragraph="In thease blogs you can read more about TheBadge and our proceess into increase real-word asset faster adoption"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogsData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
