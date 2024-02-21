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
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671218/pohrebniustavcibulka/vazba/1_sglh5e.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671218/pohrebniustavcibulka/vazba/2_jgswyz.webp",
    },
    {
      title: "věnec",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671218/pohrebniustavcibulka/vazba/3_sxroa0.webp",
    },
    {
      title: "věnec",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671218/pohrebniustavcibulka/vazba/4_obstfx.webp",
    },
    {
      title: "věnec",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671218/pohrebniustavcibulka/vazba/5_rywgsu.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671218/pohrebniustavcibulka/vazba/6_kxhlt6.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671219/pohrebniustavcibulka/vazba/7_ypwnzl.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671220/pohrebniustavcibulka/vazba/8_s0zwwb.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671219/pohrebniustavcibulka/vazba/9_dluxj7.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671220/pohrebniustavcibulka/vazba/10_maks1t.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671222/pohrebniustavcibulka/vazba/11_vznaoh.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671220/pohrebniustavcibulka/vazba/12_ujxyed.webp",
    },
    {
      title: "věnec",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671221/pohrebniustavcibulka/vazba/13_rzqttk.webp",
    },
    {
      title: "věnec",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671221/pohrebniustavcibulka/vazba/14_p1o5z5.webp",
    },
    {
      title: "věnec",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671221/pohrebniustavcibulka/vazba/15_qsldkl.webp",
    },
    {
      title: "věnec",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671222/pohrebniustavcibulka/vazba/16_fnfvxi.webp",
    },
    {
      title: "věnec",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671223/pohrebniustavcibulka/vazba/17_fm4uff.webp",
    },
    {
      title: "věnec",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671223/pohrebniustavcibulka/vazba/18_kmfa4o.webp",
    },
    {
      title: "věnec",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671223/pohrebniustavcibulka/vazba/19_tsw0fz.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671225/pohrebniustavcibulka/vazba/20_gy4etx.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671224/pohrebniustavcibulka/vazba/21_ilyt3z.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671224/pohrebniustavcibulka/vazba/22_piwpq4.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671225/pohrebniustavcibulka/vazba/23_afap8r.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671225/pohrebniustavcibulka/vazba/24_huz6x0.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703671226/pohrebniustavcibulka/vazba/25_k0vmpe.webp",
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
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1702914087/pohrebniustavcibulka/kvetiny/1_crnl7h.webp",
    },
    {
      title: "Kvetina 1",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1702914087/pohrebniustavcibulka/kvetiny/1_crnl7h.webp",
    },
    {
      title: "Kvetina 2",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1702914087/pohrebniustavcibulka/kvetiny/1_crnl7h.webp",
    },
    {
      title: "Kvetina 2",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1702914087/pohrebniustavcibulka/kvetiny/1_crnl7h.webp",
    },
    {
      title: "Kvetina 3",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1702914087/pohrebniustavcibulka/kvetiny/1_crnl7h.webp",
    },
    {
      title: "Kvetina 3",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1702914087/pohrebniustavcibulka/kvetiny/1_crnl7h.webp",
    },
    {
      title: "Kvetina 4",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1702914087/pohrebniustavcibulka/kvetiny/1_crnl7h.webp",
    },
    {
      title: "Kvetina 4",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1702914087/pohrebniustavcibulka/kvetiny/1_crnl7h.webp",
    },
  ];
  let counter = 0;
  return (
    <div>
      <Breadcrumbs breads={breads} />
      {/* <LandingSluzby /> */}
      <section className="text-gray-600 body-font">
        <div className="mt-12">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-nadpis mt-88 text-center">
            Smuteční květiny a věnce
          </h1>
          <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:mt-2 md:mb-8 dark:bg-gray-700" />
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <p className=" w-full leading-relaxed text-gray-500">
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
                      {counter} {item.title}
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
          <div className="flex flex-wrap w-full mb-20 flex-col">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 font-nadpis">
                Kytice a věnce ze Silonu (umělé)
              </h1>
            </div>
            <p className="w-full leading-relaxed text-gray-500">
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
          <div className="flex flex-wrap w-full mb-20 flex-col">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 font-nadpis">
                Kytice a věnce ze Silonu (umělé)
              </h1>
            </div>
            <p className=" w-full leading-relaxed text-gray-500">
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
