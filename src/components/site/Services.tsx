import { services } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="bg-ink py-24 text-sand sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-brass">What Marci does</p>
          <h2 className="mt-5 font-display text-4xl leading-tight text-sand sm:text-5xl">
            Everything it takes to get it sold — or get you home.
          </h2>
        </div>

        <div className="mt-16 grid gap-px bg-sand/15 sm:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="group bg-ink">
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="h-64 w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-7 py-8 sm:px-9 sm:py-10">
                <h3 className="font-display text-2xl text-sand sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-sand/65 sm:text-base">
                  {service.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
