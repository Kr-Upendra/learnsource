"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex items-center mb-2 relative">
      <h1 className="flex-1">LearnSource</h1>
      <nav
        ref={menuRef}
        className={`space-x-4 max-md:space-x-0 max-md:absolute max-md:top-8 max-md:right-0 max-md:flex-col max-md:items-center max-md:gap-4 max-md:p-4 max-md:px-14 max-md:rounded-xl max-md:bg-white max-md:shadow-2xl max-md:border max-md:border-gray-300 max-md:text-sm ${
          isMenuOpen ? "max-md:flex" : "max-md:hidden"
        }`}
      >
        <Link
          href="#"
          className="text-gray-600 hover:text-black transition-colors duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-gray-600 hover:text-black transition-colors duration-300 ease-in-out"
        >
          Topics
        </Link>
        <Link
          href="#"
          className="text-gray-600 hover:text-black transition-colors duration-300 ease-in-out"
        >
          Tech
        </Link>
        <Link
          href="#"
          className="text-gray-600 hover:text-black transition-colors duration-300 ease-in-out"
        >
          Contact
        </Link>
      </nav>
      <h3
        className="hidden max-md:block cursor-pointer"
        onClick={handleMenuToggle}
      >
        Menu
      </h3>
    </header>
  );
}
