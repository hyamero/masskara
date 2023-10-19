import Image from "next/image";
import electricMasskara from "public/images/electric-masskara3.jpg";

import devfestConf from "public/images/devfest-conf.jpg";
import miss from "public/images/miss.jpg";

export const Events = () => {
  const events = [
    {
      title: "Devfest",
      img: devfestConf,
    },
    {
      title: "Miss Masskara",
      img: miss,
    },
    {
      title: "Electric Masskara",
      img: electricMasskara,
    },
  ];

  return (
    <section id="events" className="mt-[27rem]">
      <div className="relative overflow-x-hidden">
        {events.map(({ title, img }, i) => {
          return (
            <div
              id={`event-container-${i}`}
              key={title}
              className="font-dirtyline text-8xl text-white "
            >
              <ul className="title-line flex gap-20 whitespace-nowrap opacity-50">
                <li>{title}</li>
                <li className="text-9xl">*</li>
                <li>{title}</li>
                <li className="text-9xl">*</li>
                <li>{title}</li>
                <li className="text-9xl">*</li>
                <li>{title}</li>
                <li>*</li>
                <li>{title}</li>
              </ul>

              <div className="event-img-container mx-auto my-96 h-[600px] w-[800px] overflow-hidden">
                <Image
                  src={img}
                  priority
                  alt="Electric Masskara"
                  className="event-inner-img w-rounded-md scale-125 object-cover object-center saturate-50"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
