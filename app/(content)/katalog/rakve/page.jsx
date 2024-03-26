import Breadcrumbs from "@/components/breadcrumbs";
import LandingSluzby from "@/components/landingSluzby";
const breads = [
  {
    link: "/katalog/rakve",
    title: "Smuteční katalog / Nabídka rakví",
  },
];

export default function Rakve() {
  const sirokeDlouheRakve = [
    {
      title: "R - ASTRA ANTURIE AŠ + ADL mahagon",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707379/pohrebniustavcibulka/rakve/R_-_ANTURIE_AS%CC%8C_ADL_mahagon_nfyeoj.webp",
    },
    {
      title: "R - ASTRA světlá AŠ + ADL",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707378/pohrebniustavcibulka/rakve/R_ASTRA-_sve%CC%8Cla%CC%81_AS%CC%8C_ADL_lo1ihm.webp",
    },
    {
      title: "R - ASTRA AŠ + ADL tm. hnědá",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707377/pohrebniustavcibulka/rakve/R_-_ASTRA_AS%CC%8C_ADL_tm._hne%CC%8Cda%CC%81_-_k_obr%CC%8Cadu_a_do_kop._hrobu_-_dlouha%CC%81_-_kopie_dswmuj.webp",
    },
  ];
  const dlouheRakve = [
    {
      title: "R - ASTRA ADL tm. hnědá",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707377/pohrebniustavcibulka/rakve/R_-_ASTRA_ADL_tm._hne%CC%8Cda%CC%81_-_k_obr%CC%8Cadu_a_do_kop._hrobu_-_dlouha%CC%81_qbtamv.webp",
    },

    {
      title: "R - ASTRA ADL světlá",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707377/pohrebniustavcibulka/rakve/R_-_ASTRA_ADL_sve%CC%8Ctla%CC%81_-_k_obr%CC%8Cadu_a_do_kop._hrobu_-_dlouha%CC%81_l2wy44.webp",
    },
    {
      title: "R - ADL mahagon BEGONIE",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707375/pohrebniustavcibulka/rakve/R_-_ADL_mahagon_BEGONIE_icypy2.webp",
    },
    {
      title: "R - ADL hnědá BEGONIE",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707375/pohrebniustavcibulka/rakve/R_-_ADL_hne%CC%8Cda%CC%81_BEGONIE_xc3vtg.webp",
    },
    {
      title: "M - vyřezávaná růže ADL",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707373/pohrebniustavcibulka/rakve/Moser_vyr%CC%8Ceta%CC%81vana%CC%81_ru%CC%8Az%CC%8Ce_ADL_nni66u.webp",
    },
  ];
  const sirokeRakve = [
    {
      title: "KR zlatý pruh AŠ ",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707374/pohrebniustavcibulka/rakve/KR_zlaty%CC%81_pruh_AS%CC%8C_-_k_obr%CC%8Cadu_a_do_kop._hrobu_-_s%CC%8Ciroka%CC%81_few0ve.webp",
    },
    {
      title: "KR zlatý pruh mahagon AŠ",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707375/pohrebniustavcibulka/rakve/KR_zlaty%CC%81_pruh_mahagon_AS%CC%8C_-_k_obr%CC%8Cadu_a_do_kop._hrobu_-_s%CC%8Ciroka%CC%81_-_kopie_lk3x8r.webp",
    },
    {
      title: "R - ASTRA světlá AŠ",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707378/pohrebniustavcibulka/rakve/R_ASTRA-_sve%CC%8Cla%CC%81_AS%CC%8C_lwtfzq.webp",
    },
  ];
  const rakve = [
    {
      title: "KR 2 hnědá",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707373/pohrebniustavcibulka/rakve/KR_2_hne%CC%8Cda%CC%81_-_k_obr%CC%8Cadu_ke_kremaci_trmijp.webp",
    },
    {
      title: "P6 rubín",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707373/pohrebniustavcibulka/rakve/P6_rubi%CC%81n_k_obr%CC%8Cadu_a_do_kop._hrobu_v6p8v7.webp",
    },
    {
      title: "KR zdobená ",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707373/pohrebniustavcibulka/rakve/KR_zdobena%CC%81_-_k_obr%CC%8Cadu_a_do_kop._hrobu_ff2xxn.webp",
    },
    {
      title: "KR vyřezávaná",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707373/pohrebniustavcibulka/rakve/KR_vyr%CC%8Ceza%CC%81vana%CC%81_-_k_obr%CC%8Cadu_a_do_kop._hrobu_icrekq.webp",
    },
    {
      title: "KR zlatý pruh ",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707374/pohrebniustavcibulka/rakve/KR_zlaty%CC%81_pruh_-_k_obr%CC%8Cadu_a_do_kop._hrobu_prve9s.webp",
    },
    {
      title: "SE - P hnědá",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707374/pohrebniustavcibulka/rakve/SE_-_P_hne%CC%8Cda%CC%81_k_obr%CC%8Cadu_a_do_kop._hrobu_fu6e17.webp",
    },
    {
      title: "SE - P bílá",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707376/pohrebniustavcibulka/rakve/SE_-_P_bi%CC%81la%CC%81_k_obr%CC%8Cadu_a_do_kop._hrobu_fmrl25.webp",
    },
  ];
  const rakve2 = [
    {
      title: "KR 55 s kov. vložkou",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707375/pohrebniustavcibulka/rakve/KR_55_dub_-_do_hrobky_hth4ye.webp",
    },
    {
      title: "Moser dub s kov. vložkou",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707373/pohrebniustavcibulka/rakve/Moser_dub_s_vloz%CC%8Ckou_-_do_hrobek_lnmsjy.webp",
    },
    {
      title: "KR 40 třešeň s kov. vložkou",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1711477345/pohrebniustavcibulka/rakve/KR40tresen_agz4wm.webp",
    },
    {
      title: "Amerika - lila",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707376/pohrebniustavcibulka/rakve/Amerika_-_kov_-_do_hrobek_kx80lr.webp",
    },
  ];
  const rakve3 = [
    {
      title: "kremační bezobřadá",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707379/pohrebniustavcibulka/rakve/Kremac%CC%8Cni%CC%81_BO_-_bez_obr%CC%8Cadu_fsyrh5.webp",
    },
    {
      title: "kremační bezobřadá (široká)",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1706707379/pohrebniustavcibulka/rakve/Kremac%CC%8Cni%CC%81_BO_AS%CC%8C_-_bez_obr%CC%8Cadu_f471al.webp",
    },
  ];
  let counter = 0;
  return (
    <div>
      <Breadcrumbs breads={breads} />
      {/* <LandingSluzby /> */}
      {/* RAKVE BEZOBRADE */}
      <section className="body-font">
        <div className="mt-12">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium font-nadpis mt-88 text-center">
            Nabídka rakví
          </h1>
          <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:mt-2 md:mb-8 dark:bg-gray-700" />
          <div className="flex flex-wrap w-full mb-20 flex-col container px-5 mx-auto">
            <div className="w-full leading-relaxed">
              <p>
                V našem webovém katalogu je pouze ukázka nejčastěji žádaných
                rakví.
              </p>
              <p>
                Všechny rakve jsou certifikované, což znamená, že splňují
                veškeré zákonné normy a kvalitu.
              </p>
              <p className="pt-2 font-bold">Rakve, dle ukládání:</p>
              <ul className="list-inside list-disc pb-4">
                <li key="1">
                  <strong>Kremace (zpopelnění) -</strong> celodřevěné rakve,
                  vybavené vnitřním saténovým čalouněním
                </li>
                <li key="2">
                  <strong>Ukládání do kopaného hrobu -</strong> taktéž
                  celodřevěné rakve, vybavené vnitřním saténovým čalouněním,
                  opatřené madly
                </li>
                <li key="3">
                  <strong>Ukládání do zděné hrobky -</strong> celodřevěné,
                  dubové rakve s kovovou vložkou, vybavené vnitřním saténovým
                  čalouněním, opatřené madly
                </li>
              </ul>
              <p>
                Na přání lze přidat na každou rakev kříž, což umožňuje projevení
                úcty k víře zesnulého.
              </p>
              <p>Vždy se snažíme klientům při jejich výběru vyjít vstříc.</p>
            </div>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col">
            <div className="w-full mb-6 lg:mb-0">
              {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 font-nadpis"> */}
              <h1 className="hajednicka">Rakve bezobřadé</h1>
            </div>
            <div className="w-full leading-relaxed">
              <p className="mb-2">
                Ve chvílích těžkého loučení si každý zaslouží respekt a
                důstojnost, a naše rakve určené k pohřbu bez obřadu jsou
                navrženy s ohledem na jednoduchost a soucit. Tyto rakve vynikají
                svou jednoduchostí a čistým designem, respektujíce tak intimitu
                okamžiku.
              </p>
              <p className="mb-2">
                Bez vnějších ozdob nabízí klientům možnost soustředit se na
                esenciální hodnoty posledního rozloučení. Přesto, i v rámci této
                jednoduchosti, je uvnitř rakve pečlivě zpracované saténové
                čalounění a polštářek, dodávající pohodlí a náležitou péči.
              </p>
              <p className="mb-2">
                Věříme v individualitu smutečního procesu a proto chceme
                klientům poskytnout možnost přizpůsobitelnosti i v případě rakví
                určených pro pohřeb bez obřadu.
              </p>
              <p className="mb-2">
                Pokud byste si přáli zdobenou rakev, máme pro vás možnost výběru
                z naší široké škály nabízených modelů.
              </p>
              <p>
                V této smutné chvíli vám naše rakve slibují nejen jednoduchost,
                ale i přizpůsobitelnost dle vašich potřeb a přání, abyste se
                mohli důstojně rozloučit s vaším blízkým.
              </p>
            </div>
          </div>
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
                    <p className="tracking-widest font-medium title-font text-center">
                      {item.title}
                    </p>
                    <h2 className="text-lg title-font mb-4 text-center">
                      {/* {item.title} */}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Rakve určené k obřadu ke kremaci, */}
      <section className=" body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 font-nadpis">
                Rakve určené k obřadu ke kremaci, do kopaného hrobu
              </h1>
            </div>
            <div className="w-full leading-relaxed">
              <p className="mb-2">
                Rakve jsou klíčovým prvkem posledního rozloučení s našimi
                blízkými, a my chápeme, jak důležité je, aby tyto rakve nejen
                respektovaly tradice, ale také splňovaly individuální potřeby
                každé rodiny.
              </p>
              <p className="mb-2">
                Všechny naše rakve jsou certifikované, což znamená, že splňují
                veškeré normy pro bezpečnost a kvalitu, a to s důrazem na jejich
                kvalitní a elegantní provedení. Celodřevěné rakve jsou k
                dispozici s různými estetickými prvky. Můžete si vybrat mezi
                plastovými ozdobami, vyřezáváním, zlatým pruhem nebo provázkem,
                které dodávají rakvi jedinečný vzhled a podtrhují důstojnost
                posledního rozloučení.
              </p>
              <p className="mb-2">
                Při pohřbu do hrobu se na rakev přidávají madla pro snazší
                manipulaci. Na přání lze přidat na každou rakev kříž, což
                umožňuje projevení úcty k víře zesnulého.
              </p>
            </div>
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
                    <p className="tracking-widest text-center font-medium title-font">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 font-nadpis">
                Rakve široké
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap -m-4  justify-center">
            {sirokeRakve.map((item) => {
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
                    <p className="tracking-widest text-center font-medium title-font">
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
              <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 font-nadpis">
                Rakve dlouhé
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap -m-4  justify-center">
            {dlouheRakve.map((item) => {
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
                    <h3 className="tracking-widest text-center font-medium title-font">
                      {item.title}
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
          <div className="flex flex-wrap w-full mb-20 flex-col">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 font-nadpis">
                Rakve široké dlouhé
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap -m-4  justify-center">
            {sirokeDlouheRakve.map((item) => {
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
                    <p className="tracking-widest text-center font-medium title-font">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Rakve určené k obřadu k ukládání do hrobky */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 font-nadpis">
                Rakve určené k obřadu k ukládání do hrobky
              </h1>
            </div>
            <div className="w-full leading-relaxed">
              <p className="mb-2">
                Pro důstojné uložení do zděné hrobky nabízíme rakve vybavené
                speciálními madly, která umožňují snadné spuštění do hrobky a
                usnadňují manipulaci s rakví.
              </p>
              <p className="mb-2">
                Mezi naše nabízené rakve pro ukládání do hrobky patří &quot;KR
                55 dub&quot; a &quot;Moser dub&quot;, obě celodřevěné a vybavené
                kovovou vložkou uvnitř pro maximální stabilitu. Tyto rakve
                spojují tradiční řemeslné zpracování s moderním designem.
              </p>
              <p className="mb-2">
                Na tyto rakve je možné přidat kříž, což dodává poslednímu
                rozloučení osobní a náboženský rozměr.
              </p>
              <p className="mb-2">
                Pro ty, kdo preferují luxusní formu obřadu, nabízíme celokovovou
                rakev &quot;Amerika - lila&quot;. Tato rakev splňuje nejen
                estetické nároky, ale i vysoké standardy pevnosti a bezpečnosti.
              </p>
            </div>
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
                    <p className="tracking-widest text-center font-medium title-font">
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
