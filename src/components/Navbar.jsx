import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/locations", label: "Locations" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const { cartCount } = useCart();
  const linkClass = ({ isActive }) =>
    [
      "font-label-md text-label-md transition-colors duration-300",
      isActive ? "text-primary border-b border-primary pb-1" : "text-secondary hover:text-primary",
    ].join(" ");

  return (
    <header className="sticky top-0 left-0 w-full z-40 bg-surface/85 backdrop-blur-md">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
        <div className="flex items-center gap-12">
          <NavLink
            to="/"
            className="font-headline-md text-headline-md text-primary"
            aria-label="Origin House home"
          >
            ORIGIN HOUSE
          </NavLink>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button type="button" className="relative text-primary hover:opacity-80 transition-opacity" aria-label="Open cart">
            <span className="material-symbols-outlined" aria-hidden="true">
              shopping_bag
            </span>
            {cartCount > 0 ? (
              <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 bg-primary text-on-primary text-[10px] flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            ) : null}
          </button>
          <button type="button" className="md:hidden text-primary" aria-label="Open mobile menu">
            <span className="material-symbols-outlined" aria-hidden="true">
              menu
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
