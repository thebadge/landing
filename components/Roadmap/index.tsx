import LeftRoadmapItem from "@/components/Roadmap/LeftRoadmapItem";
import RightRoadmapItem from "@/components/Roadmap/RightRoadmapItem";
import { useTranslations } from "next-intl";

export default function Roadmap() {
  const t = useTranslations("roadmap");
  return (
    <section id="roadmap">
      <div className="dark:text-white text-black py-8">
        <div className="container mx-auto flex flex-col items-start lg:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full lg:sticky lg:top-36 lg:w-1/3 mt-2 lg:mt-12 px-8">
            <p className="text-primary-300 uppercase tracking-loose font-bold">
              {t("headline")}
            </p>
            <p className="text-3xl md:text-4xl  leading-normal md:leading-relaxed mb-2">
              {t("title")}
            </p>
            <p className="text-sm md:text-base text-gray-600 dark:text-body-color mb-4">
              {t("description")}
            </p>
          </div>
          <div className="ml-0 lg:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden md:p-10 pb-[10rem] md:pb-[10rem] h-full">
                <div className="border-2 border-secondary-500 absolute h-full right-1/2 rounded-full" />
                <div className="border-2 border-secondary-500 absolute h-full right-1/2 rounded-full" />
                {Array.from({ length: 6 }).map((_, i) => {
                  if (i % 2)
                    return (
                      <LeftRoadmapItem
                        key={i}
                        date={t(`steps.${i}.year`)}
                        title={t(`steps.${i}.title`)}
                        description={t(`steps.${i}.description`)}
                      />
                    );
                  else
                    return (
                      <RightRoadmapItem
                        key={i}
                        date={t(`steps.${i}.year`)}
                        title={t(`steps.${i}.title`)}
                        description={t(`steps.${i}.description`)}
                      />
                    );
                })}
              </div>
              <img
                loading="lazy"
                alt="roadmap decoration"
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
