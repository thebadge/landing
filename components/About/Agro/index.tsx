import { useTranslations } from "next-intl";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  const t = useTranslations("whatIsTheBadge");

  return (
    <>
      <section
        id="why"
        className="container relative bg-clip-content bg-offWhite"
      >
        <div className="container flex flex-col gap-12 py-20">
          <h2 className="text-center text-5xl mb:text-6xl lg:text-7xl text-primary-800">
            Our Mission
          </h2>

          <Tabs
            defaultValue="transform"
            className="flex flex-col gap-4 p-2 md:p-8 lg:p-16"
          >
            <TabsList className="flex flex-row">
              <TabsTrigger
                value="transform"
                className="flex-1 text-sm sm:text-lg opacity-60 text-primary-800 border-b-2 data-[state=active]:opacity-100  data-[state=active]:border-b-primary-800"
              >
                Transform Farmer&apos;s life
              </TabsTrigger>
              <TabsTrigger
                value="investment"
                className="flex-1 text-sm sm:text-lg opacity-60 text-primary-800 border-b-2 data-[state=active]:opacity-100  data-[state=active]:border-b-primary-800"
              >
                Investment Opportunities
              </TabsTrigger>
              <TabsTrigger
                value="transparency"
                className="flex-1 text-sm sm:text-lg opacity-60 text-primary-800 border-b-2 data-[state=active]:opacity-100  data-[state=active]:border-b-primary-800"
              >
                Transparency
              </TabsTrigger>
            </TabsList>
            <TabsContent value="transform" className="text-primary-800">
              Our mission is to transform the way that the farmers get founds to
              expand their production, in an easy way and also preserving their
              ownership and operational freedom
            </TabsContent>
            <TabsContent value="investment" className="text-primary-800">
              By tokenizing future productions we opes up new avenues for
              investors to diversify their portfolios by investing directly in
              agricultural assets.
            </TabsContent>
            <TabsContent value="transparency" className="text-primary-800">
              We developed the infrastructure for tokenizing agro-assets using a
              decentralized proof of reserve protocol.
            </TabsContent>
          </Tabs>
        </div>
        <div className="h-[60vh] lg:h-[70vh]">
          <Image
            width={2574}
            height={1930}
            className="h-full w-full object-cover object-center origin-center"
            alt="An aerial image of fields with different shades of green."
            src="https://images.unsplash.com/photo-1508175688576-0c076b47b5b5?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </section>
    </>
  );
};

export default About;
