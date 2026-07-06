export default function About() {
  return (
    <section id="about" className="bg-brand-surface text-black">
      <div className="mx-auto w-full max-w-[304px] py-24 text-center md:max-w-[680px] md:py-28 xl:max-w-[1120px] xl:py-32">
        <h2 className="font-en text-[32px] font-bold text-brand-primary">About</h2>

        <h3 className="mt-16 text-[24px] leading-[1.8] md:mt-20 md:text-[36px] xl:text-[40px]">
          Interaction Lab は、
          <br />
          アイデアを形にして試す
          <br />
          Web のアトリエです。
        </h3>

        <p className="mt-12 text-[12px] leading-relaxed md:mt-16 md:text-[16px]">
          <span className="md:hidden">
            デザインやプロトタイピング、
            <br />
            インタラクションを通して、
            <br />
            小さく試して、少しずつ育てます。
          </span>
          <span className="hidden md:inline">
            デザインやプロトタイピング、インタラクションを通して、
            <br />
            小さく試して、少しずつ育てます。
          </span>
        </p>
      </div>
    </section>
  );
}
