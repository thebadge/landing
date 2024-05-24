import { Button } from "@/components/ui/button";
import SplitView from "@/components/ui/split-view";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function HomeDesktop() {
  const t = useTranslations("presentation");

  return (
    <div className="m-auto hidden lg:block">
      <SplitView>
        {/* Oracle */}
        <div className="panel bottom bg-home-agro bg-cover bg-center">
          <div className="content grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 rever">
            <div className="m-auto p-4" />

            <Image
              src="/images/home/tb_agro.png"
              width={904}
              height={522}
              className="m-auto -ml-44"
              alt="Original"
            />

            <div className="m-auto p-4 flex flex-col gap-8 text-center">
              <ChoicePresentation
                title={"Agro-Commodities tokenization"}
                description={`TheBadge Labs is an infrastructure provider for investing in agro-commodities. 
                We help connecting farmers with web3 investors, allowing easier, 
                faster and more distributed investment opportunities.`}
              />

              <Link id="the-badge-tokenization-link" href="#">
                <Button
                  variant="outline"
                  disabled={true}
                  className="py-4 px-8 rounded-3xl"
                >
                  Read more
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Agro-Commodities & Specialties */}
        <div className="panel top bg-home-tb bg-cover bg-center">
          <div className="content grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10">
            <div className="m-auto p-4 flex flex-col gap-8 text-center">
              <ChoicePresentation
                title={t("title")}
                description={`TheBadge Oracle is a decentralized protocol that accelerates
                  the adoption of real-world assets (RWAs). It provides the
                  infrastructure for traditional & web3 companies,
                  institutions, and final users to bring RWA certifications
                  on-chain.`}
              />
              <Link id="the-badge-oracle-link" href="/en/oracle">
                <Button
                  variant="outline"
                  color="secondary"
                  className="py-4 px-8 rounded-3xl"
                >
                  Go to website <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>

            <Image
              src="/images/home/tb_oracle.png"
              width={904}
              height={522}
              className="m-auto -mr-44"
              alt="Original"
            />

            <div className="m-auto p-4" />
          </div>
        </div>

        <div className="handle"></div>
      </SplitView>
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
