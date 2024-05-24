import Image from "next/image";

export default function HomeHeader() {
  return (
    <div className="relative flex justify-center h-[75px] py-4 z-10 shadow-whyShadowDark">
      <Image width={150} height={150} src={"/logo.svg"} alt="The Badge Icon" />
    </div>
  );
}
