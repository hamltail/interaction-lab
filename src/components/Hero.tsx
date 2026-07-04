import Header from "./Header";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-[var(--color-black)] text-[var(--color-white)]">
      <Header />

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-[1120px] flex-col items-center justify-center text-center">
        <h1 className="text-[56px] tracking-widest">
          描いて、動かして、試す。
        </h1>
        <p className="mt-4 text-[24px]">Webのアトリエ</p>
      </div>
    </section>
  );
}
