import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";

export const metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to the most common waterproofing questions.",
};

export default function FAQPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <FAQ />
      </main>

      <Footer />
    </>
  );
}