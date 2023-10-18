import Image from "next/image";
import bgImg from "public/images/bg.jpg";
import masskaraLogo from "public/images/masskara-logo.png";
import { Container } from "@/components/Container";

export default function Hero() {
  return (
    <section id="hero" className="overflow-x-hidden relative min-h-screen">
      <Container className="flex flex-col items-start gap-14 z-40 pt-40 absolute top-0 left-0 right-0 h-screen">
        <div>
          <span className="text-gray-300 text-[1.7rem] font-regular font-spaceGrotesk">
            2023 Festival
          </span>
          <h1
            id="main-text"
            className="flex flex-col mt-3 relative font-dirtyline lowercase [&>span]:tracking-tight [&>span]:sm:text-6xl [&>span]:md:text-8xl [&>span]:lg:text-[9rem] lg:leading-[1.1]"
          >
            <span className="bg-gradient-to-r to-[#484848] from-[#dddddd] bg-clip-text text-5xl text-transparent">
              Bacolod
            </span>
            <br />
            <span className="bg-gradient-to-r to-[#484848] from-[#dddddd] bg-clip-text text-5xl text-transparent">
              MassKara
            </span>
          </h1>
          <p className="text-xl w-3/5 font-spaceGrotesk font-regular uppercase text-gray-300">
            Embrace the Smiles, Feel the Rhythm: Join the Festivities, and
            Celebrate with Us!
          </p>
        </div>
        <button
          type="button"
          className="text-lg font-light mix-blend-difference text-white border-white px-7 py-2 border-[1px] rounded-full font-spaceGrotesk"
        >
          View Calendar
        </button>
      </Container>

      <div id="main-description" className="absolute w-full bottom-40">
        <h1 className="main-description text-center left-0 flex flex-col mt-3 font-dirtyline  [&>span]:tracking-tight [&>span]:sm:text-6xl [&>span]:md:text-8xl [&>span]:lg:text-[9rem] lg:leading-[1.1]  overflow-hidden opacity-70">
          <span className="item-1 bg-gradient-to-r to-[#484848] from-[#dddddd] bg-clip-text text-5xl text-transparent">
            EmbrAce the Smiles,
          </span>
        </h1>

        <h1 className="main-description text-center left-0 flex flex-col mt-3 font-dirtyline  [&>span]:tracking-tight [&>span]:sm:text-6xl [&>span]:md:text-8xl [&>span]:lg:text-[9rem] lg:leading-[1.1]  overflow-hidden opacity-70">
          <span className="item-2 bg-gradient-to-r to-[#484848] from-[#dddddd] bg-clip-text text-5xl text-transparent">
            Feel the RhyThm
          </span>
        </h1>
      </div>

      <div className=" -z-20">
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
        className="pointer-events-none absolute -right-[36rem] saturate-[0.4] mix-blend-soft-light top-40"
      />
    </section>
  );
}
