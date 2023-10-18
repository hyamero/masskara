import Link from "next/link";
import { Container } from "./Container";

export const Navbar = () => {
  return (
    <Container className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between pt-12 mix-blend-difference">
      <Link
        href="#"
        className="font-grotesk text-xl font-medium uppercase text-gray-300 "
      >
        YUHÜM.
      </Link>

      <ul className="hidden gap-x-24 text-base uppercase text-gray-300 md:flex">
        <li className="hover-effect">
          <Link href="#">Highlights</Link>
        </li>
        <li className="hover-effect">
          <Link href="#">History</Link>
        </li>
        <li className="hover-effect">
          <Link href="#">Discover</Link>
        </li>
      </ul>
    </Container>
  );
};
