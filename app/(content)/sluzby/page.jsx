import Breadcrumbs from "@/components/breadcrumbs";
const breads = [{ link: "/sluzby", title: "Služby" }];

export default function Sluzby() {
  return (
    <div>
      <Breadcrumbs breads={breads} />
      Sluzby text
    </div>
  );
}
