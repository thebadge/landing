import Circles from "@/components/Hero/Circles";
import { Button } from "@/components/ui/button";
import SplitView from "@/components/ui/split-view";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function MainLanding() {
  const t = useTranslations("presentation");

  return (
    <>
      <div className="container flex lg:hidden bg-radial-gradient-dark min-h-[100svh]">
        <Image
          width={150}
          height={150}
          src={"/logo.svg"}
          alt="The Badge Icon"
          className="absolute top-10 left-1/2 transform -translate-x-1/2 transform -translate-x-1/2"
        />
        <div className="flex flex-col items-center justify-center gap-2 p-0">
          {/* Oracle */}

          <div className="flex flex-1 justify-center z-10">
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
          <div className="flex flex-1 justify-center bg-why-gradient-dark">
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
        <Image
          width={770}
          height={400}
          src="/images/video/shape.svg"
          alt="shape"
          className="w-full absolute top-10 left-0"
        />
      </div>
      <div className="m-auto hidden lg:block">
        <SplitView>
          {/* Oracle */}
          <div className="panel bottom bg-radial-gradient-dark">
            <Image
              width={150}
              height={150}
              src={"/logo.svg"}
              alt="The Badge Icon"
              className="absolute top-10 left-1/2 transform -translate-x-1/2 transform -translate-x-1/2"
            />
            <div className="content grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 rever">
              <div className="m-auto p-4" />

              <img
                className="m-auto"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/original-image.jpg"
                alt="Original"
              />

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

            <Circles />
          </div>
          {/* Agro-Commodities & Specialties */}
          <div className="panel top bg-radial-gradient-light">
            <div className="content grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10">
              <Image
                width={150}
                height={150}
                src={"/logo-light.svg"}
                alt="The Badge Icon"
                className="absolute top-10 left-1/2 transform -translate-x-1/2 transform -translate-x-1/2"
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
                    <ArrowLeft className="mr-2" /> Coming soon
                  </Button>
                </Link>
              </div>

              <img
                className="m-auto max-h-[50%]"
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Duotone"
              />

              <div className="m-auto p-4" />
              <Circles />
            </div>
          </div>

          <div className="handle"></div>
        </SplitView>
      </div>
    </>
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
