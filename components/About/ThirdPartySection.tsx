import SectionCarousel from "@/components/About/SectionCarousel";
import CarouselSmallText from "@/components/Common/CarouselSmallText";
import SectionTitle from "@/components/Common/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ThirdPartySection = () => {
  const t = useTranslations("badgeCategories.third-party");

  return (
    <div className="flex flex-col flex-wrap items-center h-full">
      <Card className="w-full h-full rounded-2xl border-2 bg-transparent dark:bg-transparent p-0 border-secondary-200 shadow-sm dark:border-secondary-800">
        <CardContent className="flex flex-col items-center justify-center gap-2 p-0">
          <div className="w-full rounded-t-xl bg-badges-section bg-cover bg-center bg-origin-padding">
            <div
              className="wow fadeInUp relative m-auto h-[350px] w-[300px] text-center"
              data-wow-delay=".15s"
            >
              <Image
                src="/assets/decorations/thirdparty-decoration.webp"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full p-4">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <SectionTitle
                center
                title={t("title")}
                paragraph={t("description")}
                subParagraph={t("example")}
                mb="44px"
              />

              <div className="wow fadeInUp mb-12 lg:mb-0" data-wow-delay=".15s">
                <Card className="min-h-[350px] rounded-2xl border-2 border-primary-200 bg-[#b7c5d9] text-primary-50 shadow-sm dark:border-primary-800 dark:bg-white dark:text-primary-950">
                  <CardContent className="flex flex-col items-center justify-center px-14 py-8 gap-6">
                    <h2 className="text-primary-500 font-bold text-3xl !leading-tight sm:text-xl md:text-[25px]">
                      {t("howItWorks.title")}
                    </h2>
                    <SectionCarousel>
                      <CarouselContent>
                        {Array.from({ length: 4 }).map((_, i) => {
                          return (
                            <CarouselItem
                              key={i}
                              className="flex md:min-h-[193px]"
                            >
                              <div className="my-auto">
                                <CarouselSmallText
                                  invertedColor
                                  title={t(`howItWorks.steps.${i}.title`)}
                                  paragraph={t(
                                    `howItWorks.steps.${i}.description`
                                  )}
                                />
                              </div>
                            </CarouselItem>
                          );
                        })}
                      </CarouselContent>
                      <CarouselPrevious variant="default" />
                      <CarouselNext variant="default" />
                    </SectionCarousel>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThirdPartySection;
