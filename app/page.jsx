import BannerContact from "@/components/bannerContact";
import BannerPhone from "@/components/bannerPhone";
import Header from "@/components/header";
import Hero from "@/components/hero";
import LandingSluzby from "@/components/landingSluzby";
import SmallHero from "@/components/smallHero";
export default function Home() {
  return (
    <div>
      <Header klass="transparent" />
      <SmallHero />
      {/* <Hero /> */}
      <BannerPhone klas="" />
      <section className=" body-font">
        <div className="container px-5 py-4 md:py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-4xl text-2xl font-black font-nadpis mb-2 text-natyzlata">
              Kralupský pohřební ústav Cibulka
            </h1>
            <p className="lg:w-3/4 w-full leading-relaxed text-center text-modra font-nadpis pb-8">
              Rodinná tradice od roku 1914.
            </p>
            <p className="md:w-4/5 w-full text-center font-nadpis text-xl md:text-2xl leading-relaxed text-modra pt-4 pb-12">
              S úctou, empatií a zkušeností Vám pomůžeme se záležitostmi,
              <br className="hidden md:block" /> které nastávají po úmrtí
              blízkého člověka.
            </p>
            {/* <button className="btn btn-primary">Hello daisyUI!</button> */}

            <p className="md:w-4/5 w-full text-left leading-relaxed text-modra hidden">
              Jsme zde, abychom Vám poskytli podporu a pomoc v těch nejtěžších
              chvílích.
              <br />
              Naše služby jsou navrženy tak, aby respektovaly Vaše přání a
              poskytovaly útěchu v době smutku.
            </p>
          </div>

          <LandingSluzby />
        </div>
      </section>
      <BannerContact />
    </div>
  );
}
