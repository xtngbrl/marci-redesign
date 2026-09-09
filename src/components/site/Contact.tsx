import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { contact } from "@/data/site";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    console.info("Contact request:", data);
    setSent(true);
    event.currentTarget.reset();
  }

  const fieldClass =
    "w-full border-b border-border bg-transparent py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brass";

  return (
    <section id="contact" className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="eyebrow text-slate-blue">Get in touch</p>
          <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
            Let&apos;s talk about your move
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Buying, selling, or just curious what your place is worth today —
            call, or leave a note and Marci will get back to you.
          </p>

          <ul className="mt-12 space-y-7">
            <li className="flex gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-brass" />
              <div>
                <a
                  href={contact.phoneHref}
                  className="font-display text-2xl transition-colors hover:text-brass"
                >
                  {contact.phone}
                </a>
                <p className="text-sm text-muted-foreground">
                  Call or text — she answers
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-1 size-5 shrink-0 text-brass" />
              <a
                href={`mailto:${contact.email}`}
                className="text-base transition-colors hover:text-brass"
              >
                {contact.email}
              </a>
            </li>
            <li className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-brass" />
              <address className="text-base not-italic">
                {contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <span className="mt-1 block text-sm text-muted-foreground">
                  {contact.addressNote}
                </span>
              </address>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-1 size-5 shrink-0 text-brass" />
              <div>
                <p className="text-base">{contact.hours}</p>
                <p className="text-sm text-muted-foreground">
                  {contact.hoursNote}
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-12 border border-border">
            <iframe
              title="Office location in Pahrump, Nevada"
              src="https://www.google.com/maps?q=3190%20HW%20160%20Pahrump%20NV%2089048&output=embed"
              loading="lazy"
              className="h-64 w-full"
            />
          </div>
        </div>

        <div className="bg-ink px-7 py-10 text-sand sm:px-12 sm:py-14">
          <h3 className="font-display text-3xl text-sand">Send a message</h3>
          {sent ? (
            <div className="mt-10 border border-brass/60 px-6 py-8">
              <p className="font-display text-2xl text-brass">Thank you</p>
              <p className="mt-3 text-sm leading-relaxed text-sand/75">
                Your message is noted. For anything urgent, call{" "}
                <a href={contact.phoneHref} className="text-brass underline">
                  {contact.phone}
                </a>{" "}
                — Marci answers seven days a week.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-xs tracking-[0.18em] text-sand/60 uppercase underline underline-offset-4"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-7">
              <div>
                <label htmlFor="name" className="eyebrow text-sand/60">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className={`${fieldClass} border-sand/25 text-sand placeholder:text-sand/35`}
                />
              </div>
              <div>
                <label htmlFor="email" className="eyebrow text-sand/60">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className={`${fieldClass} border-sand/25 text-sand placeholder:text-sand/35`}
                />
              </div>
              <div>
                <label htmlFor="phone" className="eyebrow text-sand/60">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 555-5555"
                  className={`${fieldClass} border-sand/25 text-sand placeholder:text-sand/35`}
                />
              </div>
              <div>
                <label htmlFor="message" className="eyebrow text-sand/60">
                  How can Marci help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell her a little about your move"
                  className={`${fieldClass} resize-none border-sand/25 text-sand placeholder:text-sand/35`}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brass px-8 py-4 text-sm font-medium tracking-[0.12em] text-ink uppercase transition-colors hover:bg-brass-soft"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
