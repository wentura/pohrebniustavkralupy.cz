import Breadcrumbs from "@/components/breadcrumbs";
import LandingSluzby from "@/components/landingSluzby";
const breads = [
  {
    link: "/katalog/rakve",
    title: "Smuteční katalog / Rakve",
  },
];

export default function Rakve() {
  const rakve = [
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
  ];
  const rakve2 = [
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x400",
    },
  ];
  const rakve3 = [
    {
      title: "Kvetina 1",
      href: "https://dummyimage.com/600x400",
    },
    {
      title: "Kvetina 2",
      href: "https://dummyimage.com/600x400",
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
                Rakve určené k obřadu ke kremaci,
                <br />
                do kopaného hrobu
              </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Rakve jsou klíčovým prvkem posledního rozloučení s našimi
              blízkými, a my chápeme, jak důležité je, aby tyto rakve nejen
              respektovaly tradice, ale také splňovaly individuální potřeby
              každé rodiny.
              <br />
              <br />
              Všechny naše rakve jsou certifikované, což znamená, že splňují
              veškeré normy pro bezpečnost a kvalitu, a to s důrazem na jejich
              kvalitní a elegantní provedení. Celodřevěné rakve jsou k dispozici
              s různými estetickými prvky. Můžete si vybrat mezi plastovými
              ozdobami, vyřezáváním, zlatým pruhem nebo provázkem, které
              dodávají rakvi jedinečný vzhled a podtrhují důstojnost posledního
              rozloučení.
              <br />
              <br />
              Při pohřbu do hrobu se na rakev přidávají madla pro snazší
              manipulaci. Na přání lze přidat na každou rakev kříž, což umožňuje
              projevení úcty k víře zesnulého.
              <br />
              <br />
              Naše rakve nejsou pouhým nástrojem pro poslední rozloučení, ale
              prostředkem, který pomáhá vyjádřit jedinečnost života, který jsme
              společně sdíleli.
            </p>
          </div>
          <div className="flex flex-wrap -m-4  justify-center">
            {rakve.map((item) => {
              {
                counter++;
              }
              return (
                <div className="xl:w-1/3 md:w-1/3 p-4" key={item.href}>
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
                Rakve určené k obřadu k ukládání do hrobky
              </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Pro dostojné uložení do zděné hrobky nabízíme rakve vybavené
              speciálními madly, která umožňují snadné spuštění do hrobu a
              usnadňují manipulaci s rakví.
              <br />
              <br />
              Mezi naše nabízené rakve pro ukládání do hrobky patří &quot;KR 55
              dub&quot; a &quot;Moser dub&quot;, obě celodřevěné a vybavené
              kovovou vložkou uvnitř pro maximální stabilitu. Tyto rakve spojují
              tradiční řemeslné zpracování s moderním designem.
              <br />
              <br />
              Na tyto rakve je možné přidat kříž, což dodává poslednímu
              rozloučení osobní a náboženský rozměr.
              <br />
              <br />
              Pro ty, kdo preferují luxusní formu obřadu, nabízíme celokovou
              rakev &quot;Amerika - lila&quot;. Tato rakev splňuje nejen
              estetické nároky, ale i vysoké standardy pevnosti a bezpečnosti.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            {rakve2.map((item) => {
              {
                counter++;
              }
              return (
                <div className="xl:w-1/3 md:w-full p-4" key={item.href}>
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
                Rakve bezobřadé
              </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Ve chvílích těžkého loučení si každý zaslouží respekt a
              důstojnost, a naše rakve určené k pohřbu bez obřadu jsou navrženy
              s ohledem na jednoduchost a soucit. Tyto rakve vynikají svou
              jednoduchostí a čistým designem, respektujíce tak intimitu
              okamžiku.
              <br />
              <br />
              Bez vnějších ozdob nabízí klientům možnost soustředit se na
              esenciální hodnoty posledního rozloučení. Přesto, i v rámci této
              jednoduchosti, je uvnitř rakve pečlivě zpracované saténové
              čalounění a polštářek, dodávající pohodlí a náležitou péči.
              <br />
              <br />
              Věříme v individualitu smutečního procesu a proto chceme klientům
              poskytnout možnost přizpůsobitelnosti i v případě rakví určených
              pro pohřeb bez obřadu.
              <br />
              <br />
              Pokud byste si přáli zdobenou rakev, máme pro vás možnost výběru z
              naší široké škály nabízených modelů.
              <br />
              <br />V této smutné chvíli vám naše rakve slibují nejen
              jednoduchost, ale i přizpůsobitelnost dle vašich potřeb a přání,
              abyste se mohli důstojně rozloučit s vaším blízkým.
            </p>
          </div>
          {/* <img
            className="rounded w-full pb-12"
            src="https://dummyimage.com/1000x400"
            alt="content"
          /> */}
          <div className="flex flex-wrap -m-4 justify-center">
            {rakve3.map((item) => {
              {
                counter++;
              }
              return (
                <div className="xl:w-1/2 md:w-1/2 p-4" key={item.href}>
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
