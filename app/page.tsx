import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Security } from "@/components/security";
import { Solutions } from "@/components/solutions";
import { UseCases } from "@/components/use-cases";
import { Vision } from "@/components/vision";
import { WhyBcd } from "@/components/why-bcd";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="icerik">
        <Hero />
        <Solutions />
        <UseCases />
        <Security />
        <Vision />
        <WhyBcd />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
