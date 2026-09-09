import { images, stats } from "@/data/site";

export function About() {
  return (
    <section id="about" className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-20">
        <div className="relative">
          <img
            src={images.portrait}
            alt="Marci Metzger, Pahrump realtor"
            loading="lazy"
            className="w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-4 hidden bg-ink px-7 py-5 sm:block">
            <p className="font-display text-3xl text-brass">1996</p>
            <p className="eyebrow mt-1 text-sand/70">Licensed since</p>
          </div>
        </div>

        <div>
          <p className="eyebrow text-slate-blue">About Marci</p>
          <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
            A realtor for nearly three decades — and a neighbor for good.
          </h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Marci started out as a REALTOR and then a licensed broker in
              Washington State. These days she&apos;s trading rain for sunshine in
              Pahrump, where she has become the valley&apos;s top residential
              agent year after year.
            </p>
            <p>
              She loves the small-town feeling here: spectacular sunsets, wide
              open spaces, and neighbors who look out for each other. That&apos;s
              exactly how she works — straight answers, hard negotiating, and a
              phone she actually picks up.
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-9 border-t border-border pt-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-4xl text-ink">{stat.value}</dt>
                <dd className="mt-2 text-xs leading-snug tracking-wide text-muted-foreground uppercase">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
