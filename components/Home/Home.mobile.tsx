import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomeMobile() {
  const t = useTranslations("presentation");

  return (
    <div className="block lg:hidden  min-h-[calc(100svh-125px)]">
      <div className="flex flex-col items-center justify-center p-0">
        {/* Oracle */}

        <div className="flex flex-1 justify-center bg-home-tb">
          <div className="m-auto p-4 flex flex-col gap-8 text-center">
            <ChoicePresentation
              title={t("title")}
              description={`TheBadge Oracle is a decentralized protocol that accelerates
                  the adoption of real-world assets (RWAs). It provides the
                  infrastructure for traditional & web 3 companies,
                  institutions, and final users to bring RWA certifications
                  on-chain.`}
            />

            <Link id="the-badge-oracle-link" href="/en/oracle">
              <Button variant="outline" className="py-4 px-8 rounded-3xl">
                Read more <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-1 justify-center bg-home-agro">
          {/* Agro-Commodities & Specialties */}

          <div className="m-auto p-4 flex flex-col gap-8 text-center">
            <ChoicePresentation
              title={"Agro-Commodities & Specialties tokenization"}
              description={`The Badge Labs provide a tokenization solution, for
                  commodities & specialties, making it easier and faster than
                  ever before to invest in those assets using blockchain.`}
            />

            <Link id="the-badge-tokenization-link" href="#">
              <Button
                variant="outline"
                color="secondary"
                disabled={true}
                className="py-4 px-8 rounded-3xl"
              >
                <ArrowLeft className="mr-2" /> Coming soon
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const ChoicePresentation = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
        {title}
      </h2>
      <p className="text-base !leading-relaxed text-gray-600 dark:text-white md:text-lg">
        {description}
      </p>
    </>
  );
};
