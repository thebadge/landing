import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const Slideshow = () => {
  const t = useTranslations("whatIsTheBadge");

  return (
    <>
      <section id="why" className="pt-16 md:pt-20 lg:pt-24">
        <div className="relative container flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 h-[350px] md:h-[405px] lg:h-[600px]">
            <Carousel
              className="h-full"
              autoPlay
              opts={{
                loop: true,
              }}
            >
              <CarouselContent
                className="w-full h-full ml-0"
                wrapperClassName="h-full"
              >
                <CarouselItem className="flex items-center justify-center bg-secondary-300 pl-0">
                  <Image
                    width={2235}
                    height={3352}
                    className="max-h-none max-w-full"
                    alt="A man walking in a corn field"
                    src="https://images.unsplash.com/photo-1602867741746-6df80f40b3f6?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </CarouselItem>
                <CarouselItem className="flex items-center justify-center bg-lightGreen pl-0">
                  <Image
                    width={2342}
                    height={3515}
                    className="max-h-full max-w-none"
                    alt="A man pointing to a field with soy"
                    src="https://images.unsplash.com/photo-1613324295795-2f4fd58a9b8e?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </CarouselItem>
                <CarouselItem className="flex items-center justify-center bg-lightGreen pl-0">
                  <Image
                    width={2187}
                    height={3280}
                    className="max-h-none max-w-full"
                    alt="A man standing in a middle a harvest field on a forest"
                    src="https://images.unsplash.com/photo-1633233523756-61ea75d5ff32?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
          <div className="w-full sm:w-1/2 h-[350px] md:h-[405px] lg:h-[600px]">
            <Carousel
              className="h-full"
              orientation="vertical"
              autoPlay
              opts={{
                loop: true,
              }}
            >
              <CarouselContent
                className="w-full h-full mt-0"
                wrapperClassName="h-full"
              >
                <CarouselItem className="flex items-center justify-center bg-secondary-300 text-center pt-0">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary-800">
                    Tokenizing agro-assets, for easier, faster and more
                    distributed investment opportunities.
                  </h3>
                </CarouselItem>
                <CarouselItem className="flex items-center justify-center bg-lightGreen text-center pt-0">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary-800">
                    Crypto investors need access to commodities trading.
                  </h3>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slideshow;
