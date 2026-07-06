import Header from "./Header";
import CursorGlow from "./CursorGlow";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-black text-white">
      <CursorGlow />
      <Header />

      <div className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-[304px] flex-col items-center justify-center text-center md:max-w-[680px] xl:max-w-[1120px]">
        <h1 className="text-[40px] tracking-widest md:text-[48px] xl:text-[56px]">
          <span className="md:hidden">
            描いて<br />
            動かして<br />
            試す。
          </span>
          <span className="hidden md:inline">
            描いて、動かして、試す。
          </span>
        </h1>
        <p className="mt-4 text-[14px] md:text-[20px] xl:text-[24px]">Webのアトリエ</p>
      </div>
    </section>
  );
}
