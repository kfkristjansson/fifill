"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Heim", href: "/" },
  { label: "Æfingar", href: "/aefingar" },
  { label: "Viðburðir", href: "/vidburdir" },
  { label: "Myndbönd", href: "/myndbond" },
  { label: "Hafðu samband", href: "/hafdu-samband" },
  { label: "Kaupa bók", href: "/netverslun" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-surface/95 backdrop-blur-sm sticky top-0 z-50 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="max-w-[1080px] mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image src="/images/logo.png" alt="Fífill" width={90} height={24} priority />
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                  ? "text-accent"
                  : "text-text-muted hover:text-accent"
              }`}
            >
              {link.label}
              {(pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full" />
              )}
            </Link>
          ))}
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}

function MobileMenu() {
  return (
    <div className="lg:hidden">
      <details className="relative">
        <summary className="list-none cursor-pointer p-2 -mr-2">
          <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </summary>
        <div className="absolute right-0 top-full mt-3 bg-surface rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.09)] py-2 min-w-[200px] z-50">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-5 py-3 text-sm font-medium text-text-body hover:bg-muted hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </details>
    </div>
  );
}
