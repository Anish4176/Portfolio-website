import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { NavItems } from "@/data";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import  Contact  from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex text-white px-5 md:px-10 mx-auto flex-col justify-center items-center relative bg-black overflow-hidden ">
      <FloatingNav
        navItems={NavItems}
        className="px-6 py-4 font-semibold tracking-wider "
      />
      <div className="w-full max-w-7xl flex flex-col justify-center items-center">
        <Hero />
        <Skills />
        <RecentProjects />
        <Testimonials/>
        <Contact/>
        <Footer />
      </div>
    </main>
  );
}
