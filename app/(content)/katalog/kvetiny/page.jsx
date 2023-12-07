import Breadcrumbs from "@/components/breadcrumbs";
import LandingSluzby from "@/components/landingSluzby";
const breads = [
  {
    link: "/katalog/kvetiny",
    title: "Smuteční katalog / Smuteční květiny a věnce",
  },
];

export default function Katalog() {
  const kvetiny = [
    {
      title: "",
      href: "https://dummyimage.com/600x800",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x800",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x800",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x800",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x800",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x800",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x800",
    },
    {
      title: "",
      href: "https://dummyimage.com/600x800",
    },
  ];
  const vence = [
    {
      title: "",
      href: "https://dummyimage.com/800x400",
    },
    {
      title: "",
      href: "https://dummyimage.com/800x400",
    },
  ];
  const zapujceni = [
    {
      title: "Kvetina 1",
      href: "https://dummyimage.com/600x800",
    },
    {
      title: "Kvetina 1",
      href: "https://dummyimage.com/600x800",
    },
    {
      title: "Kvetina 2",
      href: "https://dummyimage.com/600x800",
    },
    {
      title: "Kvetina 2",
      href: "https://dummyimage.com/600x800",
    },
    {
      title: "Kvetina 3",
      href: "https://dummyimage.com/600x800",
    },
    {
      title: "Kvetina 3",
      href: "https://dummyimage.com/600x800",
    },
    {
      title: "Kvetina 4",
      href: "https://dummyimage.com/600x800",
    },
    {
      title: "Kvetina 4",
      href: "https://dummyimage.com/600x800",
    },
  ];
  let counter = 0;
  return (
    <div>
      <Breadcrumbs breads={breads} />
      {/* <LandingSluzby /> */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 font-nadpis">
                Smuteční květiny a věnce
              </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Rostlé květiny a věnce, které jsou s pečlivostí vytvářeny podle
              individuálních přání a vkusu klientů. Několik nejoblíbenějších
              kombinací, pro Vaši inspiraci k vytvoření kytic či věnců. Jsme si
              vědomi toho, že každý okamžik, který je vyjádřen květinami, je
              jedinečný. Proto Vám rádi nabízíme možnost individuálního výběru
              květin a vytvoření kytice či věnce přesně podle Vašich představ.
              Naše stránky zobrazují pouze malý výběr z naší bohaté nabídky, a
              to s cílem poskytnout inspiraci a podnět k osobitému rozhodnutí.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {kvetiny.map((item) => {
              {
                counter++;
              }
              return (
                <div className="xl:w-1/4 md:w-1/2 p-4" key={item.href}>
                  <div className="">
                    <img
                      className="rounded w-full"
                      src={item.href}
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {counter}
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
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 font-nadpis">
                Kytice a věnce ze Silonu (umělé)
              </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Umělé kytice a věnce nejsou pouhým dekorem – jsou trvalým projevem
              lásky a úcty. Díky jejich odolnosti zůstanou krásné i po dlouhých
              měsích, připomínajíce Vám a Vašim blízkým krásné chvíle a
              jedinečné památky.
              <br />
              <br />
              Aktuální výběr silonových květin Vám nabídneme přímo v naší
              kanceláři, kde Vám i porádíme s vhodnou kombinací.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {vence.map((item) => {
              {
                counter++;
              }
              return (
                <div className="xl:w-1/2 md:w-full p-4" key={item.href}>
                  <div className="">
                    <img
                      className="rounded w-full"
                      src={item.href}
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {counter}
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
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 font-nadpis">
                Kytice a věnce ze Silonu (umělé)
              </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Umělé kytice a věnce nejsou pouhým dekorem – jsou trvalým projevem
              lásky a úcty. Díky jejich odolnosti zůstanou krásné i po dlouhých
              měsích, připomínajíce Vám a Vašim blízkým krásné chvíle a
              jedinečné památky.
              <br />
              Aktuální výběr silonových květin Vám nabídneme přímo v naší
              kanceláři, kde Vám i porádíme s vhodnou kombinací.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <img
              className="rounded w-full"
              src="https://dummyimage.com/1000x400"
              alt="content"
            />
            {zapujceni.map((item) => {
              {
                counter++;
              }
              return (
                <div className="xl:w-1/4 md:w-1/2 p-4" key={item.href}>
                  <div className="">
                    <img
                      className="rounded w-full"
                      src={item.href}
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {counter}
                    </h3>
                    <h2 className="text-lg text-gray-900 title-font mb-4 text-center">
                      {item.title}
                    </h2>
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
