import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hanuman Colour Lab & Studios — Wedding Photography Since 1978" },
      { name: "description", content: "Premium wedding photography, cinematic videography and studio services across Adilabad, Nirmal & Nizamabad. Capturing timeless memories since 1978." },
      { property: "og:title", content: "Hanuman Studios — Capturing Timeless Memories Since 1978" },
      { property: "og:description", content: "Premium wedding photography & cinematic films across Telangana." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Hanuman Colour Lab & Studios",
        image: "/og.jpg",
        telephone: "+91 98495 94302",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Cinema Road, Maheshwari Theatre Road, Near Andhra Bank",
          addressLocality: "Adilabad",
          addressRegion: "Telangana",
          postalCode: "504001",
          addressCountry: "IN",
        },
        foundingDate: "1978",
        areaServed: ["Adilabad", "Nirmal", "Nizamabad"],
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
