import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function HafduSamband() {
  return (
    <div className="min-h-screen flex flex-col bg-page">
      <Nav />

      <section className="py-16 md:py-24">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-text-muted mb-3">
            Hafa samband
          </p>
          <h1 className="text-[48px] font-semibold text-text tracking-[-0.02em] leading-[1.15] mb-4">
            Hafðu samband
          </h1>
          <p className="text-text-body font-light text-lg leading-[1.7]">
            Fyrirspurn? Sendu okkur línu.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28 flex-1">
        <div className="max-w-[480px] mx-auto px-6 text-center">
          <div className="bg-surface rounded-xl p-12 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <h2 className="text-[22px] font-semibold text-text mb-4">
              Sendu póst
            </h2>
            <a
              href="mailto:fyrirspurn@fifill.is"
              className="text-xl text-accent hover:text-accent-hover font-semibold transition-colors duration-200"
            >
              fyrirspurn@fifill.is
            </a>
            <p className="text-text-muted font-light text-sm mt-4">
              Við svörum eins fljótt og auðið er.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
