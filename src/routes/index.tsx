import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Rates } from "@/components/site/Rates";

import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Footer } from "@/components/site/Footer";
import { site } from "@/lib/site";

const TITLE = "Sree Lamination | Gloss, Matt, Gold & 3D Lamination Services";
const DESCRIPTION =
  "Sree Lamination provides professional Gloss, Matt, Gold and 3D sheet lamination services with quality finishing and reliable service.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
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
          "@type": "LocalBusiness",
          name: "Sree Lamination",
          description: DESCRIPTION,
          telephone: site.phones,
          url: "/",
          makesOffer: ["Gloss", "Matt", "Gold", "3D", "Custom"].map((n) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: `${n} lamination` },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Rates />
        <Process />

        <WhyUs />
        <EnquiryForm />
      </main>
      <Footer />
    </div>
  );
}
