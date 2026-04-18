import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-200">
      <Link href="/" className="font-semibold text-lg tracking-tight">
        Lucy Brown
      </Link>
      <ul className="flex gap-6 text-sm">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="text-gray-600 hover:text-black transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
