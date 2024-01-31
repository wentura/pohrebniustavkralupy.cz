import Link from "next/link";
import { menuItems } from "./data-menu";

export default function Menu({ klas }) {
  klas ? klas : "";
  return (
    <ul className="menu menu-horizontal px-1">
      {menuItems.map((menuItem) => {
        return menuItem.children ? (
          <li key={menuItem.id}>
            <details>
              <summary>{menuItem.text}</summary>
              <ul className="m-4 w-52 bg-modra rounded-2xl">
                {/* {menuItem.children.length} */}
                {menuItem.children.map((menuChildren) => {
                  return (
                    <li key={menuChildren.id}>
                      <Link
                        rel=""
                        href={menuChildren.link}
                        className="odkaz-bila"
                      >
                        {menuChildren.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </details>
          </li>
        ) : (
          <li key={menuItem.id}>
            <Link
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
  );
}
