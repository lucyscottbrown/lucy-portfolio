import Link from "next/link";

// One contact block for every page, replacing the per-page versions.
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-8">
      <div className="max-w-[720px] mx-auto px-10 max-sm:px-5 py-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px]">
        <a
          href="mailto:lucyscottbrown@gmail.com"
          className="text-[#185FA5] hover:underline"
        >
          lucyscottbrown@gmail.com
        </a>
        <span className="text-gray-300" aria-hidden>
          ·
        </span>
        <a
          href="https://www.linkedin.com/in/lucyscottbrown"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#185FA5] hover:underline"
        >
          LinkedIn
        </a>
        <span className="text-gray-300" aria-hidden>
          ·
        </span>
        <Link href="/cv" className="text-[#185FA5] hover:underline">
          CV
        </Link>
      </div>
    </footer>
  );
}
