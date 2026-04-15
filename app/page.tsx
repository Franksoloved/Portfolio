import Nav     from "@/components/Nav";
import Hero    from "@/components/Hero";
import About   from "@/components/About";
import Work    from "@/components/Work";
import Skills  from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-[#F8F7F4] border-t border-[#E2DFD8] py-6 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#787878] text-xs">© {new Date().getFullYear()} Matilda Matsdotter</p>
        </div>
      </footer>
    </>
  );
}
