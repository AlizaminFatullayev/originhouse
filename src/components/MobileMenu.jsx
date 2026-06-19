import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/navigation.js";

export default function MobileMenu({ isOpen, onClose, onOpenCart }) {
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const linkClass = ({ isActive }) =>
    [
      "font-headline-lg-mobile text-headline-lg-mobile hover:translate-x-1 transition-transform",
      isActive ? "text-primary font-bold" : "text-secondary",
    ].join(" ");

  return (
    <div className={`fixed inset-0 z-[60] md:hidden ${isOpen ? "" : "pointer-events-none"}`} aria-hidden={!isOpen}>
      <button
        type="button"
        className={`absolute inset-0 bg-primary/20 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        aria-label="Close mobile menu"
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-surface shadow-2xl flex flex-col p-8 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="flex justify-between items-center mb-12">
          <h2 id="mobile-menu-title" className="font-headline-md text-headline-md text-primary">
            ORIGIN HOUSE
          </h2>
          <button type="button" className="text-primary" onClick={onClose} aria-label="Close mobile menu">
            <span className="material-symbols-outlined" aria-hidden="true">
              close
            </span>
          </button>
        </div>
        <p className="font-body-md text-body-md text-secondary">Premium Specialty Coffee</p>
        <nav className="flex flex-col gap-8 mt-10" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"} onClick={onClose}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto pt-12 border-t border-outline-variant/30">
          <button
            type="button"
            className="w-full bg-primary-container text-on-primary py-4 font-label-md text-label-md tracking-widest uppercase active:scale-95 transition-all"
            onClick={() => {
              onClose();
              onOpenCart();
            }}
          >
            View Cart
          </button>
        </div>
      </aside>
    </div>
  );
}
