import Link from "next/link";
import { menuItems } from "./data-menu";
import Matomo from "./matomo";
import Signature from "./signature";
export default function Footer() {
  return (
    <div className="text-center my-4 text-neutral-700">
      <footer className="footer py-16 px-6 bg-modra text-neutral-300 text-md">
        {menuItems.map((menuItem) => {
          return menuItem.children ? (
            <div key={menuItem.link}>
              <div className="footer-title  text-left">{menuItem.text}</div>
              {menuItem.children.map((menuChildren) => {
                return (
                  <Link
                    key={menuChildren.link}
                    href={menuChildren.link}
                    className="odkaz-bila text-left"
                  >
                    {menuChildren.text}
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-left justify-items-start">
              <div className="footer-title">&nbsp;</div>
              <Link
                key={menuItem.link}
                href={menuItem.link}
                className="odkaz-bila link link-hover text-left"
              >
                {menuItem.text}
              </Link>
            </div>
          );
        })}
      </footer>
      {/* <div className="footer p-10 bg-modra text-neutral-300 text-xs"></div> */}
      <Signature />
      <Matomo />
    </div>
  );
}
