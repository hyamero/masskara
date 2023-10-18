import React from "react";
import { gsap } from "gsap";
import useLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { useGlobal } from "@/hooks/useGlobalContext";

export const Loader = () => {
  const { unmountLoader, handleUnmountLoader } = useGlobal();

  useLayoutEffect(() => {
    const tl: GSAPTimeline = gsap.timeline({
      delay: 1,
      ease: "power3.inOut",
    });

    if (!unmountLoader) {
      tl.to("#loader-bg", {
        duration: 1.5,
        ease: "power3.inOut",
        opacity: 0,
        onComplete: () => handleUnmountLoader(),
      });
    }
  }, [handleUnmountLoader, unmountLoader]);

  return (
    !unmountLoader && (
      <div
        id="loader-bg"
        className="fixed left-0 top-0 z-50 grid h-screen w-screen place-items-center bg-black font-dirtyline text-5xl text-white"
      >
        LOADING...
      </div>
    )
  );
};
