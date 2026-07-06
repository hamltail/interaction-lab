import Image from "next/image";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experiments", label: "Experiments" },
  { href: "#case-studies", label: "Case Studies" },
];

export default function Header() {
  return (
    <header className="mx-auto flex h-20 w-full max-w-[304px] items-center justify-between md:max-w-[680px] xl:max-w-[1120px]">
      <a href="#hero" className="flex items-center gap-3">
        <Image
          src="/images/logo.svg"
          alt="Interaction Lab"
          width={40}
          height={40}
        />
        <span className="font-en text-[20px] font-bold md:text-[24px]">Interaction Lab</span>
      </a>

      <nav aria-label="Main navigation" className="hidden md:block">
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-en transition-colors hover:text-brand-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
