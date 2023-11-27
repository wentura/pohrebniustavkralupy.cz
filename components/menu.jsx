import Link from "next/link";
import { menuItems } from "./data-menu";

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
