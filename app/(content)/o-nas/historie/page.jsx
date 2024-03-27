import Breadcrumbs from "@/components/breadcrumbs";
import ObrazkyOnas from "@/components/obrazkyOnas";
import React from "react";
const breads = [{ link: "/o-nas/historie", title: "O nás" }];

export default function Onas() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <Breadcrumbs breads={breads} />

        <div className="mt-12">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-nadpis mt-88 text-center">
            Kralupský pohřební ústav Cibulka
          </h1>
          <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:mt-2 md:mb-8 dark:bg-gray-700" />
        </div>
        <div className="container mx-auto flex px-5 py-16 flex-col items-left">
          <h2 className="hajednicka">O nás</h2>
          <p className="mb-2 leading-relaxed">
            Provádíme rozloučení především{" "}
            <strong>v obřadní síni na hřbitově v Kralupech nad Vltavou</strong>,
            v kralupském kostele Nanebevzetí Panny Marie a sv. Václava a na
            hřbitovech v okolních obcích a městech.
          </p>
          <p className="mb-2 leading-relaxed">
            Na přání rodiny zajišťujeme rozloučení po celé České republice.
          </p>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-16 flex-col items-center md:flex-row-reverse">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded max-h-96 mx-auto"
              alt="zakladatel Macák"
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1702549940/pohrebniustavcibulka/historie/macak_a41ekd.webp"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start text-left">
            <h1 className="hajednicka">Historie pohřebního ústavu</h1>
            <p className="mb-2 leading-relaxed">
              Historie pohřebního ústavu je plná význačných okamžiků, které jsme
              pečlivě zachovali v podobě fotografií a vzpomínek.
            </p>
            <h3 className="hadvojka">Založení</h3>
            <p className="mb-2 leading-relaxed">
              V roce 1914 založil truhlář Antonín Macák pohřební službu. (O
              koncesi zažádal 15. listopadu 1913)
            </p>
            <p className="mb-2 leading-relaxed">
              Svou činnost zahájil v Tyršově ulici (nyní Palackého) v domě čp.
              119 poblíž kostela. V té době byl ženatý s Annou, rozenou
              Krejčovou, která se do Kralup přivdala z jižních Čech.
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded mx-auto"
              alt="hero"
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1702549943/pohrebniustavcibulka/historie/puOld_ukt7mo.webp"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col items-start text-left">
            <h3 className="hadvojka">Přesídlení a rozvoj</h3>
            <p className="mb-2 leading-relaxed">
              V roce 1933 došlo k významnému kroku, kdy pohřební ústav
              přestěhoval své sídlo do nově postaveného domu v Grégrově ulici
              čp. 167, kde zůstává dodnes.
            </p>
            <p className="mb-2 leading-relaxed">
              V této době se zesnulí převáželi dvěma pohřebními kočáry. Na
              pohřbech hrála dechová hudba.
            </p>
            <p className="mb-2 leading-relaxed">
              Každý pohřební průvod, který vyšel ze smutečního domu nebo
              kostela, procházel kolem Pohřebního ústavu v Grégrově ulici směrem
              ke hřbitovu.
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-16 flex-col items-center md:flex-row-reverse">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded max-h-96 mx-auto"
              alt="zakladatel Macák"
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1702549925/pohrebniustavcibulka/historie/2_acno0z.webp"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start text-left ">
            <h3 className="hadvojka">Zajímavá historická cesta</h3>
            <p className="mb-2 leading-relaxed">
              Průvody dále pokračovaly přes kladenský přejezd Poděbradovou
              ulicí, která dnes nese název Ke Hřbitovu.
            </p>
            <p className="mb-2 leading-relaxed">
              Tato cesta zůstala zapsána i v paměti básníka{" "}
              <strong>Jaroslava Seiferta</strong>. Touto trasou šel v roce 1926
              za pohřebním vozem, jež vezl jeho dědečka Antonína Borutu, kterého
              pohřbil Antonín Macák.
            </p>
            <p className="mb-2 leading-relaxed">
              Přesně po šedesáti letech, vnuk zakladatele, Jiří Cibulka, v roce
              1986 zajišťoval pohřeb samotného básníka a nositele Nobelovy ceny
              za literaturu.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-2 gap-2">
          {/* image - start */}
          <img
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1702549927/pohrebniustavcibulka/historie/16_suwfqh.webp"
            loading="lazy"
            alt=""
            className="object-cover object-center max-h-96 md:max-h-[500px] md:justify-self-end justify-self-center"
          />

          {/* image - end */}

          {/* image - start */}
          <img
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1702549929/pohrebniustavcibulka/historie/21_n0w7hg.webp"
            loading="lazy"
            alt=""
            className="object-cover object-center max-h-96 md:max-h-[500px] md:justify-self-start md:align-self-end justify-self-center"
          />

          {/* image - end */}
          {/* image - start */}
          <img
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1702549925/pohrebniustavcibulka/historie/4_qflima.webp"
            loading="lazy"
            alt=""
            className="object-cover object-center max-h-96 md:max-h-[500px] md:justify-self-end justify-self-center"
          />

          {/* image - end */}
          {/* image - start */}
          <img
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1705689200/pohrebniustavcibulka/1_ynkq8e.webp"
            loading="lazy"
            alt=""
            className="object-cover object-center max-h-96 md:max-h-[500px] md:justify-self-start justify-self-center"
          />

          {/* image - end */}
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div className="md:w-1/2 w-2/3 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded max-w-[250px] md:max-w-sm mx-auto"
              alt="hero"
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1702549937/pohrebniustavcibulka/historie/52_hr1ujg.webp"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col items-start text-left">
            <h3 className="hadvojka">Rodinná kontinuita</h3>
            <p className="mb-2 leading-relaxed">
              Po jeho smrti v roce 1954 převzala vedení pohřebního ústavu jeho
              manželka Anna. Následně pokračovala jejich dcera, Anna Cibulková.
              V roce 1991 se pokračovatelem rodinné tradice stal vnuk
              zakladatele, Jiří Cibulka, který vedle své manželky Miluše stál v
              čele rodinného podniku.
            </p>
            <p className="mb-2 leading-relaxed">
              Bohužel, Jiří Cibulka po velmi krátké nemoci zemřel v roce 2016.
            </p>
            <p className="mb-2 leading-relaxed">
              Dnes je ve vedení kralupského pohřebního ústavu jeho manželka
              Miluše Cibulková společně s dcerou Margit Gáborovou a vnučkou
              Natalií Štípkovou.
            </p>
            <p className="mb-2 leading-relaxed">
              Naše historie je svědectvím o trvalém závazku věnovat péči a
              respekt těm, kteří odešli, a poskytovat podporu jejich rodinám v
              obtížných chvílích.
            </p>
            <p className="mb-2 leading-relaxed">
              Jsme hrdi na to, že jsme mohli být svědky mnoha událostí a
              důležitých okamžiků v životech lidí v našem městě a městské
              komunitě.
            </p>
          </div>
        </div>
      </section>
      {/* <ObrazkyOnas /> */}
    </div>
  );
}
