import { Blog } from "@/types/blog";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;

  return (
    <>
      <div
        className="wow fadeInUp h-full flex flex-col relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link
          href={blog.url || "/"}
          target="_blank"
          className="relative block h-[220px] w-full"
        >
          <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-secondary-600 py-2 px-4 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image
            height={220}
            width={435}
            src={image}
            alt="blog image"
            className="max-h-[220px]"
          />
        </Link>
        <div className="flex flex-col flex-1 p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <Link
            href={blog.url || "/"}
            target="_blank"
            className="mb-4 block text-xl font-bold text-black hover:text-secondary-500 dark:text-white dark:hover:text-secondary-500 sm:text-2xl"
          >
            <h3>{title}</h3>
          </Link>
          <p className="mb-6 text-base font-medium text-gray-600 dark:text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
          <div className="flex items-center mt-auto border-t border-body-color border-opacity-10 pt-6">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    height={40}
                    width={40}
                    src={author.image}
                    alt="author"
                  />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-black dark:text-white">
                  By {author.name}
                </h4>
                <p className="text-xs text-body-color">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-black dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">
                {format(parseISO(publishDate), "MMMM do, uuu")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
