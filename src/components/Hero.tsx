import Image from "next/image";
import bgImg from "public/images/bg.jpg";
import masskaraHalf from "public/images/masskara-half.png";
import { Container } from "@/components/Container";

export default function Hero() {
  return (
    <section className="min-h-screen">
      <Container>
        <div className="flex flex-col items-start gap-14 z-20 mt-40">
          <div>
            <span className="text-gray-300 text-[1.7rem] font-regular font-spaceGrotesk">
              2023
            </span>
            <h1
              id="main-text"
              className="flex flex-col mt-3 relative font-dirtyline lowercase [&>span]:tracking-tight [&>span]:sm:text-6xl [&>span]:md:text-8xl [&>span]:lg:text-[9rem] lg:leading-[1.1]"
            >
              <span className="bg-gradient-to-r to-[#484848] from-[#dddddd] bg-clip-text text-5xl text-transparent">
                MassKara
              </span>
              <br />
              <span className="bg-gradient-to-r to-[#484848] from-[#dddddd] bg-clip-text text-5xl text-transparent">
                Festival
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
        </div>
      </Container>

      <Image
        src={masskaraHalf}
        priority
        quality={100}
        alt="bg image"
        height={1050}
        className="pointer-events-none absolute right-0 saturate-[0.4] mix-blend-soft-light top-0"
      />

      <div className="absolute left-0 right-0 top-0 -z-20">
        <Image
          src={bgImg}
          priority
          quality={100}
          alt="bg image"
          className="pointer-events-none -mb-96 mt-44 h-full w-full sm:mt-28 md:mt-0"
        />
      </div>
    </section>
  );
}
