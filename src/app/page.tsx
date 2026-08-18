import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Differentials from "@/components/Differentials";
import PainPoints from "@/components/PainPoints";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import Services from "@/components/Services";
import Sectors from "@/components/Sectors";
import ClientsCarousel from "@/components/ClientsCarousel";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import ClientGains from "@/components/ClientGains";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import FeatureStrip from "@/components/FeatureStrip";
import Team from "@/components/Team";
import CTABand from "@/components/CTABand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Differentials />
        <PainPoints />
        <About />
        <Pillars />
        <Services />
        <Sectors />
        <ClientsCarousel />
        <WhyUs />
        <Process />
        <ClientGains />
        <Gallery />
        <FAQ />
        <FeatureStrip />
        <Team />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
