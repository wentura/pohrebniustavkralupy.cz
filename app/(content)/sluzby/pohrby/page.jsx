import ADozvedetSeVic from "@/components/aDozvedetSeVic";
import Breadcrumbs from "@/components/breadcrumbs";
import Link from "next/link";
const breads = [
  { link: "/sluzby", title: "Služby" },
  { link: "/sluzby/pohrby", title: "Pohřeb s obřadem" },
];

export default function Pohrby() {
  return (
    <div>
      <Breadcrumbs breads={breads} />
      <section className="text-gray-600 body-font">
        <div className="mt-12">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-nadpis mt-88 text-center">
            Pohřeb s obřadem
          </h1>
          <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:mt-2 md:mb-8 dark:bg-gray-700" />
        </div>
        <div className="container mx-auto flex px-5 pt-12 md:flex-row flex-col items-center lg:items-stretch">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1705689200/pohrebniustavcibulka/6_t9yfo0.webp"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">
            <p className="mb-2 leading-relaxed">
              Profesionální péče a respekt v těžkých chvílích ztráty blízkého.
            </p>
            <p className="hadvojka">K zajištění pohřbu s obřadem předložte:</p>
            <ul className="mb-4 pl-4 leading-relaxed list-disc	list-outside">
              <li key="1">list o prohlídce zemřelého</li>
              <li key="2">občanský průkaz zemřelého</li>
              <li key="3">kartu pojištěnce zemřelého</li>
              <li key="4">občanský průkaz objednatele pohřbu</li>
              <li key="5">oblečení pro zemřelého (vizte níže)</li>
            </ul>
            <p className="hadvojka">Rozloučení</p>
            <ul className="mb-4 pl-4 leading-relaxed list-disc	list-outside">
              <li key="1">se širokou veřejností</li>
              <li key="2">v úzkém kruhu rodinném</li>
              <li key="3">v obřadní síni</li>
              <li key="4">na hrobě</li>
              <li key="5">v domě smutku</li>
              <li key="6">v kostele</li>
            </ul>
            <p className="hadvojka">Pohřeb</p>
            <ul className="mb-4 pl-4 leading-relaxed list-disc	list-outside">
              <li>kremace (zpopelnění)</li>
              <li>uložení do rodinného hrobu nebo hrobky</li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto flex px-5 pt-12 md:flex-row flex-col items-center lg:items-stretch">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1710081286/pohrebniustavcibulka/prevozZemreleho2_w1u672.webp"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">
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
              <li>ponožky,</li>
              <li>kalhoty, sukni,</li>
              <li>tričko, halenku,</li>
              <li>šaty se silonkami,</li>
            </ul>
            <p className="mb-2 leading-relaxed">
              tak aby to co nejvíce odpovídalo jejich osobnosti.
            </p>

            <p className="hadvojka">Smuteční oznámení</p>
            <p className="mb-4 leading-relaxed">
              Na základě Vašeho přání společně sestavíme text na parte, vybereme
              verš a obrázek. Smuteční oznámení vyhotovíme na počkání.
              <br />
              Na oznámení může být i fotografie zesnulého.
              <br />
              <Link
                href="/katalog/parteObrazky"
                className="underline-offset-2 underline"
              >
                více o smutečním oznámení
              </Link>
            </p>
          </div>
        </div>

        <div className="container mx-auto flex px-5 pt-12 md:flex-row-reverse flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1705689200/pohrebniustavcibulka/5_daiubk.webp"
            />
          </div>
          <div
            // className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left"
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  scroll-mt-36"
            // className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center  scroll-mt-36"
            id="organizaceobradu"
          >
            <h3 className="hadvojka">
              Pomůžeme Vám s výběrem rakve, dle ukládání:
            </h3>
            <ul className="pl-4 list-disc">
              <li>
                <strong>Kremace (zpopelnění)</strong> - celodřevěné rakve,
                vybavené vnitřním saténovým čalouněním.
              </li>
              <li>
                <strong>Ukládání do kopaného hrobu</strong> - celodřevěné rakve,
                vybavené vnitřním saténovým čalouněním, opatřené madly.
              </li>
              <li>
                <strong>Ukládání do zděné hrobky</strong> - celodřevěné, dubové
                rakve s kovovou vložkou, vybavené vnitřním saténovým čalouněním,
                opatřené madly.
              </li>
            </ul>
            <p className="mb-2 leading-relaxed">
              Zesnulého poté uložíme do rakve dle Vašeho výběru.
            </p>
            <p className="mb-4 leading-relaxed">
              <Link
                href="/katalog/rakve"
                className="underline-offset-4 underline"
              >
                katalog rakví k nahlédnutí zde...
              </Link>
            </p>
            <h3 className="hadvojka">Organizace obřadu</h3>
            <p className="mb-2 leading-relaxed">
              Zajišťujeme kompletní organizaci rozloučení v souladu s Vašimi
              preferencemi a respektujeme individuální potřeby: od{" "}
              <Link
                href="/katalog/parteObrazky"
                className="underline-offset-4 underline"
              >
                sestavení smutečního oznámení
              </Link>
              ,{" "}
              <Link
                href="/katalog/rakve"
                className="underline-offset-4 underline"
              >
                výběru rakve
              </Link>{" "}
              až po{" "}
              <Link
                href="/katalog/kvetiny"
                className="underline-offset-4 underline"
              >
                květinové aranžmá
              </Link>{" "}
              a{" "}
              <Link
                href="/sluzby/hudba"
                className="underline-offset-4 underline"
              >
                hudby k obřadu
              </Link>
              .
            </p>
            <p className="mb-2 leading-relaxed">
              Poskytujeme možnost posledního rozloučení se zesnulým včetně
              identifikace.
            </p>
            <p className="mb-4 leading-relaxed">
              Obřad trvá obvykle 30 minut, kdy zazní oblíbené skladby zesnulého
              a je-li to Vaším přáním, promluví náš profesionální řečník
              popřípadě zajistíme přítomnost kněze.
            </p>
            <p className="hadvojka">
              Zajištění květinového aranžmá včetně stuh:
            </p>
            <ul className="mb-4 pl-4 leading-relaxed list-disc	list-outside">
              <li>živé rostlé - kytice a věnce</li>
              <li>silonové - umělé kytice a věnce</li>
              <li>zápůjční vazba</li>
            </ul>
            <p className="mb-2 leading-relaxed">
              <Link
                href="/katalog/kvetiny"
                className="underline-offset-4 underline"
              >
                více ve smutečním katalogu květin...
              </Link>
            </p>
            <p className="mb-2 leading-relaxed">
              <strong>Fotografie u obřadu</strong> je dobrovolná.
            </p>
            <p className="mb-2 leading-relaxed">
              Nabízíme službu profesionálního řečníka i poradce pro pozůstalé.
            </p>
            <p className="mb-4 leading-relaxed">
              V případě Vašeho zájmu, prosíme do kanceláře přinést fotografii ve
              formátu A4, A3 nebo A2.
            </p>
          </div>
        </div>

        <div
          className="container mx-auto flex md:flex-row px-5 pt-12  flex-col items-center scroll-mt-36"
          id="prevozzesnuleho"
        >
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1705689200/pohrebniustavcibulka/1_ynkq8e.webp"
            />
          </div>
          {/* <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center"> */}
          <div
            // className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center"
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left scroll-mt-36"
          >
            <h3 className="hadvojka">Převoz zemřelého</h3>
            <p className="mb-2 leading-relaxed">
              Po obřadu se postaráme o převoz zesnulého na hřbitov a následné
              uložení do hrobu či hrobky.
            </p>
            <p className="mb-4 leading-relaxed">
              V případě zpopelnění - po ukončení smutečního obřadu je zesnulý
              převezen do krematoria.
            </p>
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
          </div>
        </div>
        {/* 
        <div className="container mx-auto flex px-5 pt-12 md:flex-row-reverse flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1705689200/pohrebniustavcibulka/4_pbewze.webp"
            />
          </div>
          <div
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left"
            // className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center  scroll-mt-36"
            id="rakve"
          ></div>
        </div> */}
      </section>
    </div>
  );
}
