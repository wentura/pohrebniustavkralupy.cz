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
      <section className=" body-font text-left">
        <div className="mt-12">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium font-nadpis mt-88 text-center">
            Pohřeb bez obřadu
          </h1>
          <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:mt-2 md:mb-8 dark:bg-gray-700" />
        </div>
        <div className="container mx-auto flex md:flex-row px-5 pt-12  flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1705689200/pohrebniustavcibulka/2_uhgulv.webp"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left scroll-mt-36">
            {/* <p className="text-xl font-bold leading-relaxed mt-8">Pohřeb</p> */}
            <p className=" leading-relaxed my-2">
              Nabízíme službu pohřeb bez obřadu, která zahrnuje i{" "}
              <Link
                href="/katalog/parteObrazky"
                className="underline underline-offset-2"
              >
                sestavení smutečního oznámení
              </Link>{" "}
            </p>
            <p className="hadvojka">K zajištění pohřbu bez obřadu předložte:</p>
            <ul className="list-outside list-disc pl-4">
              <li>List o prohlídce zemřelého</li>
              <li>Občanský průkaz zemřelého</li>
              <li>Kartu pojištěnce zemřelého</li>
              <li>Občanský průkaz objednavatele pohřbu</li>
              <li>Oblečení pro zemřelého (viz níže)</li>
            </ul>
            <p className="pt-4 hadvojka">Pohřeb</p>
            <ul className="mb-2 pl-4 leading-relaxed list-disc	list-outside">
              <li key="1">kremace (zpopelnění)</li>
              <li key="2">možnost tzv. identifikace</li>
              <li key="3">uložení do kopaného hrobu nebo hrobky</li>
            </ul>
            <p className="hadvojka">Převoz a úprava zesnulého</p>
            <p className="mb-2 leading-relaxed">
              Zajišťujeme převoz zemřelých z celé České republiky.
            </p>
            <p className="mb-2 leading-relaxed">
              Prosíme, abyste nám předali oblečení pro zesnulého, které měl(a)
              rád(a) – není třeba, aby bylo tmavé barvy.
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
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1710777790/pohrebniustavcibulka/IMG-6207_za2t7m.webp"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  scroll-mt-36">
            <p className="mb-2 leading-relaxed">
              V případě, že zemřelý neměl k dispozici vhodné oblečení pro
              pohřeb, jsme připraveni nabídnout použití tzv. rubáše.
            </p>
            {/* <p className="text-xl font-bold leading-relaxed mt-8"> */}
            <p className="hadvojka">Identifikace</p>
            <p className="mb-2 leading-relaxed">
              Identifikace značí soukromé a intimní rozloučení, které je určeno
              pouze pro nejbližší pozůstalé a příbuzné. Tato forma rozloučení
              umožňuje malému okruhu lidí naposledy se rozloučit se zemřelým v
              klidné a soukromé atmosféře obřadní síně.
            </p>
            <p className="hadvojka">Rakev</p>

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
            <p className="hadvojka">Urna</p>
            <p className="mb-2 leading-relaxed">
              Urnu s popelem následně přepravíme zpět do naší kanceláře v
              Kralupech nad Vltavou.
            </p>
            <p className="mb-2 leading-relaxed">
              Do 14 dnů informujeme objednavatele pohřbu o možnosti vyzvednutí
              urny včetně dokladu o zpopelnění v naší kanceláři.
            </p>
            <p className="mb-2 leading-relaxed">
              Objednavatel bude poučen v souladu se zákonem o správném postupu
              se zacházením s urnou.
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
