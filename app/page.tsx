import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Solutions } from "@/components/solutions";
import { Vision } from "@/components/vision";
import { WhyBcd } from "@/components/why-bcd";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="icerik">
        <Hero />
        <Solutions />
        <Vision />
        <WhyBcd />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
