import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LITE_PAPER_URL } from "@/lib/contants";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Faq = () => {
  const t = useTranslations("faq.agro");
  const translationVariables = { lite_paper_url: LITE_PAPER_URL };
  const numberOfQuestions = 9;
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
              {Array.from({ length: numberOfQuestions }).map((_, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-dark"
                >
                  <AccordionTrigger>{t(`${i}.title`)}</AccordionTrigger>
                  <AccordionContent>
                    <Markdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        a(props) {
                          const { node, href, ...rest } = props;
                          return (
                            // @ts-ignore
                            <Link className="underline" href={href} {...rest} />
                          );
                        },
                      }}
                    >
                      {t(`${i}.description`, translationVariables)}
                    </Markdown>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
