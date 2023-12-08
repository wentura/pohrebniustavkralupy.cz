import ADozvedetSeVic from "@/components/aDozvedetSeVic";
import Breadcrumbs from "@/components/breadcrumbs";
const breads = [
  { link: "/sluzby", title: "Služby" },
  { link: "/sluzby/pohrby", title: "Pohřby" },
];

export default function Pohrby() {
  return (
    <div>
      <Breadcrumbs breads={breads} />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600/dcdcdc/fff&text=1"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-nadpis">
              Pohřeb s obřadem
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">tesdt</div>
          </div>
        </div>

        <div className="container mx-auto flex md:flex-row-reverse px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600/dcdcdc/fff&text=2"
            />
          </div>
          <div
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center scroll-mt-36"
            id="bezobradu"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-nadpis mt-88">
              Pohřeb bez obřadu
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">tesdt</div>
          </div>
        </div>

        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600/dcdcdc/fff&text=3"
            />
          </div>
          <div
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center  scroll-mt-36"
            id="organizaceobradu"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-nadpis">
              Organizace obřadu
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">tesdt</div>
          </div>
        </div>

        <div
          className="container mx-auto flex md:flex-row-reverse px-5 py-24  flex-col items-center scroll-mt-36"
          id="prevozzesnuleho"
        >
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600/dcdcdc/fff&text=4"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-nadpis">
              Převoz a úprava zesnulého
            </h1>
            <p className="mb-8 leading-relaxed">
              S respektem k zesnulému zajišťujeme jeho převoz z místa úmrtí, což
              obvykle vyžaduje tzv. plnou moc, kterou pro Vás připravíme k
              podpisu.
            </p>
            <p className="mb-8 leading-relaxed">
              Prosíme, abyste nám předali oblečení, ve kterém chcete, aby byl
              Váš drahý nebo drahá obléknut(a). Může to být oblečení, které
              měl(a) rád(a) – není třeba, aby bylo tmavé barvy. Můžete vybrat
              ponožky, kalhoty, sukni, tričko, halenku nebo šaty se silonkami,
              tak aby to co nejvíce odpovídalo jejich osobnosti.
            </p>
            <p className="mb-8 leading-relaxed">
              V případě, že zemřelý neměl k dispozici vhodné oblečení pro
              pohřeb, jsme připraveni nabídnout možnost použití tzv. rubáše. S
              ohledem na přísný zákon týkající se pohřebnictví, se zesnulý stává
              předmětem důstojné péče, omytí, oblečení a úpravy, pokud to
              situace dovoluje.
            </p>
            <p className="mb-8 leading-relaxed">
              V případě vysoce infekční nemoci nebo jiného důvodu jsme nuceni
              zemřelého uchovat v hygienickém vaku.
            </p>
          </div>
        </div>

        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600/dcdcdc/fff&text=5"
            />
          </div>
          <div
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center  scroll-mt-36"
            id="rakve"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-nadpis">
              Pomoc s výběrem rakve / urny
            </h1>
            <p className="mb-8 leading-relaxed">
              Zesnulého uložíme do rakve dle Vašeho výběru. K pohřbu bez obřadu
              můžeme doporučit rakev bez přízdob, pokud to odpovídá Vašim
              představám.{" "}
            </p>
            <p className="mb-8 leading-relaxed">
              Po přípravě zesnulého probíhá převoz do krematoria, kde je zemřelý
              naposledy pečlivě zkontrolován. Zaměstnanci krematoria, nebo
              důvěryhodná osoba, se ujistí, že zemřelý je řádně oblečen, upraven
              a vše odpovídá dokumentaci.{" "}
            </p>
            <p className="mb-8 leading-relaxed">
              Následně dochází ke zpopelnění (kremaci).
              <br />
              Urnu s popelem následně přepravíme zpět do naší kanceláře v
              Kralupech nad Vltavou. V průběhu cca 10 - 14 dní kontaktujeme
              objednavatele pohřbu a informujeme jej, že si urnu včetně Dokladu
              o zpopelnění může vyzvednout v naší kanceláři.
            </p>
            <p className="mb-8 leading-relaxed">
              Na základě předloženého Dokladu k vyzvednutí urny nebo občanského
              průkazu (v případě, že jste objednavatelem pohřbu), můžeme urnu
              vydat. Objednavatel je poučen o správném postupu v souladu se
              zákonem.
            </p>
          </div>
        </div>

        <div
          className="container mx-auto flex md:flex-row-reverse px-5 py-24  flex-col items-center scroll-mt-36"
          id="urny"
        >
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600/dcdcdc/fff&text=6"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
            {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-nadpis">
              Převoz a úprava zesnulého
            </h1> */}
            <p className="mb-8 leading-relaxed">
              Základní urna s popelem, kterou Vám vydáme, je plastový obal o
              váze 2-4 kg, s údaji o zesnulém na štítku. Urna nepodléhá
              hygienickým předpisům a můžete si ji ponechat doma, uložit na
              hřbitově nebo provést tzv. rozptyl popela.
            </p>
            <p className="mb-8 leading-relaxed">
              Popel může být rozdělen a uložen podle vašeho uvážení. Pokud máte
              zájem o zdobný obal pro urnu, můžete si ho přiobjednat v naší
              kanceláři. Rozptyl nebo uložení urny na vlastním pozemku
              nevyžaduje žádné povolení.
            </p>
            <p className="mb-8 leading-relaxed">
              Pokud byste chtěli provést rozptyl nebo uložení urny na hřbitově,
              bude třeba předložit doklad o zpopelnění nebo úmrtní list správě
              hřbitova, která sídlí na obecním nebo městském úřadě, či
              Technických službách. Pokud byste chtěli provést rozptyl na jiném
              místě, než je Váš vlastní pozemek nebo hřbitov, budete potřebovat
              souhlas majitele pozemku, kde chcete provést rozptyl.
            </p>
            <p className="mb-8 leading-relaxed">
              Pokud jde o rozptyl do vody, bude nutný souhlas správy povodí, ale
              v případě rozptylu do moře žádný souhlas není vyžadován.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
