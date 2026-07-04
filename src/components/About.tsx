export default function About() {
  return (
    <section id="about" className="bg-[var(--color-surface)] text-[var(--color-black)]">
      <div className="mx-auto max-w-[1120px] py-24 text-center">
        <h2 className="text-[32px] font-bold text-[var(--color-primary)]">About</h2>

        <p className="mt-12 text-[48px] leading-relaxed">
          Interaction Lab は、
          <br />
          アイデアを形にして試す
          <br />
          Web のアトリエです。
        </p>

        <p className="mt-10 text-[16px] leading-relaxed">
          デザインやプロトタイピング、インタラクションを通して、
          <br />
          小さく試して、少しずつ育てます。
        </p>
      </div>
    </section>
  );
}
