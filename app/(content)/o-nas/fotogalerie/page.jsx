import Breadcrumbs from "@/components/breadcrumbs";
import ObrazkyOnas from "@/components/obrazkyOnas";

const breads = [{ link: "/o-nas/fotogalerie", title: "Fotogalerie" }];

export const metadata = {
  title: "Fotogalerie",
  description:
    "Fotogalerie pohřebního ústavu Cibulka. Kralupy nad Vltavou.",
};

export default function Fotogalerie() {
  return (
    <section>
      <Breadcrumbs breads={breads} />
      <div className="mt-12">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-nadpis text-center">
          Fotogalerie
        </h1>
        <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:mt-2 md:mb-8 dark:bg-gray-700" />
      </div>
      <ObrazkyOnas />
    </section>
  );
}
