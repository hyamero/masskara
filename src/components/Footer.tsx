import { Container } from "./Container";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoGithub,
} from "react-icons/bi";

export const Footer = () => {
  const navItems = [
    {
      text: "Home",
      href: "hero",
    },
    {
      text: "About",
      href: "about",
    },
    {
      text: "History",
      href: "history",
    },
    {
      text: "Gallery",
      href: "gallery",
    },
    {
      text: "Events",
      href: "events",
    },
  ];

  const aboutItems = ["Gallery", "Services", "Contacts"];

  gsap.registerPlugin(ScrollToPlugin);

  const scrollToSection = (scrollElement: string, offsetY: number) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${scrollElement}`, offsetY },
      ease: "power2.easeOut",
    });
  };

  return (
    <footer
      id="footer"
      className="min-h-[90vh] border-t-[1px] border-offwhite bg-black py-28 font-spaceGrotesk xl:h-[90vh]"
    >
      <Container className="flex h-full flex-col gap-40 md:grid md:grid-cols-3 lg:gap-72 xl:gap-96">
        <div className="flex flex-col justify-between">
          <div>
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <p className="text-sm uppercase text-[#616260] ">Navigate</p>
              </div>
              <ul>
                {navItems.map(({ text, href }) => (
                  <li key={text}>
                    <button
                      type="button"
                      key={text}
                      className="hover-effect mb-1 text-3xl text-[#cfd0c8]"
                      onClick={() => {
                        scrollToSection(href, 0);
                      }}
                    >
                      {text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-16">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#3c3e3d]" />
                <p className="text-sm uppercase text-[#616260]">About Us</p>
              </div>

              <ul>
                {aboutItems.map((text) => (
                  <li key={text}>
                    <button
                      type="button"
                      key={text}
                      className="hover-effect mb-1 text-xl text-[#cfd0c8]"
                    >
                      {text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-10 text-[#616260]">&copy; 2023 — Copyright</p>
        </div>
        {/* Break*/}
        <div className="col-span-2 flex flex-col justify-between">
          <div className="flex flex-col gap-16">
            <div id="main-line" className="h-1 bg-white" />

            <div className="flex justify-between">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#3c3e3d]" />
                  <p className="text-sm uppercase text-[#616260]">Contact Us</p>
                </div>

                <div className="text-[#D0D0C8]">
                  <p>+1 980 971-24-19</p>
                  <p>hello@masskara23.com</p>
                </div>
              </div>
              <div className="flex gap-3 text-[#D0D0C8] [&>*>*]:text-2xl [&>*]:grid [&>*]:h-12 [&>*]:w-12 [&>*]:cursor-pointer [&>*]:place-items-center [&>*]:rounded-full [&>*]:border [&>*]:border-[#616260] [&>*]:p-2">
                <a href="https://www.facebook.com/omsimos.agency">
                  <BiLogoFacebookCircle />
                </a>
                <a href="https://www.instagram.com/omsim.os/">
                  <BiLogoInstagram />
                </a>
                <a href="https://github.com/omsimos">
                  <BiLogoGithub />
                </a>
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#3c3e3d]" />
                <p className="text-sm uppercase text-[#616260]">Location</p>
              </div>

              <div className="space-y-1 text-[#a2a29d]">
                <p>La Salle Avenue, Bacolod 6100</p>
                <p className="font-neue-roman text-2xl text-[#cfd0c8]">
                  10am—6pm
                </p>
                <p>/ Everyday</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="mt-20 cursor-pointer text-[#616260]">Privacy</p>
            <div className="flex gap-2">
              <p className="mt-20 cursor-pointer text-[#616260]">Eng</p>
              <p className="mt-20 cursor-pointer text-[#cfd0c8]">中国</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
