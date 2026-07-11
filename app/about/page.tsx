import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";

export const metadata = {
  title: "About Us",
  description: "Learn more about our waterproofing company.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <About />
      </main>

      <Footer />
    </>
  );
}