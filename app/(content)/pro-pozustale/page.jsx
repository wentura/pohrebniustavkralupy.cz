import Breadcrumbs from "@/components/breadcrumbs";
import { isSupported, sanitize } from "isomorphic-dompurify";
const infos = [
  {
    vlevo: "Úmrtní list",
    nadpis: "Úmrtní list",
    text: "Úmrtní list je vyhotoven příslušnou matrikou na základě místa úmrtí zemřelého.<br />V případě, že jste poskytli občanský průkaz a kartu zdravotního pojištění zesnulého, byly tyto dokumenty odeslány na příslušnou matriku a zdravotní pojišťovnu.<br />Na vyhotovení úmrtního listu má matrika stanoveno 30 dní jako lhůtu, kterou většinou dodržuje.<br />Úmrtní list bude doručen na vaši adresu, kterou jste uvedli při objednávání pohřbu, doporučeně poštou. Matrika má povinnost ohlásit úmrtí orgánům sociálního zabezpečení, zdravotní pojišťovně a do evidence trvalého pobytu.<br />O tyto administrativní záležitosti se nemusíte starat.<br />V případě, že zesnulý pobíral speciální příspěvky, jako je péče či náhrada za zdravotní pomůcky, je <strong>NUTNÉ</strong> je odhlásit na příslušném úřadu práce.",
    link: "",
    linkText: "link test text",
    image:
      "https://res.cloudinary.com/dam7wdzvx/image/upload/v1708540489/pohrebniustavcibulka/informace_pro_pozustale/list_vpzpwy.webp",
  },
  {
    vlevo: "Notář",
    nadpis: "Notář",
    text: "Notář je jmenován soudem v souladu s místem trvalého bydliště zemřelého.<br />Předvolání k notáři obdržíte zhruba 2 až 3 měsíce po úmrtí.<br />První osobou, kterou notář pozve ke konzultaci, je objednatel pohřbu.<br />Mezi požadované dokumenty patří faktura za pohřeb a doklady o zaplacení (včetně stvrzenek nebo dokladu o bezhotovostním převodu).<br />Do dědictví lze zahrnout nejen náklady spojené s pohřbem samotným, ale také další výdaje, například související s kamenickými pracemi - jako je výroba pomníku nebo vytesání písma na něm.<br />Toto období může být administrativně náročné, a proto je důležité postupovat s pečlivostí a důsledností.<br />Pokud budete potřebovat další rady a pomoc, neváhejte se obrátit na zaměstnance naší pohřební služby, kteří vám mohou poskytnout potřebné informace a podporu.<br />Vašemu zemřelému a vám samým přejeme klid v této náročné době.<br />",
    link: "",
    linkText: "link test text",
    imageReverse: "ano",
    image:
      "https://res.cloudinary.com/dam7wdzvx/image/upload/v1708540489/pohrebniustavcibulka/informace_pro_pozustale/notar_gok7ll.webp",
  },
  {
    vlevo: "Pracovní volno",
    nadpis: "Nárok na pracovní volno při zařizování pohřbu",
    text: "Podle zákoníku práce má zaměstnanec právo na pracovní volno při úmrtí nejbližších příbuzných, což zahrnuje manžela, manželku, partnera, rodiče, děti a sourozence.<br />Toto volno není určeno pouze na samotný pohřeb, ale také na čas nutný k zařízení pohřbu a smutečních ceremonií.",
    link: "",
    linkText: "link test text",
  },
  {
    vlevo: "Pracovní volno",
    nadpis: "Nárok na pracovní volno na pohřeb",
    text: "<strong>Zaměstnanec, kterému zemřel blízký člen rodiny</strong><br />To zahrnuje manžela/ku, dítě, rodiče, prarodiče a sourozence.<br />Délka volna se může lišit v závislosti na vztahu k zemřelé osobě a může být stanovena v pracovních právních předpisech nebo kolektivní smlouvě.<br />Obvykle se jedná o 2 až 4 pracovní dny, avšak v některých případech může být délka volna delší.<br /><br /><strong>Zaměstnanec, který je blízkým příbuzným zesnulého</strong><br />Zaměstnanec může mít nárok na pracovní volno při úmrtí jiné osoby, se kterou měl blízký vztah, například přítele, blízkého přítele nebo člena rodiny.<br />Délka volna se může lišit v závislosti na dohodě se zaměstnavatelem.<br />Obvykle je to však 1 až 2 pracovní dny.<br /><br /><strong>Zaměstnanec, který je kolegou zesnulého</strong><br />Dle nařízení vlády je možná náhrada mzdy nebo platu spolupracovníkům zesnulého.<br />Zaměstnanci tedy mohou získat placené volno na nezbytně dlouhou dobu, během které se mají dostat na smuteční obřad, zúčastnit se jej a poté se vrátit do práce.<br />Tento nárok nevzniká automaticky, a účastníky pohřbu si může zvolit sám zaměstnavatel.<br /><br /><strong>Domluva se zaměstnavatelem</strong><br />Pokud i přesto potřebujete volno na pohřeb, jedinou možností je domluva se zaměstnavatelem a čerpání dovolené nebo neplaceného volna.<br />Je důležité si uvědomit, že nárok na placené pracovní volno může být zrušen, pokud zaměstnanec měl v měsíci pohřbu neomluvenou absenci v práci.<br />V takovém případě může zaměstnavatel odmítnout poskytnutí pracovního volna.<br />Během tohoto volna má zaměstnanec nárok na svou plnou mzdu, a to bez ohledu na to, zda pracuje ve státní nebo soukromé sféře.<br />Tento nárok na volno je upraven v pracovním právu a zaměstnavatel je povinen ho respektovat.<br />Je důležité si uvědomit, že existují stanovené podmínky, co lze považovat za pohřeb a co ne. Pohřbení zahrnuje uložení ostatků do hrobu, urny nebo rozptylu popela. V případě, že se smuteční událost, jako je rozloučení s blízkými nebo smuteční kar, koná v jiný pracovní den, není nárok na volno automatický.<br /><br />",
    link: "",
    linkText: "link test text",
    image:
      "https://res.cloudinary.com/dam7wdzvx/image/upload/v1708540489/pohrebniustavcibulka/informace_pro_pozustale/kvetina_zknpav.webp",
  },
  {
    vlevo: "Pracovní volno",
    nadpis: "K získání pracovního volna na pohřeb je zapotřebí...",
    text: "<strong>Oznámení zaměstnavateli</strong><br />Musíte informovat svého zaměstnavatele o úmrtí a požádat o volno na pohřeb.<br />Je vhodné tak učinit co nejdříve a poskytnout dostatečné informace o termínu sjednání pohřbu (pokud budete zařizovat smuteční rozloučení), datu smutečního obřadu a vztahu k zesnulé osobě.<br /><br /><strong>Doklad o úmrtí</strong><br />Zaměstnavatel obvykle požaduje doklad o úmrtí, který může být potvrzením od pohřební služby, protokolem o prohlídce zesnulého nebo úmrtním listem (vydaným příslušným orgánem, tedy matrikou).<br /><br /><strong>Potvrzení vztahu k zesnulé osobě</strong><br />Zaměstnavatel může vyžadovat potvrzení o vztahu k zesnulé osobě, což může být rodný list nebo jiný dokument potvrzující příbuzenský vztah.<br /><br /><strong>Termín pohřbu</strong><br />Dle pracovního práva je stanoveno, kolik dní volna je poskytováno v závislosti na vztahu k zesnulé osobě. Zaměstnavatel by měl být informován o tomto předpise a měl by vám poskytnout odpovídající volno.<br /><br /><br />Je důležité mít na paměti, že přesné požadavky a postupy se mohou lišit v závislosti na firemních pravidlech, interních předpisech či pracovní smlouvě. Proto je nejlepší tyto skutečnosti konzultovat se zaměstnavatelem nebo personálním oddělením, abyste se informovali o přesných postupech týkajících se volna na pohřeb.",
    link: "",
    linkText: "link test text",
  },
];
const breads = [{ link: "/pro-pozustale", title: "Informace pro pozůstalé" }];
export default function ProPozustale() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <Breadcrumbs breads={breads} />;
      <div className="mt-12">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-nadpis mt-88 text-center">
          Informace pro pozůstalé
        </h1>
        <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:mt-2 md:mb-8 dark:bg-gray-700" />
      </div>
      <div className="container mt-2 md:mt-12 px-5 md:px-24">
        <span className="text-2xl font-medium text-gray-900 font-nadpis underline underline-offset-4">
          K zařízení pohřbu potřebujete
        </span>
        <ul className="list-inside list-disc pt-4">
          <li key="1">Občanský průkaz objednavatele pohřbu</li>
          <li key="2">List o prohlídce zemřelého</li>
          <li key="3">Občanský průkaz zemřelého</li>
          <li key="4">Kartu pojištěnce</li>
          <li>
            Oblečení pro zemřelého
            <ul className="pl-8">
              <li key="5">
                Může to být oblečení, které měl rád – není třeba, aby bylo tmavé
                barvy.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="container px-5 py-24 mx-auto">
        {infos.map((info) => {
          return (
            <div
              className="py-8 flex flex-wrap md:flex-nowrap"
              key={info.nadpis}
            >
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900  mb-4 font-nadpis underline underline-offset-4">
                  {info.nadpis}
                </h2>
                <div
                  className={`${
                    info.imageReverse ? "lg:flex-row-reverse" : "lg:flex-row"
                  } flex flex-col `}
                >
                  <div className={`${info.image ? "lg:w-1/2" : ""} `}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(info.text),
                      }}
                    ></p>
                  </div>
                  {info.image ? (
                    <div className="lg:w-1/2">
                      <img
                        src={info.image}
                        alt={info.nadpis}
                        className="max-w-1/2 pt-12 lg:pt-0 lg:px-12"
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {/* {info.link ? (
                    <a
                      className={`text-indigo-500 inline-flex items-center mt-4`}
                      href={info.link}
                    >
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
                  ) : (
                    ""
                  )} */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
