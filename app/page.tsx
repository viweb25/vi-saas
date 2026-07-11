import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Gallery from "@/components/sections/Gallery";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />
     
      <Services/>
        <About/>
        <Projects/>
        <Gallery/>

      <Footer/>
    </>
  );
}