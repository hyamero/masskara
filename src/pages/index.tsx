import Hero from "@/components/Hero";
import { Loader } from "@/components/Loader";
import { ScrollAnimation } from "@/gsap/ScrollAnimation";
import { About } from "@/components/About";
import { History } from "@/components/History";
import { Container } from "@/components/Container";
import { Gallery } from "@/components/Gallery";
import { Events } from "@/components/Events";

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollAnimation>
        <Hero />
        <About />
        <History />
        <Container id="history-description" className="relative">
          <div className="absolute left-0 top-0 h-full w-full origin-bottom bg-black opacity-90"></div>
          <p className="w-5/6 font-spaceGrotesk text-5xl font-light leading-tight text-offwhite">
            The Masskara Festival in Bacolod, Philippines, was born in the early
            1980s during a period of economic adversity. To uplift spirits,
            locals created a vibrant festival featuring ornate masks. It
            symbolizes resilience and unity, celebrating with colorful parades,
            music, and dance, drawing visitors from around the world, and
            showcasing Bacolod&apos;s unwavering spirit.
          </p>
        </Container>
        <Gallery />
        <Events />
      </ScrollAnimation>
    </>
  );
}
