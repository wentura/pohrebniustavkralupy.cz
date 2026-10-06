import CldImg from "./CldImg";
import Link from "next/link";
import { menuItems } from "./data-menu";
import Matomo from "./matomo";
import Signature from "./signature";

export default function Footer() {
  return (
    <div className="text-center my-4 text-neutral-700">
      <footer className="grid grid-flow-row gap-8 md:grid-cols-2 lg:grid-cols-5 py-16 px-6 bg-modra text-neutral-300 text-base">
        {menuItems.map((menuItem) => {
          return menuItem.children ? (
            <div key={menuItem.id} className="flex flex-col gap-1 text-left">
              <div className="mb-2 font-semibold uppercase opacity-60 text-sm text-left">
                {menuItem.text}
              </div>
              {menuItem.children.map((menuChildren, index) => {
                return (
                  <Link
                    key={menuChildren.id ?? menuChildren.link ?? index}
                    href={menuChildren.link}
                    className="odkaz-bila text-left"
                  >
                    {menuChildren.text}
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-left flex flex-col gap-1" key={menuItem.id}>
              <div className="mb-2 font-semibold uppercase opacity-60 text-sm">
                &nbsp;
              </div>
              <Link
                href={menuItem.link}
                className="odkaz-bila hover:underline text-left"
              >
                {menuItem.text}
              </Link>
            </div>
          );
        })}
        <div className="relative mb-4 flex mx-auto md:flex-col md:mx-0">
          <a
            href="https://www.facebook.com/profile.php?id=61569862836577"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CldImg
                      src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1736514127/pro_vsechny/icons8-facebook-50.png"
                      alt="Facebook"
                      width={800}
                      height={600}
                      className="w-8 invert opacity-65 mr-4"
                      sizes={"100vw"}
                    />
          </a>
          <a
            href="https://www.instagram.com/pohrebni_ustav_cibulka/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CldImg
                      src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1736514126/pro_vsechny/icons8-instagram-50.png"
                      alt="Instagram"
                      width={800}
                      height={600}
                      className="w-8 invert opacity-65"
                      sizes={"100vw"}
                    />
          </a>
        </div>
      </footer>
      <Signature />
      <Matomo />
    </div>
  );
}
