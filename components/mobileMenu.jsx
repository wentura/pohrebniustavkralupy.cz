"use client";

import Link from "next/link";
import React, { useState } from "react";
import { menuItems } from "./data-menu";
import Menu from "./menu";
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="text-center justify-center align-middle z-20">
      <button className="flex justify-end p-4 xl:hidden" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
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
        } top-0 left-0 right-0 bg-white px-2 pt-2 pb-4 z-10 flex flex-col text-gray-900 shadow-md opacity-95 w-full items-center h-screen fixed`}
      >
        <button className="flex justify-end p-4" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            className="w-6 h-6"
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
              <li key={menuItem.id} className="py-3">
                {/* <span className="font-bold text-base">{menuItem.text}</span> */}
                <ul>
                  {menuItem.children.map((menuChildren) => {
                    return (
                      <li key={menuChildren.id} className="py-1">
                        <Link
                          key={menuChildren.id}
                          rel="noopener noreferrer"
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
              <li key={menuItem.id} className="text-left justify-items-start">
                <Link
                  rel="noopener noreferrer"
                  href={menuItem.link}
                  className="odkaz-bila link link-hover text-left underline text-base"
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
