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
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
    },
    {
      title: "",
      href: "https://dummyimage.com/400x600",
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
                Obrázky na parte
              </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Na našich webových stránkách nyní naleznete jen malý výběr
              obrázků, které mohou posloužit k inspiraci pro vytvoření oznámení.
              V kanceláři Vám rádi představíme náš rozsáhlý katalog, který
              obsahuje ještě širší spektrum ilustrací. Věříme, že v našem
              katalogu najdete vhodný obrázek pro vytvoření oznámení, které
              důstojně a citlivě odrazí jedinečný život zemřelé(ho).
            </p>
          </div>
          <div className="flex flex-wrap -m-4  justify-center">
            {obrazky.map((item) => {
              {
                counter++;
              }
              return (
                <div className="xl:w-1/4 md:w-1/3 p-4" key={item.href}>
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
    </div>
  );
}
