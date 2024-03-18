import Breadcrumbs from "@/components/breadcrumbs";
import LandingSluzby from "@/components/landingSluzby";
import Parte from "../../sluzby/parte/page";
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
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082793/pohrebniustavcibulka/parte/1_epil7n.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082794/pohrebniustavcibulka/parte/2_ht99iv.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082794/pohrebniustavcibulka/parte/3_z38lda.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082795/pohrebniustavcibulka/parte/4_hukkxg.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082795/pohrebniustavcibulka/parte/5_lkhukt.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082796/pohrebniustavcibulka/parte/6_fltnhm.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082804/pohrebniustavcibulka/parte/7_vzt6cm.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082797/pohrebniustavcibulka/parte/8_icc22k.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082797/pohrebniustavcibulka/parte/9_nfordl.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082803/pohrebniustavcibulka/parte/10_rnpo78.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082803/pohrebniustavcibulka/parte/11_carftn.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082801/pohrebniustavcibulka/parte/12_ndm1zl.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082798/pohrebniustavcibulka/parte/13_yp1dli.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082799/pohrebniustavcibulka/parte/14_mbxogl.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082800/pohrebniustavcibulka/parte/15_axn89x.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082805/pohrebniustavcibulka/parte/16_grztqt.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082807/pohrebniustavcibulka/parte/17_c4bmll.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082802/pohrebniustavcibulka/parte/18_e0hasf.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082800/pohrebniustavcibulka/parte/19_co2de1.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082806/pohrebniustavcibulka/parte/20_mzhhwj.webp",
    },
    // {
    //   title: "",
    //   href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710082806/pohrebniustavcibulka/parte/21_gcenrx.webp",
    // },
  ];
  let counter = 0;
  return (
    <div>
      <Breadcrumbs breads={breads} />
      <Parte />
      {/* <LandingSluzby /> */}
      <section className="body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="hajednicka">Smuteční oznámení </h1>
              <p className="pt-4 text-leading-relaxed">
                Naše stránky zobrazují pouze malý výběr z naší bohaté nabídky, a
                to s cílem poskytnout inspiraci a podnět k osobitému rozhodnutí.
              </p>
              {/* <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:mt-2 md:mb-8 dark:bg-gray-700" /> */}
            </div>
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
                    <h3 className="font-medium title-font -m-2 text-center">
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
