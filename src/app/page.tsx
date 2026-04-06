import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const AUTHORS = [
  {
    name: "Jóhanna Kristín Steingrímsdóttir",
    role: "EMDR þerapisti og hjúkrunarfræðingur",
    bio: "Jóhanna starfar á EMDR stofunni. Hún er hjúkrunarfræðingur með mikla reynslu af meðferðarvinnu einstaklinga vegna áfalla, þunglyndis, kvíða og lágs sjálfsmats. Jóhanna hefur sérhæft sig í EMDR meðferð, lauk EMDR þjálfun árið 2013 og hlaut EMDRIA viðurkenningu sem EMDR viðurkenndur meðferðaraðili árið 2018. Hún hefur einnig verið virk í að sækja endurmenntun hvað varðar meðferð einstaklinga með flókna og endurtekna áfallasögu. Jóhanna hefur verið í handleiðslu á EMDR vinnu sína frá árinu 2013. Jóhanna notar einnig hugræna atferlismeðferð í sínu starfi. Hún lauk árs námi í hugrænni atferlismeðferð 2007 á vegum Félags um hugræna atferlismeðferð í samstarfi við Endurmenntun Háskóla Íslands og Oxford Cognitive Therapy Centre. Jóhanna hefur starfað á geðheilsusviði Reykjalundar þar sem hún tók þátt í að þróa eftirfylgdarnámskeið í núvitund fyrir skjólstæðinga og er leiðbeinandi á núvitundarnámskeiðum.",
    image: "/images/johanna.jpg",
  },
  {
    name: "Anna Kristín Þorsteinsdóttir",
    role: "Hjúkrunarfræðingur og kennari",
    bio: "Anna Kristín hefur starfað á Reykjalundi í þverfaglegri endurhæfingu frá árinu 1989. Hún er hjúkrunarfræðingur og kennari með mikla reynslu af meðferðarvinnu og fræðslu. Aðalmeðferðarform er hugræn atferlismeðferð og núvitund við kvíða, þunglyndi og lágu sjálfsmati. Hún lauk námi í hugrænni atferlismeðferð 2000, diplómanámi í geðhjúkrun 2006 og M.Ed. prófi í Náms og kennslufræði 2013. Áhersla hennar í náminu var m.a. á núvitund og fjallaði lokaverkefnið hennar um þróun eftirfylgnihópa byggða á núvitund. Starfendarannsókn í enduræfingu. Auk þess hefur hún sótt fjölmörg námskeið tengd HAM, áföllum og núvitund. Anna Kristín tók þátt í að þróa eftirfylgdarnámskeið í núvitund fyrir skjólstæðinga Reykjalundar og er leiðbeinandi á núvitundarnámskeiðum.",
    image: "/images/anna.jpg",
  },
  {
    name: "Inga Hrefna Jónsdóttir",
    role: "Sálfræðingur – sérfræðingur í klínískri sálfræði",
    bio: "Inga Hrefna hefur starfað á Reykjalundi endurhæfingarmiðstöð SÍBS í fullu starfi frá árinu 2000 og er forstöðusálfræðingur þar. Hún er sérfræðingur í klínískri sálfræði og hefur sérhæft sig í hugrænni atferlismeðferð (HAM) með áherslu á þunglyndi, kvíða, lágt sjálfsmat, áföll og núvitund. Hún lauk tveggja ára námi í HAM 2001 og tveggja ára HAM-handleiðslunámi 2005. Inga Hrefna kenndi klíníska sálfræði í BS náminu í HR í tvo vetur, er handleiðari nema í lokaverkefnum, stundakennari og handleiðari í HAM náminu sem er á vegum Félags um hugræna atferlismeðferð í samstarfi við Endurmenntun Háskóla Íslands og Oxford Cognitive Therapy Centre. Hún var umsjónarmaður námsins frá 2002-2008. Inga Hrefna tók þátt í að þróa eftirfylgdarnámskeið í núvitund fyrir skjólstæðinga Reykjalundar og er leiðbeinandi á núvitundarnámskeiðum.",
    image: "/images/inga-hrefna.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-page">
      <Nav />

      {/* Hero — full-bleed image with centered text */}
      <section className="relative min-h-[520px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-deep/70" />
        <div className="relative z-10 max-w-[720px] mx-auto px-6 py-24 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-accent-light/80 mb-5">
            Daglegar æfingar fyrir núvitund
          </p>
          <h1 className="text-[48px] font-semibold text-text-inverse leading-[1.15] tracking-[-0.02em] mb-5">
            Núvitund
          </h1>
          <p className="text-lg text-text-inverse/70 font-light leading-relaxed max-w-md mx-auto mb-10">
            Æfingar og bóksala — átta vikna forrit með leiðbeiningum,
            hljóðupptökum og verkefnum.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/aefingar"
              className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-md font-medium text-sm transition-colors duration-200"
            >
              Æfingar
            </Link>
            <Link
              href="/netverslun"
              className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-3 rounded-md font-medium text-sm transition-colors duration-200"
            >
              Panta bók
            </Link>
          </div>
        </div>
      </section>

      {/* Offerings — two cards, not three columns */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1080px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/aefingar"
              className="group bg-surface rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.07)] transition-shadow duration-200"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-text-muted mb-3">
                8 kaflar · 15 hljóðupptökur
              </p>
              <h3 className="text-[22px] font-semibold text-text mb-2">
                Æfingar
              </h3>
              <p className="text-sm text-text-body font-light leading-relaxed">
                Hljóðupptökur af leiðbeiningum fyrir dagleg verkefni í núvitund.
              </p>
            </Link>
            <Link
              href="/netverslun"
              className="group bg-surface rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.07)] transition-shadow duration-200"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-text-muted mb-3">
                Lesbók og verkefnahefti
              </p>
              <h3 className="text-[22px] font-semibold text-text mb-2">
                Kaupa bók
              </h3>
              <p className="text-sm text-text-body font-light leading-relaxed">
                Ítarlegt námsefni með verkefnum og æfingum sem styðja við forritið.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-[1080px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-[280px_1fr] gap-12 items-center">
            <Image
              src="/images/book-cover.png"
              alt="Núvitund — lesbók og verkefnahefti"
              width={280}
              height={291}
              className="rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.09)] mx-auto"
            />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-text-muted mb-3">
                Bók
              </p>
              <h2 className="text-[32px] font-semibold text-text tracking-[-0.01em] leading-[1.3] mb-4">
                Núvitund — lesbók og verkefnahefti
              </h2>
              <p className="text-text-body font-light leading-[1.7] mb-8 max-w-lg">
                Bókin er ítarlegt námsefni með verkefnum og æfingum sem styðja
                við átta vikna núvitundarforritið. Hún hentar bæði þeim sem
                sækja námskeið og þeim sem vilja æfa sig á eigin spýtur.
              </p>
              <Link
                href="/netverslun"
                className="inline-flex bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-md font-medium text-sm transition-colors duration-200"
              >
                Panta bók
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Authors */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1080px] mx-auto px-6 md:px-8">
          <h2 className="text-[32px] font-semibold text-text tracking-[-0.01em] mb-14">
            Höfundar
          </h2>
          <div className="space-y-14">
            {AUTHORS.map((author) => (
              <div key={author.name} className="grid md:grid-cols-[180px_1fr] gap-8 items-start">
                <Image
                  src={author.image}
                  alt={author.name}
                  width={180}
                  height={180}
                  className="rounded-xl mx-auto md:mx-0"
                />
                <div>
                  <h3 className="text-[22px] font-semibold text-text mb-1">
                    {author.name}
                  </h3>
                  <p className="text-[13px] font-medium text-accent mb-4">
                    {author.role}
                  </p>
                  <p className="text-sm text-text-body font-light leading-[1.7]">{author.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
