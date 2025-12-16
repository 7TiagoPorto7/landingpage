import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Curriculum } from "@/components/curriculum";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { Bonus } from "@/components/bonus";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Certificate } from "@/components/certificate";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
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
