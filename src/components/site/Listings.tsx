import { BedDouble, Bath, Ruler, MapPin } from "lucide-react";
import { contact, listings } from "@/data/site";

export function Listings() {
  return (
    <section id="listings" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow text-slate-blue">Featured listings</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              Homes on the market in the valley
            </h2>
          </div>
          <a
            href={contact.phoneHref}
            className="text-sm tracking-wide text-ink underline underline-offset-8 transition-colors hover:text-brass"
          >
            Ask about a specific property
          </a>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {listings.map((listing) => (
            <article key={listing.address} className="group">
              <div className="relative overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.alt}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-0 top-0 bg-ink px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-brass uppercase">
                  {listing.status}
                </span>
              </div>
              <div className="mt-6">
                <p className="font-display text-3xl">{listing.price}</p>
                <h3 className="mt-2 text-base font-medium">{listing.address}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-3.5" />
                  {listing.location}
                </p>
                <ul className="mt-5 flex items-center gap-6 border-t border-border pt-4 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <BedDouble className="size-4 text-brass" />
                    {listing.beds} bd
                  </li>
                  <li className="flex items-center gap-2">
                    <Bath className="size-4 text-brass" />
                    {listing.baths} ba
                  </li>
                  <li className="flex items-center gap-2">
                    <Ruler className="size-4 text-brass" />
                    {listing.sqft} sqft
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          Listings shown are examples. Call for today&apos;s full inventory across
          Pahrump and the Nye County valley.
        </p>
      </div>
    </section>
  );
}
