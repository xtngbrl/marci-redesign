import { contact, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-sand/15 bg-ink py-14 text-sand">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl">Marci Metzger Homes</p>
          <p className="eyebrow mt-2 text-brass">{contact.brokerage}</p>
          <p className="mt-4 text-sm text-sand/60">
            License #{contact.license} · Equal Housing Opportunity
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-7 gap-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-sand/70 transition-colors hover:text-brass"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-5 text-xs text-sand/40 sm:px-8">
        © {new Date().getFullYear()} Marci Metzger Homes. All rights reserved.
      </div>
    </footer>
  );
}
