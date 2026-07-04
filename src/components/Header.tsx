import Image from "next/image";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experiments", label: "Experiments" },
  { href: "#case-studies", label: "Case Studies" },
];

export default function Header() {
  return (
    <header className="mx-auto flex h-20 max-w-[1120px] px-8 items-center justify-between">
      <a href="#hero" className="flex items-center gap-3">
        <Image
          src="/images/logo.svg"
          alt="Interaction Lab"
          width={40}
          height={40}
        />
        <span className="font-en text-[24px] font-bold">Interaction Lab</span>
      </a>

      <nav aria-label="Main navigation">
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
