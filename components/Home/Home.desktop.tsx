import { Button } from "@/components/ui/button";
import SplitView from "@/components/ui/split-view";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomeDesktop() {
  const t = useTranslations("presentation");

  return (
    <div className="m-auto hidden lg:block">
      <SplitView>
        {/* Oracle */}
        <div className="panel bottom bg-home-agro">
          <div className="content grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 rever">
            <div className="m-auto p-4" />

            <img
              className="m-auto"
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Original"
            />

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
                  Coming soon
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Agro-Commodities & Specialties */}
        <div className="panel top bg-home-tb">
          <div className="content grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10">
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

            <img
              className="m-auto max-h-[50%]"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/original-image.jpg"
              alt="Duotone"
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
