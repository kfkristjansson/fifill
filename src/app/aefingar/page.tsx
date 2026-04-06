import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import { chapters, exercises, getExercise } from "@/lib/exercises";

export default function Aefingar() {
  return (
    <div className="min-h-screen flex flex-col bg-page">
      <Nav />

      <section className="py-16 md:py-24">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-text-muted mb-3">
            8 kaflar · 15 hljóðupptökur
          </p>
          <h1 className="text-[48px] font-semibold text-text tracking-[-0.02em] leading-[1.15] mb-4">
            Æfingar
          </h1>
          <p className="text-text-body font-light text-lg leading-[1.7] max-w-lg">
            Átta kaflar með leiðbeiningum og hljóðupptökum. Hlustaðu og fylgdu
            æfingunum í röð eða veldu kafla.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-[720px] mx-auto px-6">
          {/* Introduction audio */}
          <div className="mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-text-muted mb-4">
              Inngangur
            </p>
            <AudioPlayer
              src={exercises[0].file}
              title={exercises[0].title}
              duration={exercises[0].duration}
            />
          </div>

          {/* Chapters */}
          <div className="space-y-16">
            {chapters.map((chapter) => (
              <div
                key={chapter.number}
                id={`kafli-${chapter.number}`}
                className="scroll-mt-24"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-accent mb-2">
                  Kafli {chapter.number}
                </p>
                <h2 className="text-[22px] font-semibold text-text mb-1">
                  {chapter.title}
                </h2>
                <p className="text-[13px] text-text-muted italic mb-6">
                  {chapter.subtitle}
                </p>
                <div className="space-y-3">
                  {chapter.exerciseIds.map((id) => {
                    const exercise = getExercise(id);
                    if (!exercise) return null;
                    return (
                      <AudioPlayer
                        key={`${chapter.number}-${id}`}
                        src={exercise.file}
                        title={`${exercise.id}. ${exercise.title}`}
                        duration={exercise.duration}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Quick Navigation */}
      <section className="py-10 bg-muted">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-text-muted mb-4">
            Fara í kafla
          </p>
          <div className="flex flex-wrap gap-2">
            {chapters.map((ch) => (
              <Link
                key={ch.number}
                href={`#kafli-${ch.number}`}
                className="px-4 py-2 bg-surface rounded-md text-[13px] font-medium text-text-body hover:text-accent transition-colors duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                {ch.number}. {ch.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
