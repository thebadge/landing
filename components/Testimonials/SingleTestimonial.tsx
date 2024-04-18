import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import Link from "next/link";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>
    );
  }

  return (
    <div className="w-full h-full flex">
      <div
        className="wow flex fadeInUp rounded-md bg-[#f6f6f6] p-8 shadow-one dark:bg-[#1D2144] hover:shadow-two lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <Link
          href={testimonial.url || "/"}
          target="_blank"
          className="flex flex-col"
        >
          <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
          <p className="mb-8 text-base m-auto whitespace-pre-line leading-relaxed text-gray-600 dark:text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
            “{content}“
          </p>
          <div className="flex items-center border-t border-body-color border-opacity-10 pt-8 mt-auto">
            <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
              <Image width={50} height={50} src={image} alt={name} />
            </div>
            <div className="w-full">
              <h5 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
                {name}
              </h5>
              <p className="text-sm text-body-color">{designation}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SingleTestimonial;
