import Link from "next/link";
import { Container } from "./Container";

export const Navbar = () => {
  return (
    <Container className="flex justify-between items-center pt-12 z-50 mix-blend-difference fixed left-0 top-0 right-0">
      <Link
        href="#"
        className="font-grotesk font-medium text-gray-300 uppercase text-xl "
      >
        YUHÜM.
      </Link>

      <ul className="md:flex gap-x-24 uppercase text-base text-gray-300 hidden">
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
