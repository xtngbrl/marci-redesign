import { Phone, ArrowDown } from "lucide-react";
import { contact, images } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="bg-ink">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 pb-16 pt-32 sm:px-12 lg:px-16 lg:py-32 xl:px-24">
          <p className="eyebrow text-brass">
            {contact.brokerage} · Pahrump, Nevada
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] text-sand sm:text-6xl xl:text-7xl">
            Pahrump&apos;s most
            <span className="block italic text-brass">trusted realtor</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-sand/70 sm:text-lg">
            Nearly three decades of selling homes, and #1 in Pahrump residential
            sales five years running. Whether you&apos;re buying your first place
            or listing the family home, you get Marci — not an assistant.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={contact.phoneHref}
              className="inline-flex items-center gap-3 bg-brass px-8 py-4 text-sm font-medium tracking-[0.12em] text-ink uppercase transition-colors hover:bg-brass-soft"
            >
              <Phone className="size-4" />
              Call {contact.phone}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-sand/80 underline-offset-8 transition-colors hover:text-brass hover:underline"
            >
              Send a message
              <ArrowDown className="size-4" />
            </a>
          </div>

          <p className="mt-12 text-xs tracking-[0.18em] text-sand/45 uppercase">
            {contact.hours}
          </p>
        </div>

        <div className="relative min-h-[60vh] lg:min-h-screen">
          <img
            src={images.heroValley}
            alt="Modern Nevada desert home with pool at sunset"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent lg:bg-gradient-to-r lg:from-ink/60 lg:via-transparent lg:to-transparent" />
        </div>
      </div>
    </section>
  );
}
