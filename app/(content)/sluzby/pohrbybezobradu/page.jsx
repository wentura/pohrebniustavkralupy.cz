import ADozvedetSeVic from "@/components/aDozvedetSeVic";
import Breadcrumbs from "@/components/breadcrumbs";
import Link from "next/link";
const breads = [
  { link: "/sluzby", title: "Služby" },
  { link: "/sluzby/pohrbybezobradu", title: "Pohřeb bez obřadu" },
];

export default function Pohrbybezobradu() {
  return (
    <div>
      <Breadcrumbs breads={breads} />
      <section className="text-gray-600 body-font text-left">
        <div className="container mx-auto flex md:flex-row px-5 pt-12  flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1705689200/pohrebniustavcibulka/2_uhgulv.webp"
            />
          </div>
          <div
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left   scroll-mt-36"
            // className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center scroll-mt-36"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-nadpis mt-88">
              Pohřeb bez obřadu
            </h1>

            <p className="text-xl font-bold leading-relaxed mt-8">Pohřeb</p>
            <ul className="mb-4 pl-4 leading-relaxed list-disc	list-outside">
              <li key="1">kremace (zpopelnění)</li>
              <li key="2">možnost tzv. identifikace</li>
              <li key="3">uložení do kopaného hrobu nebo hrobky</li>
            </ul>
            <p className="mb-2 leading-relaxed">
              Služba pohřeb bez obřadu zahrnuje sestavení smutečního oznámení a
              přípravu zesnulého v oblečení dle Vašeho výběru.
            </p>
            {/* <p className="text-xl font-bold leading-relaxed mt-8"> */}
            <p className="title-font sm:text-4xl text-3xl mt-8  mb-4 font-medium text-gray-900 font-nadpis">
              Převoz a úprava zesnulého
            </p>
            <p className="mb-2 leading-relaxed">
              Zajišťujeme převoz zemřelých z různých částí České republiky.
              Soustředíme se na oblast Kralupska a okolí.
            </p>
            <p className="mb-2 leading-relaxed">
              Prosíme, abyste nám předali oblečení, ve kterém chcete, aby byl
              Váš drahý nebo drahá obléknut(a).
            </p>
            <p className="mb-2 leading-relaxed">
              Může to být oblečení, které měl(a) rád(a) – není třeba, aby bylo
              tmavé barvy.
            </p>
            <p className="leading-relaxed">Můžete vybrat:</p>
            <ul className="pl-4 list-disc">
              <li key="a">ponožky,</li>
              <li key="b">kalhoty, sukni,</li>
              <li key="c">tričko, halenku,</li>
              <li key="d">šaty se silonkami,</li>
            </ul>
            <p className="mb-2 leading-relaxed">
              tak aby to co nejvíce odpovídalo jejich osobnosti.
            </p>
          </div>
        </div>

        <div className="container mx-auto flex px-5 pt-12 md:flex-row-reverse flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1705689200/pohrebniustavcibulka/3_bmkaa7.webp"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  scroll-mt-36">
            <p className="mb-2 leading-relaxed">
              Běžně se doporučuje{" "}
              <strong>nedávat zesnulému do rakve boty</strong>. To je z
              ekologických důvodů – obuv je většinou vyrobena z materiálů, které
              by při zpopelnění vypouštěly do ovzduší nechtěné zplodiny.
            </p>
            <p className="mb-2 leading-relaxed">
              V případě, že zemřelý neměl k dispozici vhodné oblečení pro
              pohřeb, jsme připraveni nabídnout použití tzv. rubáše.
            </p>
            <p className="mb-2 leading-relaxed">
              S ohledem na přísný zákon týkající se pohřebnictví, se zesnulý
              stává předmětem důstojné péče, omytí, oblečení a úpravy, pokud to
              situace dovoluje.
            </p>
            <p className="mb-2 leading-relaxed">
              V případě vysoce infekční nemoci nebo jiného důvodu jsme nuceni
              zemřelého uchovat v hygienickém vaku.
            </p>
            <p className="mb-2 leading-relaxed">
              K pohřbu kremací bez obřadu můžeme doporučit rakev bez přízdob,
              pokud to odpovídá Vašim představám.
            </p>
            <p className="mb-2 leading-relaxed">
              <Link
                href="/katalog/rakve"
                className="underline-offset-4 underline"
              >
                více k výběru rakve ...
              </Link>
            </p>
            {/* <p className="text-xl font-bold leading-relaxed mt-8"> */}
            <p className="title-font sm:text-4xl text-3xl mt-8  mb-4 font-medium text-gray-900 font-nadpis">
              Identifikace
            </p>
            <p className="mb-2 leading-relaxed">
              Identifikace značí soukromé a intimní rozloučení, které je určeno
              pouze pro nejbližší pozůstalé a příbuzné. Tato forma rozloučení
              umožňuje malému okruhu lidí naposledy se rozloučit se zemřelým v
              klidné a soukromé atmosféře obřadní síně.
            </p>
            <p className="mb-2 leading-relaxed">
              Po přípravě zesnulého probíhá převoz na hřbitov, kde je uložen do
              hrobu či hrobky nebo do krematoria, kde je zemřelý naposledy
              pečlivě zkontrolován - čili je řádně oblečen, upraven a vše
              odpovídá dokumentaci.
            </p>
            <p className="mb-2 leading-relaxed">
              Poté dochází ke zpopelnění (kremaci).
            </p>
            {/* <p className="text-xl font-bold leading-relaxed mt-8"> */}
            <p className="title-font sm:text-4xl text-3xl mt-8  mb-4 font-medium text-gray-900 font-nadpis">
              Urna
            </p>
            <p className="mb-2 leading-relaxed">
              Urnu s popelem následně přepravíme zpět do naší kanceláře v
              Kralupech nad Vltavou.
            </p>
            <p className="mb-2 leading-relaxed">
              V průběhu cca 10 - 14 dní kontaktujeme objednavatele pohřbu a
              informujeme jej, že si urnu včetně dokladu o zpopelnění může
              vyzvednout v naší kanceláři.
            </p>
            <p className="mb-2 leading-relaxed">
              Na základě předloženého Dokladu k vyzvednutí urny nebo občanského
              průkazu (v případě,že jste objednavatelem pohřbu), můžeme urnu
              vydat.
            </p>
            <p className="mb-2 leading-relaxed">
              Objednavatel je poučen o správném postupu v souladu se zákonem.
            </p>

            <p className="mb-2 leading-relaxed">
              <Link
                href="/pro-pozustale"
                className="underline-offset-4 underline"
              >
                více k Informacím pro objednavatele pohřbu ...
              </Link>
            </p>
            {/* 
            <p className="mb-2 leading-relaxed">
              <Link
                href="/sluzby/hudba#foto"
                className="underline underline-offset-4"
              >
                Fotografie
              </Link>{" "}
              k obřadu bude připravena a umístěna před samotným začátkem obřadu.
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
}
