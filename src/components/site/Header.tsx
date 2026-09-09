import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { contact, navLinks } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 py-3 shadow-lg backdrop-blur"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="leading-none">
          <span className="block font-display text-xl tracking-tight text-sand sm:text-2xl">
            Marci Metzger
          </span>
          <span className="eyebrow text-brass">Homes</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm tracking-wide text-sand/85 transition-colors hover:text-sand"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brass transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2 border border-brass px-5 py-2.5 text-sm tracking-wide text-brass transition-colors hover:bg-brass hover:text-ink"
          >
            <Phone className="size-4" />
            {contact.phone}
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-sand lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="mt-4 border-t border-sand/15 bg-ink px-5 pb-6 pt-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base text-sand/90"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={contact.phoneHref}
            className="mt-5 inline-flex items-center gap-2 border border-brass px-5 py-3 text-sm tracking-wide text-brass"
          >
            <Phone className="size-4" />
            {contact.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
