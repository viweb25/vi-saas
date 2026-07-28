import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import WorkEstimate from "@/components/layout/WorkEstimate";
import Gallery from "@/components/sections/Gallery";
import WhyChooseUs from "@/components/sections/WhyChooseUs"; // Updated component name/path
import FAQPag from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact"; // <-- Imported Contact section

export default function Home() {
  return (
    <>
      <Header />

      <Hero />
      <About />
      <Services />
      <Projects />
      
      {/* <WorkEstimate /> */}
      
      <Gallery />
      <WhyChooseUs /> {/* Placed earlier in the flow for high impact */}
      <FAQPag />
     
      <Footer />
    </>
  );
}