import Breadcrumbs from "@/components/breadcrumbs";
import LandingSluzby from "@/components/landingSluzby";
const breads = [
  {
    link: "/katalog/kvetiny",
    title: "Smuteční katalog / Smuteční květinová vazba",
  },
];

export default function Katalog() {
  const kvetiny = [
    {
      title: "1. žluté a vínové karafiáty",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406782/pohrebniustavcibulka/kytice/1karafiaty-zlutavinova_z8cb4i.webp",
    },
    {
      title: "2. žluté a oranžové karafiáty",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406782/pohrebniustavcibulka/kytice/2karafiaty-oranzovazluta_xsc52v.webp",
    },
    {
      title: "3. červené karafiáty",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406782/pohrebniustavcibulka/kytice/3karafiaty-cervena_vdahlp.webp",
    },
    {
      title: "4. červené a bílé karafiáty",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406782/pohrebniustavcibulka/kytice/4karafiatycervenobile_lfgzg0.webp",
    },
    {
      title: "5. vínové karafiáty a bílé chryzantémy",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406782/pohrebniustavcibulka/kytice/5karafiatychryzantemy_nwbtwm.webp",
    },
    {
      title: "6. růžové karafiáty a žluté chryzantémy",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406782/pohrebniustavcibulka/kytice/6karafiatychryzantemy_czsjem.webp",
    },
    {
      title: "7. žluté karafiáty a bílé chryzantémy",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406782/pohrebniustavcibulka/kytice/7karafiatychryzantemy_mgurvm.webp",
    },
    {
      title: "8. (chvojí) bílé karafiáty a žíhané fialové chryzantémy",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406783/pohrebniustavcibulka/kytice/8karafiatychryzantemy_dqatvq.webp",
    },
    {
      title: "9. bílé chryzantémy",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406782/pohrebniustavcibulka/kytice/9chryzantemy_zdsy4o.webp",
    },
    {
      title: "10. bílé a růžové chryzantémy",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406783/pohrebniustavcibulka/kytice/10chryzantemy_vn4s2g.webp",
    },
    {
      title: "11. bílé a žluté chryzantémy",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406783/pohrebniustavcibulka/kytice/11chryzantemy_pv9eaa.webp",
    },
    {
      title: "12. bílé a červené chryzantémy",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406783/pohrebniustavcibulka/kytice/12chryzantemy_louem8.webp",
    },
    {
      title: "13. růžové chryzantémy a bílé růže",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406783/pohrebniustavcibulka/kytice/13smetanoveruzeruzovechryzantemy_kmsavc.webp",
    },
    {
      title: "14. žluté chryzantémy a červené růže",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406783/pohrebniustavcibulka/kytice/14zlutechryzantemycerveneruze_my1se4.webp",
    },
    {
      title: "15. červené chryzantémy a bílé růže",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406783/pohrebniustavcibulka/kytice/15cervenechryzantemybileruze_fztfr8.webp",
    },
    {
      title: "16. vínové chryzantémy a žluté růže",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406783/pohrebniustavcibulka/kytice/16fialovechryzantemyzluteruze_sumrei.webp",
    },
    {
      title: "17. bílé růže",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406783/pohrebniustavcibulka/kytice/17bileruze_fjsxdz.webp",
    },
    {
      title: "18. růžové růže",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406784/pohrebniustavcibulka/kytice/18ruzoveruze_iaohru.webp",
    },
    {
      title: "19. červené růže",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406784/pohrebniustavcibulka/kytice/19cerveneruze_nliv7p.webp",
    },
    {
      title: "20. žluté růže",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406784/pohrebniustavcibulka/kytice/20zluteruze_bwbocr.webp",
    },
    {
      title: "21. bílé chryzantémy a růžové lilie",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406784/pohrebniustavcibulka/kytice/21ruzoveliliebilechryzantemy_tdivq3.webp",
    },
    {
      title: "22.  červené růže, bílé lilie",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406784/pohrebniustavcibulka/kytice/22bileliliecerveneruze_zulimz.webp",
    },
    {
      title: "23. žluté chryzantémy, oranžové gerbery",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406784/pohrebniustavcibulka/kytice/23oranzovegerberyzlutechryzantemy_tdoiik.webp",
    },
    {
      title: "24. bílé a červené gerbery",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709406785/pohrebniustavcibulka/kytice/24gerbery-cervenabila_ii8oas.webp",
    },
  ];
  const vence = [
    {
      title: "25. hlava: červené karafiáty<br />spodek: žluté karafiáty",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709407480/pohrebniustavcibulka/vence/1_j9n62h.webp",
    },
    {
      title: "26. hlava: vínové karafiáty<br />spodek: žluté karafiáty ",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709407480/pohrebniustavcibulka/vence/2_jgrbrq.webp",
    },
    {
      title: "27. proložené žluté chryzantémy a červené karafiáty",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709407480/pohrebniustavcibulka/vence/3_hm1qq9.webp",
    },
    {
      title: "28. proložené bílé karafiáty a červené chryzantémy",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709407481/pohrebniustavcibulka/vence/4_ombfv3.webp",
    },
    {
      title: "29. proložené bílé a žluté chryzantémy",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709407481/pohrebniustavcibulka/vence/5_bnv48e.webp",
    },
    {
      title: "30. žluté chryzantémy",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709407481/pohrebniustavcibulka/vence/6_h22rmy.webp",
    },
    {
      title: "31. proložené bílé chryzantémy a červené růže",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709407481/pohrebniustavcibulka/vence/7_bmoiut.webp",
    },
    {
      title: "32. proložené vínové chryzantémy a žluté růže",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709407481/pohrebniustavcibulka/vence/8_z4g6a9.webp",
    },
    {
      title: "33. červené růže",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709407482/pohrebniustavcibulka/vence/9_gnfxmw.webp",
    },
    {
      title: "34. žluté růže",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709407482/pohrebniustavcibulka/vence/10_acggmd.webp",
    },
    {
      title: "35. hlava: růžové růže<br />spodek: růžové gerbery",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709407483/pohrebniustavcibulka/vence/11_gr6pec.webp",
    },
    {
      title: "36. proložené bílé růže a bílé gerbery",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709407483/pohrebniustavcibulka/vence/12_jis3u0.webp",
    },
    {
      title: "37. žluté gerbery",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709407483/pohrebniustavcibulka/vence/13_dma003.webp",
    },
    {
      title: "38. růžové gerbery",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709407483/pohrebniustavcibulka/vence/14_upiz6m.webp",
    },
    {
      title:
        "39. hlava: červené karafiáty<br />spodek: oranž. a čajové růže, světle žl. karafiáty",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709407484/pohrebniustavcibulka/vence/15_iufpsx.webp",
    },
    {
      title: "40. hlava: růžové, bílé chryzantémy<br />spodek: žluté gerbery",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709407484/pohrebniustavcibulka/vence/16_stgbnm.webp",
    },
  ];
  const silon = [
    {
      title: "1",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408070/pohrebniustavcibulka/silon/3_tnech7.webp",
    },
    {
      title: "2",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408070/pohrebniustavcibulka/silon/4_tz64lf.webp",
    },
    {
      title: "3",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408071/pohrebniustavcibulka/silon/5_d2hwpd.webp",
    },
    {
      title: "4",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408072/pohrebniustavcibulka/silon/6_swdlvr.webp",
    },
    {
      title: "5",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408072/pohrebniustavcibulka/silon/7_a2ynja.webp",
    },
    {
      title: "6",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408073/pohrebniustavcibulka/silon/8_t5dxun.webp",
    },
  ];
  const zapujceniKytice = [
    {
      title: "Kytice č. 1 bílá oválná",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710089898/pohrebniustavcibulka/zapujcka1/1_uon2ny.webp",
    },
    {
      title: "Kytice č. 2 bílá",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710089898/pohrebniustavcibulka/zapujcka1/2_zryw0b.webp",
    },
    {
      title: "Kytice č. 3 do žluta",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710089898/pohrebniustavcibulka/zapujcka1/3_gkg9lg.webp",
    },
    {
      title: "Kytice č. 4 růžovo - bílá",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710089899/pohrebniustavcibulka/zapujcka1/4_ndanxb.webp",
    },
    {
      title: "Kytice č. 5 růžovo - bílá",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710089899/pohrebniustavcibulka/zapujcka1/5_ieg8nz.webp",
    },
    {
      title: "Kytice č. 6 růžová",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710089899/pohrebniustavcibulka/zapujcka1/6_jrvhjh.webp",
    },
    {
      title: "Kytice č. 7 růžovo - červená",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710089900/pohrebniustavcibulka/zapujcka1/7_z0kqbl.webp",
    },
    {
      title: "Kytice č. 8 rudá",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710089900/pohrebniustavcibulka/zapujcka1/8_vq1jpg.webp",
    },
    {
      title: "Kytice č. 9 oranžová",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710089901/pohrebniustavcibulka/zapujcka1/9_dpvdcs.webp",
    },
    {
      title: "Kytice č. 10 žlutá",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710089901/pohrebniustavcibulka/zapujcka1/10_u53hh0.webp",
    },
    {
      title: "Kytice č. 11 žlutá",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710089901/pohrebniustavcibulka/zapujcka1/11_tponui.webp",
    },
    {
      title: "Kytice č. 12 žlutá",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710089902/pohrebniustavcibulka/zapujcka1/12_fycxkj.webp",
    },
    {
      title: "Kytice č. 13 fialová",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710089902/pohrebniustavcibulka/zapujcka1/13_pj5blh.webp",
    },
  ];
  const zapujceniKyticeMale = [
    {
      title: "Kytice č. 14 malá",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710089903/pohrebniustavcibulka/zapujcka1/k1_qm1xyu.webp",
    },
    {
      title: "Kytice č. 15 malá",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710089903/pohrebniustavcibulka/zapujcka1/k2_y6hasm.webp",
    },
    {
      title: "Kytice č. 16 malá",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710089904/pohrebniustavcibulka/zapujcka1/k3_sd3n85.webp",
    },
  ];
  const zapujceniVence = [
    {
      title: "1",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408792/pohrebniustavcibulka/zapujcka/vence/1.JPG_pngkta.webp",
    },
    {
      title: "2",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408792/pohrebniustavcibulka/zapujcka/vence/2.JPG_munk0j.webp",
    },
    {
      title: "3",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408790/pohrebniustavcibulka/zapujcka/vence/3.JPG_odxnli.webp",
    },
    {
      title: "4",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408786/pohrebniustavcibulka/zapujcka/vence/4.JPG_cup57m.webp",
    },
    {
      title: "5",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408787/pohrebniustavcibulka/zapujcka/vence/5.JPG_yfrqov.webp",
    },
    {
      title: "6",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408790/pohrebniustavcibulka/zapujcka/vence/6.JPG_nvz1ra.webp",
    },
    {
      title: "7",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408788/pohrebniustavcibulka/zapujcka/vence/7.JPG_dbnqrt.webp",
    },
    {
      title: "8",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408788/pohrebniustavcibulka/zapujcka/vence/8.JPG_ub3qfg.webp",
    },
    {
      title: "9",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408794/pohrebniustavcibulka/zapujcka/vence/9.JPG_tbau31.webp",
    },
    {
      title: "10",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408795/pohrebniustavcibulka/zapujcka/vence/10.JPG_k1iiqj.webp",
    },
    {
      title: "11",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408793/pohrebniustavcibulka/zapujcka/vence/11.JPG_oq1mti.webp",
    },
    {
      title: "12",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408785/pohrebniustavcibulka/zapujcka/vence/12.JPG_gmhmgu.webp",
    },
    {
      title: "13",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408789/pohrebniustavcibulka/zapujcka/vence/13.JPG_u9ifpz.webp",
    },
    {
      title: "14",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408787/pohrebniustavcibulka/zapujcka/vence/14.JPG_eelg2d.webp",
    },
    {
      title: "15",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709409244/pohrebniustavcibulka/zapujcka/vence/15_qujwsy.webp",
    },
    {
      title: "16",
      href: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408791/pohrebniustavcibulka/zapujcka/vence/16.JPG_gb6il4.webp",
    },
  ];
  let counter = 0;
  return (
    <>
      <Breadcrumbs breads={breads} />
      {/* <LandingSluzby /> */}
      <section className=" body-font">
        <div className="mt-12">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  font-nadpis mt-88 text-center">
            Smuteční květinová vazba
          </h1>
          <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:mt-2 md:mb-8 dark:bg-gray-700" />
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <p className=" w-full leading-relaxed">
              Jsme si vědomi toho, že každý okamžik, který je vyjádřen
              květinami, je jedinečný. Proto Vám rádi nabízíme možnost
              individuálního výběru květin a vytvoření kytice či věnce přesně
              podle Vašich představ.
            </p>
            <p className=" w-full leading-relaxed">
              Naše stránky zobrazují pouze malý výběr z naší bohaté nabídky, a
              to s cílem poskytnout inspiraci a podnět k osobitému rozhodnutí.
            </p>
            <ul className="list-inside list-disc pt-4">
              <li>živé (rostlé) kytice a věnce</li>
              <li>umělé (silonové) kytice a věnce</li>
              <li>zápůjční vazba - silonové kytice a věnce</li>
            </ul>
          </div>
          <div className="flex flex-wrap w-full mb-20">
            <h2 className="hajednicka">Rostlé (živé) kytice a věnce</h2>
            <p className=" w-full leading-relaxed">
              Rostlé kytice a věnce včetně stuh jsou s pečlivostí vytvářeny
              podle přání a vkusu klientů.
            </p>
            <ul className="list-inside list-disc pt-4">
              <li>Kytice na položení</li>
              <li>Kytice na pověšení</li>
              <li>Věnec Ø 40, Ø 50, Ø 60</li>
            </ul>
          </div>
          <div className="flex flex-wrap -m-4">
            {kvetiny.map((item) => {
              {
                counter++;
              }
              return (
                <div className="xl:w-1/4 md:w-1/2 p-4 mx-auto" key={item.href}>
                  <div className="h-[480px]  overflow-hidden rounded">
                    <img
                      className="w-fit h-full mx-auto"
                      src={item.href}
                      alt="kvetiny"
                    />
                  </div>
                  <h3 className="tracking-widest  font-medium title-font text-center">
                    {/* {counter}  */}

                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className=" body-font">
        <div className="mt-12">
          <h1 className="hajednicka">Smuteční věnce</h1>
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {vence.map((item) => {
              {
                counter++;
              }
              return (
                <div className="xl:w-1/4 md:w-1/2 p-4 mx-auto" key={item.href}>
                  <div className="h-[500px]   overflow-hidden rounded">
                    <img
                      className="w-fit h-full mx-auto"
                      src={item.href}
                      alt="kvetiny"
                    />
                  </div>
                  <h3 className="tracking-widest  font-medium title-font text-center">
                    {/* {counter}  */}
                    <span
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></span>
                    {/* {item.title} */}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="mt-12">
          <h1 className="hajednicka">Kytice a věnce ze silonu (umělé)</h1>
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <p className=" w-full leading-relaxed ">
              Umělé kytice a věnce nejsou pouhým dekorem – jsou projevem lásky a
              úcty. Díky jejich odolnosti zůstanou krásné delší dobu než živé
              květiny.
              <br />
              Aktuální výběr silonových květin Vám nabídneme přímo v naší
              kanceláři a rádi Vám poradíme s vhodnou kombinací.
            </p>
          </div>
          <div className="flex flex-wrap py-8">
            <img
              className="rounded w-full md:w-1/2 py-2 px-2"
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408070/pohrebniustavcibulka/silon/2_bbgxd6.webp"
              alt="silon vence"
            />
            <img
              className="rounded w-full md:w-1/2 py-2 px-2 "
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408069/pohrebniustavcibulka/silon/1_wfkmbw.webp"
              alt="silon vence"
            />
          </div>
          <div className="flex flex-wrap -m-4">
            {silon.map((item) => {
              {
                counter++;
              }
              return (
                <div className="xl:w-1/3 md:w-1/2 p-4 mx-auto" key={item.href}>
                  <div className="h-[400px] md:h-[600px] xl:h-[380px]  overflow-hidden rounded">
                    <img
                      className="w-fit mx-auto "
                      src={item.href}
                      alt="kvetiny"
                    />
                  </div>
                  <h3 className="tracking-widest  font-medium title-font text-center">
                    {/* {counter}  */}

                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap py-8">
            <img
              className="rounded w-full py-2 px-2"
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1709408073/pohrebniustavcibulka/silon/9_gqyunc.webp"
              alt="silon vence"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="mt-12">
          <h1 className="hajednicka">Kytice k zapůjčení</h1>
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <p className=" w-full leading-relaxed ">
              Tyto umělé věnce nebo kytice zůstávají v obřadní síni a propůjčují
              se pro potřeby obřadu. Výběr konkrétních typů květin není možný.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {zapujceniKytice.map((item) => {
              {
                counter++;
              }
              return (
                <div className="w-full p-4" key={item.href}>
                  <div className="">
                    <img
                      className="rounded w-full"
                      src={item.href}
                      alt="content"
                    />
                    <p className="tracking-widest text-center font-medium title-font">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap -m-4">
            {zapujceniKyticeMale.map((item) => {
              {
                counter++;
              }
              return (
                <div className="w-full md:w-1/3 p-4" key={item.href}>
                  <div className="">
                    <img
                      className="rounded w-full"
                      src={item.href}
                      alt="content"
                    />
                    <p className="tracking-widest text-center font-medium title-font">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="mt-12">
          <h1 className="hajednicka">Věnce k zapůjčení</h1>
        </div>
        <div className="flex flex-wrap py-8">
          <img
            className="rounded w-full py-2 px-2"
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1709409337/pohrebniustavcibulka/zapujcka/velka/1.JPG_taapua.webp"
            alt="silon vence"
          />
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {zapujceniVence.map((item) => {
              {
                counter++;
              }
              return (
                <div className="xl:w-1/4 md:w-1/2 p-4 mx-auto" key={item.href}>
                  <div className="h-[550px]   overflow-hidden rounded">
                    <img
                      className="w-fit h-full mx-auto"
                      src={item.href}
                      alt="kvetiny"
                    />
                  </div>
                  <h3 className="tracking-widest  font-medium title-font text-center">
                    {/* {counter}  */}
                    Věnec č. {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
