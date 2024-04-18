import { Feature } from "@/types/feature";
import { useTranslations } from "next-intl";

const SingleFeature = ({
  feature,
  namespace,
}: {
  feature: Feature;
  namespace: string;
}) => {
  const t = useTranslations(namespace);

  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 mx-auto flex h-[70px] w-[70px] items-center justify-center fill-dark dark:fill-white">
          {icon}
        </div>
        <h3 className="mb-5 text-base text-center text-black font-normal dark:text-white dark:opacity-80 sm:text-xl md:text-l xl:text-xl">
          {t(title)}
        </h3>
        {paragraph && (
          <p className="pr-[10px] text-sm text-center font-light leading-relaxed text-gray-600 dark:text-body-color">
            {t(paragraph)}
          </p>
        )}
      </div>
    </div>
  );
};

export default SingleFeature;
