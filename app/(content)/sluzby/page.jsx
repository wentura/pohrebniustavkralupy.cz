import Breadcrumbs from "@/components/breadcrumbs";
import LandingSluzby from "@/components/landingSluzby";
const breads = [{ link: "/sluzby", title: "Služby" }];

export default function Sluzby() {
  return (
    <div>
      <Breadcrumbs breads={breads} />
      <LandingSluzby />
    </div>
  );
}
