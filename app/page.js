import BannerContact from "@/components/bannerContact";
import BannerPhone from "@/components/bannerPhone";
import Header from "@/components/header";
import Hero from "@/components/hero";
export default function Home() {
  return (
    <div>
      <Header klass="transparent" />
      <Hero />
      <BannerPhone klas="" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-4xl text-2xl font-black font-nadpis mb-2 text-natyzlata">
              Kralupský pohřební ústav Cibulka
            </h1>
            <p className="lg:w-3/4 w-full leading-relaxed text-right text-modra font-nadpis pb-8">
              Rodinná tradice od roku 1914.
            </p>
            <p className="md:w-3/4 w-full text-left leading-relaxed text-modra">
              Jsme zde, abychom Vám poskytli podporu a pomoc v těch nejtěžších
              chvílích.
              <br />
              Naše služby jsou navrženy tak, aby respektovaly Vaše přání a
              poskytovaly útěchu v době smutku.
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 underline-offset-4 underline decoration-natyzlata decoration-4">
                  Převoz zemřelého z celé ČR do místa pohřbu
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 underline-offset-4 underline decoration-natyzlata decoration-4">
                  Organizace obřadu
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 underline-offset-4 underline decoration-natyzlata decoration-4">
                  Služba profesionálního řečníka
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 underline-offset-4 underline decoration-natyzlata decoration-4">
                  Výroba a tisk smutečních oznámení a pozvánek{" "}
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 underline-offset-4 underline decoration-natyzlata decoration-4">
                  Výběr rakví, smutečních kytic a věnců
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 underline-offset-4 underline decoration-natyzlata decoration-4">
                  Poradce a pomoc s dokumentací
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BannerContact />
    </div>
  );
}
