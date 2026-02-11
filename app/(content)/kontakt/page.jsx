import BannerContact from "@/components/bannerContact";
import Breadcrumbs from "@/components/breadcrumbs";

const breads = [{ link: "/kontakt", title: "Kontakt" }];

export const metadata = {
  title: "Kontakt",
  description:
    "Kontakt na pohřební ústav Cibulka v Kralupech nad Vltavou. Adresa, telefon, otevírací doba.",
};

export default function Kontakt() {
  return (
    <section className="">
      <Breadcrumbs breads={breads} />
      <div className="my-12">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-nadpis mt-88 text-center">
          Kontakt
        </h1>
        <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:mt-2 md:mb-8 dark:bg-gray-700" />
      </div>
      <BannerContact />
    </section>
  );
}
