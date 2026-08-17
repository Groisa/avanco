import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Differentials from "@/components/Differentials";
import About from "@/components/About";
import Services from "@/components/Services";
import Sectors from "@/components/Sectors";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Differentials />
        <About />
        <Services />
        <Sectors />
        <Gallery />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
