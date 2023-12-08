import Link from "next/link";
import ADozvedetSeVic from "./aDozvedetSeVic";
export default function LandingSluzby() {
  const sluzby = [
    {
      title: "Pohřeb s obřadem",
      text: "Vyjadření úcty k zesnulému prostřednictvím formálních či rituálních prvků. Poskytuje prostor pro projevení poslední úcty, vzpomínání na život zesnulého a důstojného rozloučení rodiny a přátel.",
      href: "/sluzby/pohrby",
      vice: "více o pohřbech s obřadem",
    },
    {
      title: "Pohřeb bez obřadu",
      text: "Soukromější a osobnější způsob rozloučení se zesnulým, bez tradičních ceremonií či náboženských prvků.",
      href: "/sluzby/pohrby#bezobradu",
      vice: "více o pohřebech bez obřadu",
    },
    {
      title: "Organizace obřadu",
      text: "Profesionální a citlivá pomoc s organizací obřadu.",
      href: "/sluzby/pohrby#organizaceobradu",
      vice: "více o organizaci obřadu",
    },
    {
      title: "Převoz a úprava zesnulého",
      text: "Zajistíme transport zemřelého z celé ČR do místa pohřbu.",
      href: "/sluzby/pohrby#prevozzesnuleho",
      vice: "více o převozu a úpravě zesnulého",
    },
    {
      title: "Pomoc s výběrem rakve / urny",
      text: "Pomůžeme s výběrem rakve nebo obalu na urnu dle Vašich preferencí a potřeb.",
      href: "/katalog/urny",
      vice: "více ve smutečním katalogu",
    },
    {
      title: "Poradenství pro pozůstalé",
      text: "Poskytujeme pomoc s administrativními kroky a právními formalitami v obtížných časech ztráty.",
      href: "/poradenstvi",
      vice: "více o poradenství",
    },
    {
      title: "Smuteční květinová vazba",
      text: "Široká nabídka kytic a věnců, které mohou být symbolickým vyjádřením lásky a vzpomínek na ztraceného blízkého.",
      href: "/katalog/kvetiny",
      vice: "více ve smutečním katalogu",
    },
    {
      title: "Smuteční řeč a hudba",
      text: "Profesionální řečník, který přizpůsobí svůj projev konkrétním vztahům, zájmům či práci zemřelého. Zajišťujeme církevní obřady s knězem a hudbu dle vašeho výběru.",
      href: "/sluzby/hudba",
      vice: "více o hudbě a řečnících",
    },
    {
      title: "Výroba a tisk smutečních oznámení",
      text: "Standardem našich služeb je tvorba personalisovaného smutečního oznámení (parte).",
      href: "/sluzby/parte",
      vice: "více o smutečních oznámeních",
    },
  ];
  return (
    <div className="flex flex-wrap -m-4">
      {sluzby.map((sluzba) => {
        return (
          <div className="xl:w-1/3 md:w-1/2 p-4" key={sluzba.title}>
            <div className="p-6">
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2 underline-offset-4 underline decoration-natyzlata decoration-4 font-nadpis">
                <Link href={sluzba.href}>{sluzba.title}</Link>
              </h2>
              <p className="leading-relaxed text-base">{sluzba.text}</p>
              <ADozvedetSeVic title={sluzba.vice} href={sluzba.href} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
