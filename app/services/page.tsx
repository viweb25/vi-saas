import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <Services />
      </main>

      <Footer />
    </>
  );
}