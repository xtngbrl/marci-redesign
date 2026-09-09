import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Listings } from "@/components/site/Listings";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Marci Metzger | Pahrump Realtor — The Ridge Realty Group";
const description =
  "Pahrump's top residential realtor for five years running. Buying, selling, and rentals across the Nye County valley. Call Marci Metzger at 206-919-6886.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Marci Metzger Homes",
          description,
          telephone: "+1-206-919-6886",
          email: "marci@marcimetzger.com",
          areaServed: "Pahrump, Nevada",
          parentOrganization: { "@type": "Organization", name: "The Ridge Realty Group" },
          address: {
            "@type": "PostalAddress",
            streetAddress: "3190 HW 160, Suite F",
            addressLocality: "Pahrump",
            addressRegion: "NV",
            postalCode: "89048",
            addressCountry: "US",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "08:00",
              closes: "20:00",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Listings />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
