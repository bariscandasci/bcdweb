import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Solutions } from "@/components/solutions";
import { WhyBcd } from "@/components/why-bcd";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="icerik">
        <Hero />
        <Solutions />
        <WhyBcd />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
