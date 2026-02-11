import Breadcrumbs from "@/components/breadcrumbs";
import LandingSluzby from "@/components/landingSluzby";

const breads = [
  {
    link: "/katalog/urny",
    title: "Smuteční katalog / Urny",
  },
];

export const metadata = {
  title: "Obaly na urny a smuteční zboží",
  description:
    "Katalog obalů na urny a smutečního zboží. Pohřební ústav Cibulka Kralupy nad Vltavou.",
};

export default function Urny() {
  const plast = [
    {
      title: "UH těžký - černý (s přidanou kameninou)",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672035/pohrebniustavcibulka/urny/DSC_0012.JPG_cnzoha.webp",
    },
    {
      title: "UH lehký - pískový s listem",
      href: "    https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672038/pohrebniustavcibulka/urny/DSC_0026.JPG_cj4gpt.webp",
    },
    {
      title: "UH lehký - měděný (hnědý) s listem",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672042/pohrebniustavcibulka/urny/DSC_0033.JPG_oy4dwi.webp",
    },
    {
      title: "UH lehký - cobalt (modrý) s listem",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672041/pohrebniustavcibulka/urny/DSC_0030.JPG_skzffq.webp",
    },
    {
      title: "UH lehký - černý s listem",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672040/pohrebniustavcibulka/urny/DSC_0028.JPG_qc1jod.webp",
    },
  ];
  const kov = [
    {
      title: "Nerez zlatá růže",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672056/pohrebniustavcibulka/urny/DSC_0068.JPG_vcpyjt.webp",
    },
    {
      title: "Hliník, červený s liliemi (ploché víko)",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672046/pohrebniustavcibulka/urny/DSC_0040.JPG_qtreec.webp",
    },
    {
      title: "Hliník (kulaté víko) s ručně malovanou růží",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672055/pohrebniustavcibulka/urny/DSC_0060.JPG_yq5tpo.webp",
    },
    {
      title: "Hliník, 2 černo-zlatá s kalou",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672053/pohrebniustavcibulka/urny/DSC_0054.JPG_wsisj3.webp",
    },
    {
      title: "Hliník, černo-stříbrná s kalou",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672044/pohrebniustavcibulka/urny/DSC_0037.JPG_gxvlno.webp",
    },
    {
      title: "Hliník, 4 fialová",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672050/pohrebniustavcibulka/urny/DSC_0049.JPG_mhvt21.webp",
    },
    {
      title: "Hliník, hnědý se zlatým pruhem (545 701 AL zlatý pruh)",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672051/pohrebniustavcibulka/urny/DSC_0050.JPG_cauwqx.webp",
    },
    {
      title: "Měď, hnědý (554 700 CU)",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672052/pohrebniustavcibulka/urny/DSC_0052.JPG_ifvcs6.webp",
    },
    {
      title: "Měď, modrý (554 CU-měď)",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672054/pohrebniustavcibulka/urny/DSC_0057.JPG_hfwwni.webp",
    },
    {
      title: "Měď, s ručně rytou růží",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672047/pohrebniustavcibulka/urny/DSC_0042.JPG_domihx.webp",
    },
    {
      title: "Měď, zdobený s křížem",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672049/pohrebniustavcibulka/urny/DSC_0047.JPG_waacuy.webp",
    },
    // {
    //   title: "",
    //   href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672048/pohrebniustavcibulka/urny/DSC_0045.JPG_p7jlnd.webp",
    // },

    // {
    //   title: "",
    //   href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672045/pohrebniustavcibulka/urny/DSC_0039.JPG_br279z.webp",
    // },
  ];
  const ostatni = [
    {
      title: "lucerna nerez černá malá a velká",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672036/pohrebniustavcibulka/urny/DSC_0020.JPG_al2awz.webp",
    },
    {
      title: "lucerna nerez malá a velká",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672036/pohrebniustavcibulka/urny/DSC_0016.JPG_ntrh2h.webp",
    },
    {
      title: "váza nerez malá a velká",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672039/pohrebniustavcibulka/urny/DSC_0025.JPG_xoxp6z.webp",
    },
    {
      title: "sklo na svíčku malé a velké",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672037/pohrebniustavcibulka/urny/DSC_0022.JPG_dbtqvm.webp",
    },
  ];
  let counter = 0;
  return (
    <div>
      <Breadcrumbs breads={breads} />
      {/* <LandingSluzby /> */}
      <section className="">
        <div className="mt-12">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  font-nadpis mt-88 text-center">
            Obaly na urny
          </h1>
          <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:mt-2 md:mb-8 dark:bg-gray-700" />
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="hajednicka">Plastové obaly</h1>
            </div>
            <div className="w-full leading-relaxed text-gray-500">
              <p className="mt-2">
                Rádi bychom Vám představili naši rozsáhlou nabídku urnových
                obalů, zahrnující kovové (měď, hliník, nerez) a plastové
                varianty, včetně těch s přidanou kameninou.
              </p>
              <p className="mt-2">
                <strong>Doporučujeme plastové obaly</strong> pro uložení urny do
                hrobu pod desku nebo do urnové schránky. Zatímco kovové obaly
                jsou ideální pro uložení do kolumbária.
              </p>
              <p className="mt-2">
                Fotografie prezentované na našich webových stránkách zahrnují
                pouze několik vybraných typů, které máme k dispozici v naší
                kanceláři.
              </p>
              <p className="mt-2">
                Pro podrobnější informace a rozsáhlý výběr doporučujeme osobní
                návštěvu, kde jsou k nahlédnutí katalogy od našich dodavatelů.
              </p>
              <p className="mt-2">
                Na přání zákazníka jsou urny dodávány i se štítky nebo
                gravírováním, na kterém je uvedeno jméno zemřelého, datum
                narození a datum úmrtí.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -m-4  justify-center">
            {plast.map((item) => {
              {
                counter++;
              }
              return (
                <div className="xl:w-1/5 md:w-1/3 p-4" key={item.href}>
                  <div className="mb-8">
                    <img
                      className="rounded w-full"
                      src={item.href}
                      alt={item.title}
                    />
                    <p className="tracking-widest font-medium title-font text-center">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 font-nadpis">
                Kovové obaly
                <br />
              </h1>
            </div>
            <p className="w-full leading-relaxed text-gray-500">
              Hliník, mosaz, nerez, meď.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            {kov.map((item) => {
              {
                counter++;
              }
              return (
                <div className="xl:w-1/5 md:w-1/3 p-4 " key={item.href}>
                  <div className="mb-8">
                    <img
                      className="rounded w-full"
                      src={item.href}
                      alt={item.title}
                    />
                    <p className="tracking-widest font-medium title-font text-center">
                      {/* {counter} */}
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 font-nadpis">
                Vázy, lucerny,...
              </h1>
            </div>
            <div className="  w-full leading-relaxed text-gray-500">
              <p className="mt-2">
                V naší kanceláři nabízíme nejen vázy na květiny a lampičky, ale
                také další smuteční zboží.
              </p>
              <p className="mt-2">
                Můžete u nás například zakoupit prosklenou vitrínu určenou na
                hroby, do které lze umístit 1, 2 nebo 3 urny, podle velikosti
                vitríny.
              </p>
              <p className="mt-2">
                Dále máme k dispozici plastové boxy určené pro bezpečné uložení
                uren do hrobů a hrobek. Jsme zde, abychom vám pomohli vybrat ty
                správné produkty pro vaše potřeby.
              </p>
            </div>
          </div>
          {/* <img
            className="rounded w-full pb-12"
            src="https://dummyimage.com/1000x400"
            alt="content"
          /> */}
          <div className="flex flex-wrap -m-4  justify-center">
            {ostatni.map((item) => {
              {
                counter++;
              }
              return (
                <div className="xl:w-1/5 md:w-1/2 p-4" key={item.href}>
                  <div className="mb-8">
                    <img
                      className="rounded w-full"
                      src={item.href}
                      alt={item.title}
                    />
                    {/* <h3 className="tracking-widest font-medium title-font">
                      {counter}
                    </h3> */}
                    <p className="tracking-widest font-medium title-font text-center">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
