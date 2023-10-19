import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Loader } from "@/components/Loader";
import { ScrollAnimation } from "@/gsap/ScrollAnimation";
import { About } from "@/components/About";
import { History } from "@/components/History";
import { Container } from "@/components/Container";
import { Gallery } from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <ScrollAnimation>
          <Hero />
          <About />
          <History />
          <Container id="history-description" className="relative">
            <div className="absolute left-0 top-0 h-full w-full origin-bottom bg-black opacity-90"></div>
            <p className="w-5/6 font-spaceGrotesk text-5xl font-light leading-tight text-offwhite">
              The festival is known for its extravagant display of masks and
              vibrant costumes, reflecting the city&apos;s creativity and
              exuberance. It&apos;s a harmonious blend of diverse cultural
              elements, and each year in October, it comes alive with lively
              street dancing, captivating musical performances, and a dazzling
              beauty pageant.
            </p>
          </Container>
          <Gallery />
          <div className="h-screen"></div>
        </ScrollAnimation>
      </main>
    </>
  );
}
