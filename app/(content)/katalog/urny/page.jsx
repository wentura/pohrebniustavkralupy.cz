import Breadcrumbs from "@/components/breadcrumbs";
import LandingSluzby from "@/components/landingSluzby";
const breads = [
  {
    link: "/katalog/urny",
    title: "Smuteční katalog / Urny",
  },
];

export default function Rakve() {
  const plast = [
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
  ];
  const kov = [
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
  ];
  const ostatni = [
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
  ];
  let counter = 0;
  return (
    <div>
      <Breadcrumbs breads={breads} />
      {/* <LandingSluzby /> */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 font-nadpis">
                Plastové obaly
              </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Rádi bychom Vám představili naši rozsáhlou nabídku urnových obalů,
              zahrnující kovové (měď, hliník, nerez) a plastové varianty, včetně
              těch s přidanou kameninou. Doporučujeme plastové obaly pro uložení
              urny do hrobu pod desku nebo do okénka, zatímco kovové obaly jsou
              ideální pro ty, kteří si přejí urnu ponechat doma nebo urnu s
              obalem uloží na hřbitov do okénka, případně kolumbária..
              Fotografie prezentované na našich webových stránkách zahrnují
              pouze několik vybraných typů, které máme k dispozici v naší
              kanceláři. Pro podrobnější informace a rozsáhlý výběr doporučujeme
              osobní návštěvu naší kanceláře, kde Vám rádi představíme katalogy
              od našich dodavatelů.
            </p>
          </div>
          <div className="flex flex-wrap -m-4  justify-center">
            {plast.map((item) => {
              {
                counter++;
              }
              return (
                <div className="xl:w-1/4 md:w-1/3 p-4" key={item.href}>
                  <div className="">
                    <img
                      className="rounded w-full"
                      src={item.href}
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {counter}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 font-nadpis">
                Kovové obaly
                <br />
                (hliník, mosaz, nerez, meď)
              </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              &nbsp;
            </p>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            {kov.map((item) => {
              {
                counter++;
              }
              return (
                <div className="xl:w-1/4 md:w-1/3 p-4 " key={item.href}>
                  <div className="">
                    <img
                      className="rounded w-full"
                      src={item.href}
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {counter}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 font-nadpis">
                Vázy, lucerny,...
              </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              V naší kanceláři nabízíme nejen vázy na květiny a lampičky, ale
              také další produkty, které mohou být pro vás užitečné.
              <br />
              <br />
              Například můžete zakoupit prosklenou vitrínu určenou na hroby, do
              které lze umístit 1, 2 nebo 3 urny, podle velikosti vitríny.
              <br />
              <br />
              Dále máme k dispozici plastové boxy určené pro bezpečné uložení
              uren do hrobů a hrobek. Jsme zde, abychom vám pomohli vybrat ty
              správné produkty pro vaše potřeby
            </p>
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
                <div className="xl:w-1/4 md:w-1/2 p-4" key={item.href}>
                  <div className="">
                    <img
                      className="rounded w-full"
                      src={item.href}
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {counter}
                    </h3>
                    <h2 className="text-lg text-gray-900 title-font mb-4 text-center">
                      {item.title}
                    </h2>
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
