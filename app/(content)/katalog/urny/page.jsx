import Breadcrumbs from "@/components/breadcrumbs";
import LandingSluzby from "@/components/landingSluzby";
const breads = [
  {
    link: "/katalog/urny",
    title: "Smuteční katalog / Urny",
  },
];

export default function Rakve() {
  const plast = [
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672042/pohrebniustavcibulka/urny/DSC_0033.JPG_oy4dwi.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672041/pohrebniustavcibulka/urny/DSC_0030.JPG_skzffq.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672040/pohrebniustavcibulka/urny/DSC_0028.JPG_qc1jod.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672035/pohrebniustavcibulka/urny/DSC_0012.JPG_cnzoha.webp",
    },
    {
      title: "",
      href: "    https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672038/pohrebniustavcibulka/urny/DSC_0026.JPG_cj4gpt.webp",
    },
  ];
  const kov = [
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672058/pohrebniustavcibulka/urny/DSC_0070.JPG_qaiucq.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672057/pohrebniustavcibulka/urny/DSC_0069.JPG_eezlcz.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672056/pohrebniustavcibulka/urny/DSC_0068.JPG_vcpyjt.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672055/pohrebniustavcibulka/urny/DSC_0060.JPG_yq5tpo.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672054/pohrebniustavcibulka/urny/DSC_0057.JPG_hfwwni.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672053/pohrebniustavcibulka/urny/DSC_0054.JPG_wsisj3.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672052/pohrebniustavcibulka/urny/DSC_0052.JPG_ifvcs6.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672051/pohrebniustavcibulka/urny/DSC_0050.JPG_cauwqx.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672050/pohrebniustavcibulka/urny/DSC_0049.JPG_mhvt21.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672049/pohrebniustavcibulka/urny/DSC_0047.JPG_waacuy.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672048/pohrebniustavcibulka/urny/DSC_0045.JPG_p7jlnd.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672047/pohrebniustavcibulka/urny/DSC_0042.JPG_domihx.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672046/pohrebniustavcibulka/urny/DSC_0040.JPG_qtreec.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672045/pohrebniustavcibulka/urny/DSC_0039.JPG_br279z.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672044/pohrebniustavcibulka/urny/DSC_0037.JPG_gxvlno.webp",
    },
  ];
  const ostatni = [
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672039/pohrebniustavcibulka/urny/DSC_0025.JPG_xoxp6z.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672037/pohrebniustavcibulka/urny/DSC_0022.JPG_dbtqvm.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672036/pohrebniustavcibulka/urny/DSC_0020.JPG_al2awz.webp",
    },
    {
      title: "",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703672036/pohrebniustavcibulka/urny/DSC_0016.JPG_ntrh2h.webp",
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
                Plastové obaly
              </h1>
            </div>
            <div className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              <p className="mt-2">
                Rádi bychom Vám představili naši rozsáhlou nabídku urnových
                obalů, zahrnující kovové (měď, hliník, nerez) a plastové
                varianty, včetně těch s přidanou kameninou.
              </p>
              <p className="mt-2">
                Doporučujeme plastové obaly pro uložení urny do hrobu pod desku
                nebo do okénka, zatímco kovové obaly jsou ideální pro ty, kteří
                si přejí urnu ponechat doma nebo urnu s obalem uloží na hřbitov
                do okénka, případně kolumbária.
              </p>
              <p className="mt-2">
                Fotografie prezentované na našich webových stránkách zahrnují
                pouze několik vybraných typů, které máme k dispozici v naší
                kanceláři.
              </p>
              <p className="mt-2">
                Pro podrobnější informace a rozsáhlý výběr doporučujeme osobní
                návštěvu naší kanceláře, kde Vám rádi představíme katalogy od
                našich dodavatelů.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -m-4  justify-center">
            {plast.map((item) => {
              {
                counter++;
              }
              return (
                <div className="xl:w-1/5 md:w-1/3 p-4" key={item.href}>
                  <div className="mb-8">
                    <img
                      className="rounded w-full"
                      src={item.href}
                      alt="content"
                    />
                    <h3 className="tracking-widest font-medium title-font">
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
                Kovové obaly
                <br />
              </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Hliník, mosaz, nerez, meď.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            {kov.map((item) => {
              {
                counter++;
              }
              return (
                <div className="xl:w-1/5 md:w-1/3 p-4 " key={item.href}>
                  <div className="mb-8">
                    <img
                      className="rounded w-full"
                      src={item.href}
                      alt="content"
                    />
                    <h3 className="tracking-widest font-medium title-font">
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
                Vázy, lucerny,...
              </h1>
            </div>
            <div className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              <p className="mt-2">
                V naší kanceláři nabízíme nejen vázy na květiny a lampičky, ale
                také další smuteční zboží.
              </p>
              <p className="mt-2">
                Můžete u nás například zakoupit prosklenou vitrínu určenou na
                hroby, do které lze umístit 1, 2 nebo 3 urny, podle velikosti
                vitríny.
              </p>
              <p className="mt-2">
                Dále máme k dispozici plastové boxy určené pro bezpečné uložení
                uren do hrobů a hrobek. Jsme zde, abychom vám pomohli vybrat ty
                správné produkty pro vaše potřeby.
              </p>
            </div>
          </div>
          {/* <img
            className="rounded w-full pb-12"
            src="https://dummyimage.com/1000x400"
            alt="content"
          /> */}
          <div className="flex flex-wrap -m-4  justify-center">
            {ostatni.map((item) => {
              {
                counter++;
              }
              return (
                <div className="xl:w-1/5 md:w-1/2 p-4" key={item.href}>
                  <div className="mb-8">
                    <img
                      className="rounded w-full"
                      src={item.href}
                      alt="content"
                    />
                    <h3 className="tracking-widest font-medium title-font">
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
