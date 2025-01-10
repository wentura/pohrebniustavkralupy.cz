import Link from "next/link";
import { menuItems } from "./data-menu";
import Matomo from "./matomo";
import Signature from "./signature";
export default function Footer() {
  return (
    <div className="text-center my-4 text-neutral-700">
      <footer className="footer py-16 px-6 bg-modra text-neutral-300 text-md">
        {menuItems.map((menuItem, index) => {
          return menuItem.children ? (
            <div key={index}>
              <div className="footer-title  text-left">{menuItem.text}</div>
              {menuItem.children.map((menuChildren, index) => {
                return (
                  <Link
                    key={index}
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
                key={index}
                href={menuItem.link}
                className="odkaz-bila link link-hover text-left"
              >
                {menuItem.text}
              </Link>
            </div>
          );
        })}
        <div className="relative mb-4 flex mx-auto md:flex-col">
          <a href="https://www.facebook.com/profile.php?id=61569862836577" target="_blank">
          <img src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1736514127/pro_vsechny/icons8-facebook-50.png" className="w-8 invert opacity-65 mr-4"/>
          </a>
          <a href="https://www.instagram.com/pohrebni_ustav_cibulka/"  target="_blank">
          <img src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1736514126/pro_vsechny/icons8-instagram-50.png" className="w-8 invert opacity-65"/>
          </a>
          </div>
      </footer>
      {/* <div className="footer p-10 bg-modra text-neutral-300 text-xs"></div> */}
      <Signature />
      <Matomo />
    </div>
  );
}
