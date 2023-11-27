import Link from "next/link";
// import menuItems from "./data-menu";
export const menuItems = [
  {
    link: "/sluzby",
    text: "Služby",
  },
  {
    link: "/sluzby/pohrby",
    text: "Pohřby",
  },
  {
    link: "/sluzby/parte",
    text: "Smuteční oznámení",
  },
  {
    link: "/pro-pozustale",
    text: "Informace pro pozůstalé",
  },
  {
    link: "/katalog",
    text: "Smuteční katalog",
  },
  {
    link: "/galerie",
    text: "Galerie",
  },
  {
    link: "/o-nas",
    text: "O nás",
  },
  {
    link: "/kontakt",
    text: "Kontakt",
  },
];
export default function Menu({ klas }) {
  klas ? klas : "";
  return (
    <div className={`flex ${klas}`}>
      <ul className="flex gap-8">
        {menuItems.map((menuItem) => {
          return (
            <li key={menuItem.link}>
              <Link
                key={menuItem.link}
                href={menuItem.link}
                className="odkaz-bila"
              >
                {menuItem.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
