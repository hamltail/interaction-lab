import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <Image
        className="interactive-image"
        src="/images/under-construction.png"
        alt="準備中"
        width={512}
        height={512}
        priority
      />
    </main>
  );
}
