import React from "react";
import { gsap } from "gsap";
import useLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { useGlobal } from "@/hooks/useGlobalContext";
import { JellyTriangle } from "@uiball/loaders";

export const Loader = () => {
  const { unmountLoader, handleUnmountLoader } = useGlobal();

  useLayoutEffect(() => {
    const tl: GSAPTimeline = gsap.timeline({
      delay: 1,
      ease: "power3.inOut",
    });

    if (!unmountLoader) {
      tl.to("#jelly-triangle", {
        delay: 2,
        duration: 1,
        ease: "power3.inOut",
        opacity: 0,
        scale: 0,
      })
        .fromTo(
          "#loader-bg p",
          {
            letterSpacing: "0.8em",
            opacity: 0,
          },
          {
            letterSpacing: "0",
            duration: 2,
            opacity: 1,
            ease: "power3.inOut",
          },
          "-=0.5",
        )
        .to("#loader-bg p", {
          y: -150,
          duration: 0.9,
          opacity: 0,
          ease: "power3.inOut",
        })
        .to(
          "#loader-bg",
          {
            scaleY: 0,
            duration: 1.5,
            ease: "power4.inOut",
          },
          "-=0.5",
        )
        .to(
          "#loader-bg-2",
          {
            scaleY: 0,
            duration: 1.7,
            ease: "power4.inOut",
            stagger: 0.7,
          },
          "<",
        )
        .fromTo(
          ".main-text span",
          {
            opacity: 0,
            y: 160,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1.5,
            ease: "power3.inOut",
          },
          "-=0.7",
        )
        .fromTo(
          ".main-year, .main-desc, .main-btn",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: "power3.inOut",
          },
          "-=0.4",
        )
        .fromTo(
          ".nav-item",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            stagger: 0.2,
            duration: 0.5,
            ease: "power3.inOut",
            onComplete: () => handleUnmountLoader(),
          },
        );
    }
  }, [handleUnmountLoader, unmountLoader]);

  return (
    !unmountLoader && (
      <>
        <div
          id="loader-bg"
          className="fixed left-0 top-0 z-[60] grid h-screen w-screen origin-top place-items-center bg-black"
        >
          <div id="jelly-triangle">
            <JellyTriangle size={60} speed={1.75} color="white" />
          </div>

          <p className="absolute left-1/2 -translate-x-1/2 font-spaceGrotesk text-5xl font-light tracking-normal text-offwhite">
            YUHÜM
          </p>
        </div>
        <div
          id="loader-bg-2"
          className="fixed left-0 top-0 z-[59] h-screen w-screen origin-top bg-offwhite"
        />
      </>
    )
  );
};
