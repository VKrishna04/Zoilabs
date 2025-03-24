import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Zoi - Landing template",
  description: "Free Zoi landing page for developers",
  openGraph: {
    type: "website",
    url: "https://github.com/VKrishan04/shadcn-landing-page.git",
    title: "Zoi - Landing template",
    description: "Free Zoi landing page for developers",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Zoi - Landing template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/VKrishan04/shadcn-landing-page.git",
    title: "Zoi - Landing template",
    description: "Free Zoi landing page for developers",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
