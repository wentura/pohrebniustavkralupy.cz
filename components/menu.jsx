"use client";
import Link from "next/link";
import { menuItems } from "./data-menu";

export default function Menu({ klas }) {
  klas ? klas : "";
  let i;
  return (
    <div>
      <ul className="flex px-1 gap-6 text-base">
        {menuItems.map((menuItem) => {
          i + 1;
          return menuItem.children ? (
            // <li key={menuItem.id} className="menuParent">
            <li key={i} className="menuParent">
              <summary>
                {menuItem.text} <span className="text-xs">&darr;</span>{" "}
              </summary>
              <ul className="p-2 w-64 bg-modra menuKid absolute">
                {/* {menuItem.children.length} */}
                {menuItem.children.map((menuChildren) => {
                  i + 1;
                  return (
                    // <li key={menuChildren.id} className="p-3">
                    <li key={i} className="p-3">
                      <Link
                        rel=""
                        href={menuChildren.link}
                        className="odkaz-bila"
                        // scroll={menuChildren.scroll}
                        scroll={true}
                      >
                        {menuChildren.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ) : (
            <li key={menuItem.id}>
              <Link rel="" href={menuItem.link} className="odkaz-bila">
                {menuItem.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
