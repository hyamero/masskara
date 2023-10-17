import Image from "next/image";
import { Inter } from "next/font/google";
import bgImg from "public/images/bg.jpg";
import masskaraLogo from "public/images/masskara-logo.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <section className="h-screen w-screen overflow-x-hidden relative">
        <h1
          id="main-text"
          className="relative z-50 ml-20 mt-40 bg-gradient-to-tr from-[#8c8c8c] to-white bg-clip-text text-5xl tracking-tight text-transparent sm:text-6xl md:mt-52 md:text-8xl lg:text-9xl lg:leading-[1.1]"
        >
          MassKara <br /> Festival
        </h1>
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
