import Menu from "./menu";
import MobileMenu from "./mobileMenu";

export default function Header({ klas }) {
  klas ? klas : "";

  return (
    <header
      className={`container flex flex-wrap flex-row mx-auto items-center header justify-between pt-2 pb-8 px-4 top-0 sticky {klas} text-white bg-gradient-to-b from-modra from-60%`}
    >
      <a className="" href="/">
        <span className="md:ml-3 text-md md:text-xl text-natyzlata font-extrabold">
          <span className="hidden">Kralupský</span> pohřební ústav Cibulka
        </span>
      </a>
      {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav> */}

      <Menu klas="min-w-[300px] items-center hidden xl:flex" />
      <MobileMenu />
    </header>
  );
}
