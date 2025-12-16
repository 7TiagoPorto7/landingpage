import { Hero } from "@/components/hero";
import dynamic from "next/dynamic";

const Features = dynamic(() => import("@/components/features").then((mod) => mod.Features));
const Curriculum = dynamic(() => import("@/components/curriculum").then((mod) => mod.Curriculum));
const Testimonials = dynamic(() => import("@/components/testimonials").then((mod) => mod.Testimonials));
const Pricing = dynamic(() => import("@/components/pricing").then((mod) => mod.Pricing));
const Certificate = dynamic(() => import("@/components/certificate").then((mod) => mod.Certificate));
const Bonus = dynamic(() => import("@/components/bonus").then((mod) => mod.Bonus));
const FAQ = dynamic(() => import("@/components/faq").then((mod) => mod.FAQ));
const Footer = dynamic(() => import("@/components/footer").then((mod) => mod.Footer));

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Curriculum />
      <Testimonials />
      <Bonus />
      <Pricing />
      <Certificate />
      <FAQ />
      <Footer />
    </main>
  );
}
