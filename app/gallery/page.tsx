import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Gallery from "@/components/sections/Gallery";

export const metadata = {
  title: "Project Gallery | Waterproof Pro",
  description:
    "Explore our completed waterproofing projects for residential, commercial and industrial buildings.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <Gallery />
      </main>

      <Footer />
    </>
  );
}