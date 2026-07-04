export default function About() {
  return (
    <section id="about" className="bg-brand-surface text-black">
      <div className="mx-auto max-w-[1120px] px-8 py-32 text-center">
        <h2 className="font-en text-[32px] font-bold text-brand-primary">About</h2>

        <h3 className="mt-20 text-[40px] leading-[1.7]">
          Interaction Lab は、
          <br />
          アイデアを形にして試す
          <br />
          Web のアトリエです。
        </h3>

        <p className="mt-16 text-[16px] leading-relaxed">
          デザインやプロトタイピング、インタラクションを通して、
          <br />
          小さく試して、少しずつ育てます。
        </p>
      </div>
    </section>
  );
}
