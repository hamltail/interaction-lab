import Image from "next/image";

export default function Header() {
  return (
    <header className="mx-auto flex h-20 max-w-[1120px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/images/logo.svg"
          alt="Interaction Lab"
          width={40}
          height={40}
        />
        <div className="text-[24px] font-bold">Interaction Lab</div>
      </div>

      <nav>
        <ul className="flex gap-8">
          <li><a href="#about">About</a></li>
          <li><a href="#experiments">Experiments</a></li>
          <li><a href="#case-studies">Case Studies</a></li>
        </ul>
      </nav>
    </header>
  );
}
