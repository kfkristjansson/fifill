import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-deep text-text-inverse">
      <div className="max-w-[1080px] mx-auto px-6 md:px-8 py-16">
        <div className="grid md:grid-cols-[1.2fr_1fr_1fr] gap-12">
          <div>
            <Image
              src="/images/logo-white.png"
              alt="Fífill"
              width={80}
              height={22}
              className="mb-5 opacity-70"
            />
            <p className="text-sm text-text-inverse/50 font-light leading-relaxed max-w-[260px]">
              Daglegar æfingar fyrir núvitund. Bók, hljóðupptökur og námskeið.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-text-inverse/30 mb-4">
              Flýtileiðir
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Æfingar", href: "/aefingar" },
                { label: "Viðburðir", href: "/vidburdir" },
                { label: "Myndbönd", href: "/myndbond" },
                { label: "Netverslun", href: "/netverslun" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-inverse/50 hover:text-text-inverse transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-text-inverse/30 mb-4">
              Hafa samband
            </p>
            <a
              href="mailto:fyrirspurn@fifill.is"
              className="text-sm text-text-inverse/50 hover:text-text-inverse transition-colors duration-200"
            >
              fyrirspurn@fifill.is
            </a>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-text-inverse/10 text-center text-text-inverse/30 text-xs">
          &copy; {new Date().getFullYear()} Fífill. Öll réttindi áskilin.
        </div>
      </div>
    </footer>
  );
}
