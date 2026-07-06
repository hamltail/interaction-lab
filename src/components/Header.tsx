"use client";
import { useState } from "react";
import Image from "next/image";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#coming-soon", label: "Coming Soon" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative mx-auto flex h-20 w-full max-w-[304px] items-center justify-between md:max-w-[680px] xl:max-w-[1120px]">
      <a href="#hero" className="flex items-center gap-3">
        <Image
          src="/images/logo.svg"
          alt="Interaction Lab"
          width={40}
          height={40}
        />
        <span className="font-en text-[20px] font-bold md:text-[24px]">Interaction Lab</span>
      </a>

      <button
        type="button"
        className="md:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="メニューを開く"
        aria-expanded={isOpen}
      >
        ☰
      </button>
      {isOpen && (
        <nav className="absolute left-1/2 top-20 w-full max-w-[304px] -translate-x-1/2 bg-black text-white md:hidden">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

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
