import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { WhyUs } from "@/components/site/WhyUs";
import { Training } from "@/components/site/Training";
import { Fleet } from "@/components/site/Fleet";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Reviews } from "@/components/site/Reviews";
import { About } from "@/components/site/About";
import { Location } from "@/components/site/Location";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";

const SITE_URL = "https://kargil-drive-premium.lovable.app";
const TITLE = "Driving School in Sri Ganganagar | Kargil Driving School";
const DESCRIPTION =
  "Learn driving with Kargil Driving School in Sri Ganganagar. 30+ years of experience, male & female tutors, road and highway training in well-maintained cars.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "driving school in Sri Ganganagar, driving classes in Sri Ganganagar, car driving school Sri Ganganagar, female driving instructor Sri Ganganagar, driving training Sri Ganganagar, highway driving training, automatic car driving training",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "IN-RJ" },
      { name: "geo.placename", content: "Sri Ganganagar" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Kargil Driving School" },
      { property: "og:url", content: `${SITE_URL}/` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DrivingSchool",
          "@id": `${SITE_URL}/#organization`,
          name: "Kargil Driving School",
          alternateName: "Kargil Driving Point School",
          url: `${SITE_URL}/`,
          description: DESCRIPTION,
          telephone: "+919414246464",
          address: {
            "@type": "PostalAddress",
            streetAddress: "C-26, Radhey Enclave",
            addressLocality: "Sri Ganganagar",
            addressRegion: "Rajasthan",
            addressCountry: "IN",
          },
          areaServed: {
            "@type": "City",
            name: "Sri Ganganagar",
          },
          knowsAbout: [
            "Car driving lessons",
            "Highway driving training",
            "Automatic car driving training",
            "Road safety training",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: "Kargil Driving School",
          inLanguage: "en-IN",
          publisher: { "@id": `${SITE_URL}/#organization` },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhyUs />
        <Training />
        <Fleet />
        <HowItWorks />
        <Reviews />
        <About />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
