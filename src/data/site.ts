import heroValley from "@/assets/hero-valley.jpg";
import portrait from "@/assets/marci-portrait.jpg";
import listing1 from "@/assets/listing-1.jpg";
import listing2 from "@/assets/listing-2.jpg";
import listing3 from "@/assets/listing-3.jpg";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import svcKitchen from "@/assets/svc-kitchen.jpg";
import svcPool from "@/assets/svc-pool.jpg";
import svcKeys from "@/assets/svc-keys.jpg";
import mtnFalls from "@/assets/mtn-falls-pond.jpg";

export const images = {
  heroValley,
  portrait,
  listing1,
  listing2,
  listing3,
  interior1,
  interior2,
  svcKitchen,
  svcPool,
  svcKeys,
  mtnFalls,
};

export const contact = {
  name: "Marci Metzger",
  brokerage: "The Ridge Realty Group",
  license: "S.0175273",
  phone: "206-919-6886",
  phoneHref: "tel:+12069196886",
  email: "marci@marcimetzger.com",
  addressLines: ["3190 HW 160, Suite F", "Pahrump, Nevada 89048"],
  addressNote: "Meadows Bank Plaza — take a right into the parking lot",
  hours: "Open 7 days a week, 8:00 am – 8:00 pm",
  hoursNote: "Additional appointment times on request",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Listings", href: "#listings" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "28", label: "Years selling homes" },
  { value: "#1", label: "Pahrump residential sales" },
  { value: "$28.5M", label: "Closed in a single year" },
  { value: "90", label: "Families moved last year" },
];

export const services = [
  {
    title: "Buying a home",
    body: "Nobody knows this valley better. Market analysis, honest walkthroughs, contractors on speed dial, and a pro at your side from first showing to keys in hand.",
    image: images.svcKeys,
    alt: "House keys on a weathered wooden table",
  },
  {
    title: "Selling your home",
    body: "Don't just list it — get it sold. Professional photography, aggressive exposure, and pricing that puts your home in front of every possible buyer for top dollar.",
    image: images.svcKitchen,
    alt: "Bright open-plan kitchen with island seating",
  },
  {
    title: "Rentals & property care",
    body: "Long-term rentals, tenant placement, and watchful management for owners who live out of the valley. Your property looked after like it's my own.",
    image: images.svcPool,
    alt: "Desert home with lit pool and covered patio at dusk",
  },
  {
    title: "What's it worth today",
    body: "A straight answer on your home's value, backed by real Pahrump comparables — not an automated guess. Free, no obligation, same week.",
    image: images.mtnFalls,
    alt: "Mountain Falls community pond in Pahrump, Nevada",
  },
];

export const listings = [
  {
    price: "$549,000",
    address: "4787 E Beacon Ridge",
    location: "Pahrump, NV",
    beds: 4,
    baths: 3,
    sqft: "2,860",
    image: images.listing1,
    alt: "Single-story desert home with three-car garage on Beacon Ridge",
    status: "For sale",
  },
  {
    price: "$425,000",
    address: "4460 Roseworthy Street",
    location: "Pahrump, NV",
    beds: 3,
    baths: 2,
    sqft: "2,145",
    image: images.listing2,
    alt: "Roseworthy Street home exterior with landscaped desert yard",
    status: "For sale",
  },
  {
    price: "$689,000",
    address: "5570 Ailanto Court",
    location: "Pahrump, NV",
    beds: 4,
    baths: 3,
    sqft: "3,210",
    image: images.listing3,
    alt: "Ailanto Court home with covered patio and mountain views",
    status: "New listing",
  },
];

export const testimonials = [
  {
    quote:
      "Marci sold our house in less than two weeks and got us more than we asked for. She answered every call, every time, and never once made us feel like a transaction.",
    name: "Dana & Rob P.",
    detail: "Sellers, Mountain Falls",
  },
  {
    quote:
      "We moved from out of state and Marci walked us through everything by phone and video before we ever set foot in Pahrump. Nothing was a surprise on closing day.",
    name: "Alicia M.",
    detail: "Buyer, relocated from Washington",
  },
  {
    quote:
      "She knows this valley cold. Marci told us honestly which homes to skip, which is exactly the kind of agent you want when you're spending your life savings.",
    name: "The Hartley Family",
    detail: "Buyers, Pahrump",
  },
];
