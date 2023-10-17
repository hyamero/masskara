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
  end?: string
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
    scrollTrig("#hero", "top top", 0.5).to("#masskara-half", {
      y: -300,
    });
  }, []);

  return <div>{children}</div>;
};
