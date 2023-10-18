import React from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useLayoutEffect from "../hooks/useIsomorphicLayoutEffect";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fn for creating a new scrollTrigger instance
 */
export function scrollTrig(
  trigger: string,
  start: string,
  scrub: number | boolean,
  toggleActions?: string,
  end?: string,
) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      start,
      scrub,
      toggleActions: toggleActions || "restart none none reset",
      end,
      markers: process.env.NODE_ENV === "development",
    },
  });

  return tl;
}

export const ScrollAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  /**
   * Lenis Smooth Scrolling
   */
  if (typeof window !== "undefined") {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  useLayoutEffect(() => {
    scrollTrig("#hero", "top top", 0.5, "", "65% top").to("#masskara-half", {
      y: -300,
      x: 100,
    });

    scrollTrig("#main-description", "-50% bottom", 0.3)
      .fromTo(
        "#main-description .item-1",
        {
          x: 130,
        },
        {
          x: -150,
        },
      )
      .fromTo(
        "#main-description .item-2",
        {
          x: -50,
        },
        {
          x: 270,
        },
        "<",
      );

    scrollTrig("#main-description", "top bottom", 0.3, "", "bottom 65%")
      .fromTo(
        ".main-description .item-1",
        {
          y: 200,
          skewY: 10,
        },
        {
          y: 0,
          skewY: 0,
          duration: 1,
        },
      )
      .fromTo(
        ".main-description .item-2",
        {
          y: 200,
          skewY: -10,
        },
        {
          y: 0,
          skewY: 0,
          duration: 1,
        },
        "<",
      );

    scrollTrig("#about", "180px bottom", 0.7).fromTo(
      "#showcase-img",
      {
        y: 20,
      },
      {
        y: -80,
      },
    );

    scrollTrig("#about-description", "top bottom", 0.4, "", "20% top").to(
      "#about-description div",
      {
        scaleY: 0,
      },
    );
  }, []);

  return <div>{children}</div>;
};
