import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Loader } from "@/gsap/Loader";
import { ScrollAnimation } from "@/gsap/ScrollAnimation";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <ScrollAnimation>
          <Hero />
        </ScrollAnimation>
      </main>
    </>
  );
}
