import ObrazkyOnas from "@/components/obrazkyOnas";
import React from "react";

export default function Onas() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-nadpis">
              Kralupský pohřební ústav Cibulka
            </h1>
            <p className="mb-8 leading-relaxed">
              Provádíme obřady rozloučení se zesnulými především v obřadní síni
              na hřbitově v Kralupech nad Vltavou, v kralupském kostele
              Nanebevzetí sv. Marie a sv. Václava a na hřbitovech v okolních
              vesnicích a městech.
            </p>
            <p className="mb-8 leading-relaxed">
              Naše historie je svědectvím o trvalém závazku věnovat péči a
              respektu těm, kteří odešli, a poskytovat podporu jejich rodinám v
              obtížných chvílích.
              <br />
              Jsme hrdi na to, že jsme mohli být svědky mnoha událostí a
              důležitých okamžiků v životech lidí v našem městě a městské
              komunitě.
            </p>
            <div className="flex justify-center hidden">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-16 flex-col items-center md:flex-row-reverse">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-nadpis">
              Historie
            </h1>
            <p className="mb-8 leading-relaxed">
              V roce 1914 založil truhlář Antonín Macák pohřební službu.{" "}
              <span className="text-sm">
                (O koncesi zažádal 15. listopadu 1913)
              </span>
              <br />
              Svou činnost zah8jil v Tyršově ulici (nyní Palackého) v domě čp.
              119 poblíž kostela. V té době byl ženatý s Annou, rozenou
              Krejčovou, která se do Kralup přivdala z jižních Čech.
            </p>
            <h3 className="title-font sm:text-xl text-2xl mb-4 font-medium text-gray-900 font-nadpis">
              Nová budova
            </h3>
            <p className="mb-8 leading-relaxed">
              V roce 1933 se pohřební ústav přestěhoval do nově postaveného domu
              v Grégrově ulici čp. 167, kde zůstává dodnes.
            </p>
            <div className="flex justify-center hidden">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-nadpis">
              Rodinná kontinuita
            </h1>
            <p className="mb-8 leading-relaxed">
              Po smrti Antonína Macáka v roce 1954 převzala vedení pohřebního
              ústavu jeho manželka Anna.
              <br />
              Po jejím úmrtí se stala novou správkyní Anna Cibulková, dcera
              zakladatele.
            </p>
            <p className="mb-8 leading-relaxed">
              1. května 1991 se pokračovatelem rodinné tradice stal vnuk
              zakladatele, Jiří Cibulka, který vedle své manželky Miluše stál v
              čele rodinného podniku.
              <br />
              Bohužel, Jiří Cibulka po velmi krátké nemoci zemřel v roce 2016.
            </p>
            <p className="mb-8 leading-relaxed">
              Dnes vede kralupský pohřební ústav jeho manželka Miluše Cibulková,
              společně s její dcerou Margit Gáborovou a vnučkou Natalií
              Štípkovou.
            </p>
            <div className="flex justify-center hidden">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
      <ObrazkyOnas />
    </div>
  );
}
