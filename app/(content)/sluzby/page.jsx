import Breadcrumbs from "@/components/breadcrumbs";
import LandingSluzby from "@/components/landingSluzby";

const breads = [{ link: "/sluzby", title: "Služby" }];

export const metadata = {
  title: "Služby",
  description:
    "Pohřební služby Cibulka: pohřby s obřadem, pohřby bez obřadu, smuteční řeč, hudba a fotografie. Kralupy nad Vltavou a okolí.",
};

export default function Sluzby() {
  return (
    <div>
      <Breadcrumbs breads={breads} />
      <LandingSluzby />
    </div>
  );
}
