"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/bookshelf", label: "Bookshelf" },
  // Four links plus the wordmark overflow a 375px viewport, so this one
  // drops the "me" on small screens.
  { href: "/about", label: "About me", shortLabel: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="max-w-[720px] mx-auto px-10 max-sm:px-5 flex items-center justify-between gap-4 h-12">
        <Link
          href="/"
          className="text-[13px] font-medium tracking-tight whitespace-nowrap"
        >
          Lucy Scott Brown
        </Link>
        <ul className="flex gap-6 max-sm:gap-3.5">
          {links.map(({ href, label, shortLabel }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-[13px] whitespace-nowrap transition-opacity duration-150 ${
                    isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
                  }`}
                >
                  {shortLabel ? (
                    <>
                      <span className="max-sm:hidden">{label}</span>
                      <span className="sm:hidden">{shortLabel}</span>
                    </>
                  ) : (
                    label
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
