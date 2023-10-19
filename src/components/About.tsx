import Image from "next/image";
import electricMasskara from "public/images/electric-masskara3.jpg";
import { Container } from "./Container";
import gradient2 from "public/images/gradients/gradient2.jpg";

export const About = () => {
  return (
    <div id="about" className="relative min-h-screen bg-black px-32">
      <Image
        src={gradient2}
        alt="Gradient1"
        height={1000}
        className="absolute -bottom-20 right-0 z-20 mix-blend-screen"
      />
      <div className="h-[500px] overflow-hidden rounded-3xl ">
        <Image
          src={electricMasskara}
          id="showcase-img"
          priority
          alt="Electric Masskara"
          className="w-full rounded-md object-cover object-center saturate-[0.65]"
        />
      </div>

      <Container id="about-description" className="relative">
        <div className="absolute left-0 top-0 h-full w-full origin-bottom bg-black opacity-90"></div>
        <p className="mt-40 w-5/6 font-spaceGrotesk text-5xl font-light leading-tight text-offwhite">
          The festival is known for its extravagant display of masks and vibrant
          costumes, reflecting the city&apos;s creativity and exuberance.
          It&apos;s a harmonious blend of diverse cultural elements, and each
          year in October, it comes alive with lively street dancing,
          captivating musical performances, and a dazzling beauty pageant.
        </p>
      </Container>
    </div>
  );
};
