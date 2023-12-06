import Breadcrumbs from "@/components/breadcrumbs";
import LandingSluzby from "@/components/landingSluzby";
const breads = [{ link: "/katalog", title: "Smuteční katalog" }];

export default function Katalog() {
  return (
    <div>
      <Breadcrumbs breads={breads} />
      <LandingSluzby />
    </div>
  );
}
