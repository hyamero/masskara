import Image from "next/image";
import { Inter } from "next/font/google";
import bgImg from "public/images/bg.jpg";
import masskaraLogo from "public/images/masskara-logo.png";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <section className="h-screen w-screen overflow-x-hidden relative">
        <Container>
          <div className="flex flex-col items-start gap-5 z-50 mt-40">
            <div>
              <span className="text-[#D9D9D9] text-3xl font-regular font-spaceGrotesk">
                2023
              </span>
              <h1
                id="main-text"
                className="flex flex-col mt-3 relative font-dirtyline lowercase [&>span]:tracking-tight [&>span]:sm:text-6xl [&>span]:md:text-8xl [&>span]:lg:text-[9rem] lg:leading-[1.1]"
              >
                <span className="bg-gradient-to-tr from-[#8c8c8c] to-white bg-clip-text text-5xl text-transparent">
                  MassKara
                </span>
                <br />
                <span className="bg-gradient-to-tr from-[#8c8c8c] to-white bg-clip-text text-5xl text-transparent">
                  Festival
                </span>
              </h1>
              <p className="text-xl w-3/5 font-spaceGrotesk font-regular uppercase text-[#D9D9D9]">
                Embrace the Smiles, Feel the Rhythm: Join the Festivities, and
                Celebrate with Us!
              </p>
            </div>
            <button
              type="button"
              className="text-lg font-light border-white px-7 py-2 border-[1px] rounded-full font-spaceGrotesk"
            >
              View Calendar
            </button>
          </div>
        </Container>

        <div className="absolute left-0 right-0 top-0 -z-20">
          <Image
            src={masskaraLogo}
            priority
            quality={100}
            alt="bg image"
            height={1000}
            className="pointer-events-none absolute -right-[37rem] saturate-[0.4] mix-blend-soft-light top-0"
          />

          <Image
            src={bgImg}
            priority
            quality={100}
            alt="bg image"
            className="pointer-events-none -mb-96 mt-44 h-full w-full sm:mt-28 md:mt-0"
          />
        </div>
      </section>
    </main>
  );
}
