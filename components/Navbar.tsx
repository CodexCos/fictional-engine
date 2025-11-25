"use client";
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu } from "lucide-react";
import { NAV_LINK, SOCIAL_LINKS } from "@/data/Raw";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="p-6 flex justify-end sm:justify-center">
      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed navbar w-full">
        <div className="flex m-auto space-x-6 px-5 items-center navbar-background backdrop-blur-sm py-3 w-fit rounded-full">
          {NAV_LINK.map(({ href, label }) => (
            <button
              key={label}
              onClick={() => scrollToSection(href)}
              className="nav-link cursor-pointer"
            >
              {label}
            </button>
          ))}

          {/* Socials + ThemeToggle */}
          <div className="flex items-center space-x-4">
            {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                target="_blank"
                rel="noopener noreferrer"
                href={href}
                aria-label={label}
              >
                <Icon className="social-icon" />
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <button
        onClick={toggleMenu}
        className="fixed z-50 md:hidden cursor-pointer rounded-full p-4 navbar-background"
        aria-label="Menu button"
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <nav className="md:hidden z-50 fixed top-24 left-24  w-full flex justify-center">
          <div className="flex flex-col space-y-6 py-6 px-8 items-center navbar-background backdrop-blur-md w-fit rounded-xl">
            {NAV_LINK.map(({ href, label }) => (
              <button
                key={label}
                onClick={() => scrollToSection(href)}
                className="nav-link "
              >
                {label}
              </button>
            ))}

            <div className="flex flex-col items-center justify-center space-y-6">
              {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href}
                  aria-label={label}
                >
                  <Icon className="social-icon" />
                </a>
              ))}
              <ThemeToggle />
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
