import Image from "next/image";
import electricMasskara3 from "public/images/electric-masskara3.jpg";
import electricMasskara from "public/images/electric-masskara.jpg";
import electricMasskara1 from "public/images/electric-masskara1.jpg";

import mk1 from "public/images/gallery/mk1.jpg";
import mk2 from "public/images/gallery/mk2.jpg";
import mk3 from "public/images/gallery/mk3.jpg";

import food1 from "public/images/gallery/food1.jpg";
import food2 from "public/images/gallery/food2.jpg";
import food3 from "public/images/gallery/food3.jpg";

export const Gallery = () => {
  const imagesCol2 = [electricMasskara1, electricMasskara, electricMasskara3];

  const imagesCol1 = [mk1, mk2, mk3];

  const imagesCol3 = [food1, food3, food2];

  return (
    <section
      id="gallery"
      className="relative mt-[27rem] flex flex-col gap-36 overflow-x-hidden"
    >
      <div id="gallery-col-1" className="grid grid-cols-3 gap-10">
        {imagesCol1.map((img, i) => (
          <div key={i} className="h-[300px] overflow-hidden rounded-3xl ">
            <Image
              src={img}
              priority
              alt="Electric Masskara"
              className="gallery-item w-full scale-150 rounded-md object-cover object-center saturate-[0.65]"
            />
          </div>
        ))}
      </div>

      <div id="gallery-col-2" className="grid grid-cols-3 gap-10">
        {imagesCol2.map((img, i) => (
          <div key={i} className="h-[300px] overflow-hidden rounded-3xl ">
            <Image
              src={img}
              priority
              alt="Electric Masskara"
              className="gallery-item w-full scale-150 rounded-md object-cover object-center saturate-[0.65]"
            />
          </div>
        ))}
      </div>

      <div id="gallery-col-3" className="grid grid-cols-3 gap-10">
        {imagesCol3.map((img, i) => (
          <div key={i} className="h-[300px] overflow-hidden rounded-3xl ">
            <Image
              src={img}
              priority
              alt="Electric Masskara"
              className="gallery-item w-full  scale-150 rounded-md object-cover object-center saturate-50 saturate-[0.65]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
