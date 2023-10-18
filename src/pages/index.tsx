import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Loader } from "@/components/Loader";
import { ScrollAnimation } from "@/gsap/ScrollAnimation";
import { About } from "@/components/About";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <ScrollAnimation>
          <Hero />
          <About />
          <div className="h-screen"></div>
        </ScrollAnimation>
      </main>
    </>
  );
}
