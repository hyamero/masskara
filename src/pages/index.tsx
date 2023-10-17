import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Loader } from "@/gsap/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}
