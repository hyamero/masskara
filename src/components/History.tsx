import Image from "next/image";
import electricMasskara from "public/images/electric-masskara2.jpg";

export const History = () => {
  const words = ["History of Masskara", "History of Masskara"];

  return (
    <section
      id="history"
      className="relative mt-[27rem] min-h-screen bg-black px-32"
    >
      <div
        id="history-title"
        className="absolute bottom-1/2 left-0 right-0 grid translate-y-1/2 place-items-center"
      >
        {words.map((word, i) => (
          <h1
            key={i}
            className={`history-title-${i} left-0 mt-3 flex flex-col ${
              i === 0 ? "mb-40" : ""
            } overflow-hidden text-center  font-dirtyline opacity-70 lg:leading-[1.1] [&>span]:tracking-tight [&>span]:sm:text-6xl  [&>span]:md:text-8xl [&>span]:lg:text-[9rem]`}
          >
            <span className="bg-gradient-to-r from-[#dddddd] to-[#484848] bg-clip-text text-5xl lowercase text-transparent">
              {word}
            </span>
          </h1>
        ))}
      </div>

      <div className="flex justify-center">
        <Image
          src={electricMasskara}
          id="history-img"
          alt="Electric Masskara"
          height={800}
          priority
          className="rounded-md object-cover object-center saturate-[0.65]"
        />
      </div>
    </section>
  );
};
