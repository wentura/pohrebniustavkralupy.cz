import Link from "next/link";
import { menuItems } from "./data-menu";
import Signature from "./signature";
export default function Footer() {
  return (
    <div className="text-center my-4 text-neutral-700">
      <footer className="footer py-16 px-6 bg-modra text-neutral-300 text-xs">
        {menuItems.map((menuItem) => {
          return menuItem.children ? (
            <nav key={menuItem.id}>
              <header className="footer-title  text-left">
                {menuItem.text}
              </header>
              {menuItem.children.map((menuChildren) => {
                return (
                  <Link
                    key={menuChildren.id}
                    rel="noopener noreferrer"
                    href={menuChildren.link}
                    className="odkaz-bila text-left"
                  >
                    {menuChildren.text}
                  </Link>
                );
              })}
            </nav>
          ) : (
            <nav key={menuItem.id} className="text-left justify-items-start">
              <header className="footer-title">&nbsp;</header>
              <Link
                key={menuItem.id}
                rel="noopener noreferrer"
                href={menuItem.link}
                className="odkaz-bila link link-hover text-left"
              >
                {menuItem.text}
              </Link>
            </nav>
          );
        })}
      </footer>
      {/* <div className="footer p-10 bg-modra text-neutral-300 text-xs"></div> */}
      <Signature />
    </div>
  );
}
