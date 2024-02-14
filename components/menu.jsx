"use client";
import Link from "next/link";
import { menuItems } from "./data-menu";

export default function Menu({ klas }) {
  klas ? klas : "";
  return (
    <div>
      <ul className="flex px-1 gap-6">
        {menuItems.map((menuItem) => {
          return menuItem.children ? (
            <li key={menuItem.id}>
              <div className="menuParent">
                <summary>
                  {menuItem.text} <span className="text-xs">&darr;</span>{" "}
                </summary>
                <ul className="p-2 w-64 bg-modra menuKid absolute">
                  {/* {menuItem.children.length} */}
                  {menuItem.children.map((menuChildren) => {
                    return (
                      <li key={menuChildren.id} className="p-3">
                        <Link
                          rel=""
                          href={menuChildren.link}
                          className="odkaz-bila"
                          // scroll={menuChildren.scroll}
                        >
                          {menuChildren.text}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
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
