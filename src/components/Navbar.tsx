"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#inicio",   label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#clientes",  label: "Clientes" },
  { href: "#contacto",  label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-white shadow-lg shadow-blue-500/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center group relative w-48 h-12">
          <Image 
            src="/logo.svg" 
            alt="Zamora Global Services Logo" 
            fill
            priority
            className={`object-contain transition-all duration-300 ${
              scrolled ? "brightness-100" : "brightness-0 invert drop-shadow-md"
            }`}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-500/10 ${
                scrolled
                  ? "text-blue-800 hover:text-blue-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-4 px-5 py-2.5 rounded-full text-sm font-semibold text-white btn-shimmer shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
          >
            Contáctanos
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-blue-800" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden glass-white mt-2 mx-4 rounded-2xl shadow-xl border border-blue-100 overflow-hidden animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 text-blue-900 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-blue-50 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
