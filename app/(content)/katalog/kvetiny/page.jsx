import Breadcrumbs from "@/components/breadcrumbs";

const breads = [
  {
    link: "/katalog/kvetiny",
    title: "Smuteční katalog / Smuteční kytice a věnce",
  },
];

export const metadata = {
  title: "Smuteční kytice a věnce",
  description: "Smuteční květinová vazba. Pohřební ústav Cibulka Kralupy.",
};

export default function KvetinyPage() {
  return (
    <div>
      <Breadcrumbs breads={breads} />
      <section className="body-font">
        <div className="mt-12">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium font-nadpis text-center">
            Smuteční kytice a věnce
          </h1>
          <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:mt-2 md:mb-8 dark:bg-gray-700" />
          <div className="flex flex-wrap w-full mb-20 flex-col container px-5 mx-auto">
            <p className="w-full leading-relaxed text-center">Nový katalog připravujeme</p>
          </div>
        </div>
      </section>
    </div>
  );
}
