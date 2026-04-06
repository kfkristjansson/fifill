import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Myndbond() {
  return (
    <div className="min-h-screen flex flex-col bg-page">
      <Nav />

      <section className="py-16 md:py-24">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-text-muted mb-3">
            Myndbönd
          </p>
          <h1 className="text-[48px] font-semibold text-text tracking-[-0.02em] leading-[1.15] mb-4">
            Myndbönd
          </h1>
          <p className="text-text-body font-light text-lg leading-[1.7]">
            Hér fyrir neðan má sjá yfirlit yfir myndbönd sem við höfum safnað
            saman og mælum með.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28 flex-1">
        <div className="max-w-[720px] mx-auto px-6">
          <div className="bg-muted rounded-xl p-10 text-center">
            <h2 className="text-lg font-semibold text-text mb-3">
              Myndbönd koma bráðlega
            </h2>
            <p className="text-text-body font-light text-sm">
              Við erum að safna saman myndböndum um núvitund og tengd efni.
              Hafðu samband á{" "}
              <a
                href="mailto:fyrirspurn@fifill.is"
                className="text-accent hover:underline font-medium"
              >
                fyrirspurn@fifill.is
              </a>{" "}
              ef þú hefur tillögur.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
