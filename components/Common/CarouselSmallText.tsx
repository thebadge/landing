const CarouselSmallText = ({
  title,
  paragraph,
  subParagraph,
  width,
  center,
  invertedColor,
  mb,
}: {
  title: string;
  paragraph?: string;
  subParagraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
  invertedColor?: boolean;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2
          className={`mb-4 text-lg font-bold !leading-tight ${
            invertedColor
              ? "dark:text-black text-white"
              : "text-black dark:text-white"
          } md:text-[25px] glow:text-glow/[.15]`}
        >
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-gray-600 dark:text-body-color md:text-lg">
          {paragraph}
        </p>
        <p className="text-base !leading-relaxed text-gray-600 dark:text-body-color md:text-lg">
          {subParagraph}
        </p>
      </div>
    </>
  );
};

export default CarouselSmallText;
