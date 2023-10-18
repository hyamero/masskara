import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Loader } from "@/components/Loader";
import { ScrollAnimation } from "@/gsap/ScrollAnimation";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <ScrollAnimation>
          <Hero />
          <div className="h-screen"></div>
        </ScrollAnimation>
      </main>
    </>
  );
}
