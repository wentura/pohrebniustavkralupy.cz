import { isSupported, sanitize } from "isomorphic-dompurify";

const infos = [
  {
    vlevo: "Úmrtní list",
    nadpis: "Úmrtní list",
    text: "Úmrtní list je vyhotoven příslušnou matrikou na základě místa úmrtí zemřelého.<br />V případě, že jste poskytli občanský průkaz a kartu zdravotního pojištění zesnulého, byly tyto dokumenty odeslány na příslušnou matriku a zdravotní pojišťovnu. Na vyhotovení úmrtního listu má matrika stanoveno 30 dní jako lhůtu, kterou většinou dodržuje. Úmrtní list bude doručen na vaši adresu, kterou jste uvedli při objednávání pohřbu, doporučeně poštou. Matrika má povinnost ohlásit úmrtí orgánům sociálního zabezpečení, zdravotní pojišťovně a do evidence trvalého pobytu. O tyto administrativní záležitosti se nemusíte starat. V případě, že zesnulý pobíral speciální příspěvky, jako je péče či náhrada za zdravotní pomůcky, je NUTNÉ je odhlásit na příslušném úřadu práce.",
    link: "#",
    linkText: "link test text",
  },
];

export default function ProPozustale() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {infos.map((info) => {
            return (
              <div
                className="py-8 flex flex-wrap md:flex-nowrap"
                key={info.nadpis}
              >
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    {info.vlevo}
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    {info.nadpis}
                  </h2>
                  <p
                    className="leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(info.text),
                    }}
                  ></p>
                  <a className="text-indigo-500 inline-flex items-center mt-4">
                    {info.linkText}
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}

          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                CATEGORY
              </span>
              <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Meditation bushwick direct trade taxidermy shaman
              </h2>
              <p className="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                CATEGORY
              </span>
              <span className="text-sm text-gray-500">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Woke master cleanse drinking vinegar salvia
              </h2>
              <p className="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
