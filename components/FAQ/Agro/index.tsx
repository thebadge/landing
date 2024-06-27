import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LITE_PATER_URL, PRESENTATION_VIDEO_URL } from "@/lib/contants";
import Link from "next/link";
import React from "react";

const Faq = () => {
  const t = useTranslations("whatIsTheBadge");

  return (
    <>
      <section
        id="faq"
        className="container relative bg-clip-content bg-offWhite"
      >
        <div className="flex flex-col gap-12 p-4 py-20">
          <h3 className="font-bold text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-dark">
            FAQ
          </h3>
          <div className="bg-lightGreen rounded-2xl text-dark overflow-hidden p-4 md:p-6 lg:p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-dark">
                <AccordionTrigger>Where I can learn more?</AccordionTrigger>
                <AccordionContent>
                  You can check out our pitch&nbsp;
                  <Link
                    target="_blank"
                    className="underline"
                    href={PRESENTATION_VIDEO_URL}
                  >
                    HERE
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-dark">
                <AccordionTrigger>Do you have a lite-paper?</AccordionTrigger>
                <AccordionContent>
                  Yes! We have one and you can read it&nbsp;
                  <Link
                    target="_blank"
                    className="underline"
                    href={LITE_PATER_URL}
                  >
                    HERE
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-dark">
                <AccordionTrigger>How can I help?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
