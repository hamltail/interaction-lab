import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="hero" className="min-h-screen bg-black text-white">
        <header className="mx-auto flex h-20 max-w-[1120px] items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt="Interaction Lab"
              width={40}
              height={40}
            />
            <div className="text-[24px] font-bold">
              Interaction Lab
            </div>
          </div>
          <nav>
            <ul className="flex gap-8">
              <li><a href="#about">About</a></li>
              <li><a href="#experiments">Experiments</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
            </ul>
          </nav>
        </header>

        <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-[1120px] flex-col items-center justify-center text-center">
          <h1 className="text-[56px] tracking-widest">
            描いて、動かして、試す。
          </h1>
          <p className="mt-4 text-[24px]">Webのアトリエ</p>
        </div>
      </section>

      <section id="about" className="bg-white text-black">
        <div className="mx-auto max-w-[1120px] py-24 text-center">
          <h2 className="text-[32px] font-bold text-purple-500">About</h2>
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

      <footer className="bg-black py-8 text-center text-white">
        <p className="text-xs">© 2026 Interaction Lab.</p>
        <p className="mt-2 text-xs">
          Created by h-waji (hamltail)
        </p>
      </footer>
    </main>
  );
}
