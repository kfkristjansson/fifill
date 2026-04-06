import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Netverslun() {
  return (
    <div className="min-h-screen flex flex-col bg-page">
      <Nav />

      <section className="py-16 md:py-24">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-text-muted mb-3">
            Netverslun
          </p>
          <h1 className="text-[48px] font-semibold text-text tracking-[-0.02em] leading-[1.15]">
            Kaupa bók
          </h1>
        </div>
      </section>

      <section className="pb-20 md:pb-28 flex-1">
        <div className="max-w-[880px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Digital Book */}
            <div className="bg-surface rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="flex justify-center mb-8">
                <Image
                  src="/images/book-cover.png"
                  alt="Núvitund — rafbók"
                  width={160}
                  height={166}
                  className="rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.07)]"
                />
              </div>
              <div className="text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-accent mb-3">
                  Rafbók
                </p>
                <h2 className="text-lg font-semibold text-text mb-4">
                  Núvitund — lesbók og verkefnahefti
                </h2>
                <p className="text-[32px] font-semibold text-text mb-1">
                  3.000 <span className="text-base font-normal text-text-muted">kr.</span>
                </p>
                <p className="text-[13px] text-text-muted mb-8">
                  PDF — hlaðið niður strax
                </p>
                <a
                  href="mailto:fyrirspurn@fifill.is?subject=Panta rafbók — Núvitund"
                  className="w-full inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-md font-medium text-sm transition-colors duration-200"
                >
                  Panta rafbók
                </a>
              </div>
            </div>

            {/* Printed Book */}
            <div className="bg-surface rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="flex justify-center mb-8">
                <Image
                  src="/images/book-cover.png"
                  alt="Núvitund — prentuð bók"
                  width={160}
                  height={166}
                  className="rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.07)]"
                />
              </div>
              <div className="text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-text-muted mb-3">
                  Prentuð bók
                </p>
                <h2 className="text-lg font-semibold text-text mb-4">
                  Núvitund — lesbók og verkefnahefti
                </h2>
                <p className="text-[32px] font-semibold text-text mb-1">
                  4.500 <span className="text-base font-normal text-text-muted">kr.</span>
                </p>
                <p className="text-[13px] text-text-muted mb-8">
                  Sending 300 kr. (innanlands) · 1.000 kr. (erlendis)
                </p>
                <a
                  href="mailto:fyrirspurn@fifill.is?subject=Panta prentaða bók — Núvitund"
                  className="w-full inline-flex items-center justify-center border border-accent text-accent hover:bg-accent-light px-6 py-2.5 rounded-md font-medium text-sm transition-colors duration-200"
                >
                  Panta bók
                </a>
                <p className="text-xs text-text-muted mt-3">
                  Afhending á ~1 viku innanlands
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
