"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { menuItems } from "./data-menu";

export default function MobileMenu() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openedForPath, setOpenedForPath] = useState(null);

  const isOpen = menuOpen && openedForPath === pathname;

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  function toggleMenu() {
    if (isOpen) {
      setMenuOpen(false);
      return;
    }
    setOpenedForPath(pathname);
    setMenuOpen(true);
  }

  return (
    <div className="text-center justify-center align-middle z-20">
      <button
        type="button"
        className="flex justify-end p-4 lg:hidden"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Otevřít menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } top-0 left-0 right-0 bg-white px-2 pt-2 pb-4 z-50 flex flex-col text-gray-900 shadow-md opacity-95 w-full items-center h-screen fixed`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className="flex justify-end p-4"
          onClick={toggleMenu}
          aria-label="Zavřít menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M 0 0 L 20 20 L 0 0 M 20 0 L 0 20 L 20 0"
            ></path>
          </svg>
        </button>

        <ul className="text-left max-w-xl">
          {menuItems.map((menuItem) => {
            return menuItem.children ? (
              <li key={menuItem.link} className="py-3">
                <ul>
                  {menuItem.children.map((menuChildren) => {
                    return (
                      <li key={menuChildren.link} className="py-1">
                        <Link
                          href={menuChildren.link}
                          className="odkaz-bila text-left underline text-base"
                        >
                          {menuChildren.text}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ) : (
              <li key={menuItem.link} className="text-left justify-items-start">
                <Link
                  href={menuItem.link}
                  className="odkaz-bila text-left underline text-base"
                >
                  {menuItem.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
