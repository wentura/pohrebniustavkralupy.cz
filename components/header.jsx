import Menu from "./menu";
import MobileMenu from "./mobileMenu";

export default function Header({ klas }) {
  klas ? klas : "";

  return (
    <header
      className={`2xl:container flex flex-wrap flex-row mx-auto items-center header justify-between pt-2 pb-12 px-4 top-0 sticky {klas} text-white bg-gradient-to-b from-modra from-60% navbar z-5`}
    >
      <div className="flex-1">
        <a className="" href="/">
          <span className="md:ml-3 text-md md:text-xl text-natyzlata font-extrabold">
            <span className="hidden sm:inline-block">Kralupský</span> pohřební
            ústav{" "}
            <span className="font-logo font-bold text-xl md:text-2xl">
              Cibulka
            </span>
          </span>
        </a>{" "}
      </div>
      <div className="flex-none hidden lg:flex">
        <Menu klas="min-w-[300px] items-center hidden xl:flex" />
      </div>

      <MobileMenu />
    </header>
  );
}
