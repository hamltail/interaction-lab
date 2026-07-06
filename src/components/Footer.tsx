import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex w-full max-w-[304px] flex-col items-center gap-4 py-8 md:max-w-[680px] md:relative xl:max-w-[1120px]">
        <div className="text-center">
          <p className="font-en text-xs">© 2026 Interaction Lab.</p>
          <p className="mt-2 font-en text-xs">Created by h-waji (hamltail)</p>
        </div>

        <a
          href="https://github.com/hamltail/interaction-lab#readme"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-opacity hover:opacity-80 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
}
