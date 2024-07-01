export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[140px] 2xl:pt-[210px] 2xl:pb-[160px]"
      >
        <div className="container flex flex-col gap-20 md:gap-0">
          <h4 className="text-lg mb:text-xl lg:text-2xl text-secondary-300 md:pt-[50px] md:pb-[100px]">
            We help connecting farmers with web3 investors
          </h4>

          <h1 className="text-[58px] mb:text-[76px] lg:text-[118px] text-secondary-300 text-right">
            Agro <br /> Tokenization
          </h1>

          <span className="absolute bottom-16 md:bottom-[120px] xl:bottom-[140px] 2xl:bottom-[160px] text-secondary-300 text-left animate-bounce">
            SCROLL DOWN
          </span>
        </div>
      </section>
    </>
  );
}
