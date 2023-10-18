import Image from "next/image";
import electricMasskara from "public/images/electric-masskara.jpg";

export const About = () => {
  return (
    <div id="about" className="min-h-screen bg-black px-32">
      <div className="h-[500px] overflow-hidden rounded-3xl ">
        <Image
          src={electricMasskara}
          id="showcase-img"
          alt="Bonsai Showcase Image"
          className="w-full rounded-md object-cover object-center saturate-[0.75]"
        />
      </div>

      <div id="about-description" className="relative">
        <div className="absolute left-0 top-0 h-full w-full origin-bottom bg-black opacity-90"></div>
        <p className="text-offwhite mt-40 w-5/6 font-spaceGrotesk text-5xl font-light leading-tight">
          The festival is known for its extravagant display of masks and vibrant
          costumes, reflecting the city&apos;s creativity and exuberance.
          It&apos;s a harmonious blend of diverse cultural elements, and each
          year in October, it comes alive with lively street dancing,
          captivating musical performances, and a dazzling beauty pageant.
        </p>
      </div>
    </div>
  );
};
