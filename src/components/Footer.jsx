import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-surface-container border-t border-outline/10">
      <div className="w-full px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div>
          <h2 className="font-headline-md text-headline-md text-primary mb-4">ORIGIN HOUSE</h2>
          <p className="font-body-md text-secondary leading-relaxed max-w-xs">
            Specialty coffee for quiet rituals, beautiful spaces, and thoughtful daily craft.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-2">Explore</h3>
          <Link className="font-body-md text-secondary hover:text-primary underline underline-offset-4" to="/shop">
            Shop Coffee
          </Link>
          <Link className="font-body-md text-secondary hover:text-primary underline underline-offset-4" to="/locations">
            Locations
          </Link>
          <Link className="font-body-md text-secondary hover:text-primary underline underline-offset-4" to="/about">
            About
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-2">The Brand</h3>
          <Link className="font-body-md text-secondary hover:text-primary underline underline-offset-4" to="/about">
            Coffee Philosophy
          </Link>
          <Link className="font-body-md text-secondary hover:text-primary underline underline-offset-4" to="/about">
            Sustainability
          </Link>
          <a className="font-body-md text-secondary hover:text-primary underline underline-offset-4" href="mailto:hello@originhouse.example">
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-2">Follow</h3>
          <div className="flex gap-4">
            <a className="font-body-md text-secondary hover:text-primary" href="https://www.instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="font-body-md text-secondary hover:text-primary" href="https://www.pinterest.com" target="_blank" rel="noreferrer">
              Pinterest
            </a>
          </div>
          <p className="font-label-md text-label-md text-secondary mt-8">© 2024 Origin House Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
