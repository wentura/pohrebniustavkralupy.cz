import Breadcrumbs from "@/components/breadcrumbs";
import LandingSluzby from "@/components/landingSluzby";
const breads = [
  {
    link: "/katalog/parteObrazky",
    title: "Smuteční katalog / Na smuteční oznámení",
  },
];

export default function NaSmutecniOznameni() {
  const obrazky = [
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693654/pohrebniustavcibulka/parte/1_agwcge.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693654/pohrebniustavcibulka/parte/2_olssc7.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693654/pohrebniustavcibulka/parte/3_pokagl.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693654/pohrebniustavcibulka/parte/4_pdpthu.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693654/pohrebniustavcibulka/parte/5_cc17hu.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693654/pohrebniustavcibulka/parte/6_chmvae.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693654/pohrebniustavcibulka/parte/6_chmvae.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693655/pohrebniustavcibulka/parte/8_zvodop.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693655/pohrebniustavcibulka/parte/9_rcthkz.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693655/pohrebniustavcibulka/parte/10_e5hz0a.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693655/pohrebniustavcibulka/parte/10_e5hz0a.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693657/pohrebniustavcibulka/parte/12_gsndvo.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693656/pohrebniustavcibulka/parte/13_tgyezw.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693656/pohrebniustavcibulka/parte/14_zusmdr.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693657/pohrebniustavcibulka/parte/15_cvqkqk.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693658/pohrebniustavcibulka/parte/16_cwmf5e.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693658/pohrebniustavcibulka/parte/17_xuurvx.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693656/pohrebniustavcibulka/parte/18_txg02v.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693656/pohrebniustavcibulka/parte/19_knnogs.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693658/pohrebniustavcibulka/parte/20_jervcm.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1705693657/pohrebniustavcibulka/parte/21_b3wka5.webp",
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
                Smuteční oznámení{" "}
              </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              {/* Na našich webových stránkách nyní naleznete jen malý výběr
              obrázků, které mohou posloužit k inspiraci pro vytvoření oznámení.
              V kanceláři Vám rádi představíme náš rozsáhlý katalog, který
              obsahuje ještě širší spektrum ilustrací. Věříme, že v našem
              katalogu najdete vhodný obrázek pro vytvoření oznámení, které
              důstojně a citlivě odrazí jedinečný život zemřelé(ho). */}
            </p>
          </div>
          <div className="flex flex-wrap -m-4  justify-center">
            {obrazky.map((item) => {
              {
                counter++;
              }
              return (
                <div className="xl:w-1/4 md:w-1/3 px-4 py-2" key={item.href}>
                  <div className="mb-8">
                    <img
                      className="rounded w-full"
                      src={item.href}
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-lg lg:text-xl font-medium title-font -m-2">
                      {counter}
                    </h3>
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
