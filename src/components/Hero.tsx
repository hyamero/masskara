import Image from "next/image";
import bgImg from "public/images/bg.jpg";
import masskaraLogo from "public/images/masskara-logo.png";
import { Container } from "@/components/Container";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-x-hidden">
      <Container className="absolute left-0 right-0 top-0 z-40 flex h-screen flex-col items-start gap-14 pt-40">
        <div>
          <span className="font-regular font-spaceGrotesk text-[1.7rem] text-gray-300">
            2023 Festival
          </span>
          <h1 className="main-text relative mt-3 flex flex-col overflow-hidden font-dirtyline lowercase lg:leading-[1.1] [&>span]:tracking-tight [&>span]:sm:text-6xl [&>span]:md:text-8xl [&>span]:lg:text-[9rem]">
            <span className="bg-gradient-to-r from-[#dddddd] to-[#484848] bg-clip-text text-5xl text-transparent">
              Bacolod
            </span>
          </h1>

          <h1 className="main-text relative mt-3 flex flex-col overflow-hidden font-dirtyline lowercase lg:leading-[1.1] [&>span]:tracking-tight [&>span]:sm:text-6xl [&>span]:md:text-8xl [&>span]:lg:text-[9rem]">
            <span className="bg-gradient-to-r from-[#dddddd] to-[#484848] bg-clip-text text-5xl text-transparent">
              MassKara
            </span>
          </h1>
          <p className="font-regular w-3/5 font-spaceGrotesk text-xl uppercase text-gray-300">
            Embrace the Smiles, Feel the Rhythm: Join the Festivities, and
            Celebrate with Us!
          </p>
        </div>
        <button
          type="button"
          className="rounded-full border-[1px] border-white px-7 py-2 font-spaceGrotesk text-lg font-light text-white mix-blend-difference"
        >
          View Calendar
        </button>
      </Container>

      <div id="main-description" className="absolute bottom-40 w-full">
        <h1 className="main-description left-0 mt-3 flex flex-col overflow-hidden text-center  font-dirtyline opacity-70 lg:leading-[1.1] [&>span]:tracking-tight [&>span]:sm:text-6xl  [&>span]:md:text-8xl [&>span]:lg:text-[9rem]">
          <span className="item-1 bg-gradient-to-r from-[#dddddd] to-[#484848] bg-clip-text text-5xl lowercase text-transparent">
            Embrace the Smiles,
          </span>
        </h1>

        <h1 className="main-description left-0 mt-3 flex flex-col overflow-hidden text-center  font-dirtyline opacity-70 lg:leading-[1.1] [&>span]:tracking-tight [&>span]:sm:text-6xl  [&>span]:md:text-8xl [&>span]:lg:text-[9rem]">
          <span className="item-2 bg-gradient-to-r from-[#dddddd] to-[#484848] bg-clip-text text-5xl lowercase text-transparent">
            Feel the Rhythm
          </span>
        </h1>
      </div>

      <div className="-z-20">
        <Image
          src={bgImg}
          priority
          quality={100}
          alt="bg image"
          className="pointer-events-none h-full w-full sm:mt-28 md:mt-0"
        />
      </div>

      <Image
        src={masskaraLogo}
        priority
        quality={100}
        alt="bg image"
        height={1050}
        id="masskara-half"
        className="pointer-events-none absolute -right-[36rem] top-40 mix-blend-soft-light saturate-[0.4]"
      />
    </section>
  );
}
