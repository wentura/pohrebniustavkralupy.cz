import Link from "next/link";
import { menuItems } from "./data-menu";

export default function Menu({ klas }) {
  klas ? klas : "";
  return (
    <div className={`flex flex-col xl:flex-row ${klas}`}>
      <ul className="flex flex-col xl:flex-row gap-8 text-center xl:text-left">
        {menuItems.map((menuItem) => {
          return (
            <li key={menuItem.link}>
              <Link
                key={menuItem.link}
                rel="noopener noreferrer"
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
