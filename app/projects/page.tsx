import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/sections/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <Projects />
      </main>

      <Footer />
    </>
  );
}