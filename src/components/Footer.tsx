import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="relative mx-auto max-w-[1120px] py-8">
        <div className="text-center">
          <p className="text-xs">© 2026 Interaction Lab.</p>
          <p className="mt-2 text-xs">Created by h-waji (hamltail)</p>
        </div>

        <a
          href="https://github.com/hamltail/interaction-lab#readme"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="absolute right-8 top-1/2 -translate-y-1/2 transition-opacity hover:opacity-80"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
}
