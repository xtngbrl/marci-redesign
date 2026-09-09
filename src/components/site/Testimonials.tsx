import { images, testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <img
        src={images.interior2}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/90" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-xl">
          <p className="eyebrow text-brass">Client reviews</p>
          <h2 className="mt-5 font-display text-4xl leading-tight text-sand sm:text-5xl">
            People who got their keys
          </h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="border-t border-brass/50 pt-8">
              <blockquote className="font-display text-xl leading-snug text-sand sm:text-2xl">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm text-sand/60">
                <span className="block font-medium text-sand">{item.name}</span>
                {item.detail}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
