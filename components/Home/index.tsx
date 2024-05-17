import HomeDesktop from "@/components/Home/Home.desktop";
import HomeMobile from "@/components/Home/Home.mobile";
import HomeFooter from "@/components/Home/HomeFooter";
import HomeHeader from "@/components/Home/HomeHeader";

export default function MainLanding() {
  return (
    <>
      <HomeHeader />
      {/* Mobile View */}
      <HomeMobile />
      {/* Desktop View */}
      <HomeDesktop />
      <HomeFooter />
    </>
  );
}
