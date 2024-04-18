import SectionCarousel from "@/components/About/SectionCarousel";
import CarouselText from "@/components/Common/CarouselText";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";
import SectionTitle from "../Common/SectionTitle";

const CuratorsSection = () => {
  const t = useTranslations("whatAreCurators");

  return (
    <section id="curation" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <p className="text-base text-black dark:text-white text-sm">
                {t("sectionName")}
              </p>
              <SectionTitle
                title={t("title")}
                paragraph={t("description")}
                subParagraph={t("example")}
                mb="44px"
              />
            </div>

            <div className="w-full px-2 sm:px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative my-auto"
                data-wow-delay=".2s"
              >
                <Card className="rounded-2xl border-2 border-secondary-200 bg-transparent text-secondary-950 shadow-sm dark:border-secondary-800 dark:bg-transparent dark:text-secondary-50">
                  <CardContent className="flex flex-col items-center justify-center px-10 sm:px-14 py-8 gap-6">
                    <h2 className="text-secondary-500 font-bold text-3xl !leading-tight sm:text-xl md:text-[25px]">
                      {t("earn.title")}
                    </h2>
                    <SectionCarousel>
                      <CarouselContent>
                        {Array.from({ length: 4 }).map((_, i) => {
                          return (
                            <CarouselItem key={i} className="flex">
                              <div className="my-auto">
                                <CarouselText
                                  title={t(`earn.steps.${i}.title`)}
                                  paragraph={t(`earn.steps.${i}.description`)}
                                />
                              </div>
                            </CarouselItem>
                          );
                        })}
                      </CarouselContent>
                      <CarouselPrevious
                        className="ml-4 sm:ml-0"
                        variant="outline"
                        color="secondary"
                      />
                      <CarouselNext
                        className="mr-4 sm:mr-0"
                        variant="outline"
                        color="secondary"
                      />
                    </SectionCarousel>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratorsSection;
