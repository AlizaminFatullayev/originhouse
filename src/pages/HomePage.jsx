import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { locations } from "../data/locations.js";
import { products } from "../data/products.js";

export default function HomePage() {
  const featuredProducts = products.filter((product) => product.isFeatured).slice(0, 3);
  const featuredLocations = locations.slice(0, 3);

  return (
    <main>
      <section className="relative min-h-[700px] h-[calc(100vh-80px)] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/20 z-10" />
          <img
            className="w-full h-full object-cover scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC6r2d7raf-hWvrvsScQ6WRh8B9993jJEfuFtsG8NW7x1mVmUX7thnktBMtXmsYC1glciUNTnnSnR29IWbPZRmoJO1h_UkdLBXrChjnQDG65fGG__ao1PiKyHk5JoVvBrbDUiy4Sg2MJ9akvGLXgdVy6xfcdD_dZhQ4pem3_Hylg4XxsxgoM_z6c2GwIUxuQcdAFBVlFsAVxeK_THcS1ASxPuPA7IwTARis4rIXc7Fo1rh6gKnRek2iPLudEclDCFB_r1JCGGqZ4g"
            alt="Modern coffee shop interior with high ceilings, warm oak textures, minimalist furniture, and golden hour light."
          />
        </div>
        <div className="relative z-20 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-on-primary">
          <div className="max-w-2xl">
            <p className="font-label-md text-label-md tracking-[0.2em] uppercase mb-6 opacity-90">Established 2018</p>
            <h1 className="font-display-lg text-[48px] md:text-display-lg leading-tight mb-8 text-balance">
              Modern Coffee,
              <br />
              Beautiful Spaces
            </h1>
            <p className="font-body-lg text-body-lg mb-12 opacity-85 max-w-lg">
              Experience the art of specialty coffee in thoughtfully designed spaces that prioritize ritual, craft, and human connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link className="px-10 py-5 bg-on-primary text-primary font-label-md text-label-md tracking-widest uppercase sharp-edge hover:bg-surface-container transition-colors text-center" to="/shop">
                Explore Coffee
              </Link>
              <Link className="px-10 py-5 border border-on-primary text-on-primary font-label-md text-label-md tracking-widest uppercase sharp-edge hover:bg-on-primary hover:text-primary transition-all text-center" to="/locations">
                Find a Location
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
          <SectionTitle eyebrow="The Selection" title="Our Current Roasts" />
          <Link className="font-label-md text-label-md text-primary border-b border-primary/20 hover:border-primary transition-colors pb-1" to="/shop">
            View All Roasts
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} variant="featured" />
          ))}
        </div>
      </section>

      <section className="bg-surface-container py-section-gap">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7 aspect-[16/10] overflow-hidden order-2 lg:order-1">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxAlsaE3c8Xbetjig2tZciGUOU3ZHjQfDLpGo6bs4XKnEaY4dLJTupwrYeUxYtknM4A55hafku7ulcUF2qpzdgPU0aR1jxn5dsvSaOCN6dgx9M6p4wBBCxVwpWXllyIMeLG8wc-U-9DUYl78VXFqm14HekPa8whiSGWwju-bj7SWO9DsonQ986a9cUqWTioywCC021Zi1MWxjVqADtm_dwgUvojQbc8p0Bnmail6K28LmmzpnNsKqmJcK6OG7gNYt9rzFr_vi-fIo"
              alt="Barista pouring milk into espresso to create latte art in a minimalist cafe."
            />
          </div>
          <div className="lg:col-span-5 lg:pl-16 order-1 lg:order-2 mb-16 lg:mb-0">
            <p className="font-label-md text-label-md text-secondary tracking-[0.2em] uppercase mb-6">Our Philosophy</p>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-8 leading-tight">The Art of the Perfect Pour</h2>
            <p className="font-body-lg text-body-lg text-on-secondary-container mb-8">
              At Origin House, coffee is more than a morning habit. It is a ritual of presence, sourced with care and roasted to reveal the character of each bean.
            </p>
            <p className="font-body-md text-body-md text-on-secondary-container mb-12">
              Every space is crafted for pause, from the weight of the cup to the quiet architecture around it.
            </p>
            <Link className="px-10 py-5 bg-primary-container text-on-primary font-label-md text-label-md tracking-widest uppercase sharp-edge hover:opacity-90 transition-opacity inline-block" to="/about">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-2xl mx-auto mb-24">
          <SectionTitle eyebrow="Our Flagships" title="Thoughtfully Designed Spaces" align="center" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {featuredLocations.map((location) => (
            <article className="group cursor-pointer" key={location.id}>
              <Link to="/locations" className="block">
                <div className="aspect-square bg-surface-variant mb-6 overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={location.image} alt={location.imageAlt} />
                </div>
                <div className="text-center">
                  <h3 className="font-headline-md text-[24px] text-primary mb-2">{location.name}</h3>
                  <p className="font-label-md text-label-md text-secondary tracking-widest uppercase mb-6">{location.city}</p>
                  <span className="inline-block px-6 py-3 border border-outline/30 font-label-md text-label-md text-primary uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all">
                    View Location
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary-container text-on-primary py-section-gap">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <p className="font-label-md text-label-md text-on-primary-container tracking-[0.2em] uppercase mb-8">The Journal</p>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8">Join the Ritual</h2>
            <p className="font-body-lg text-body-lg text-on-primary-container mb-12 opacity-80">
              Receive monthly insights into new harvests, brewing techniques, and the design philosophy behind our newest spaces.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                className="flex-grow bg-transparent border-b border-on-primary-container py-4 text-on-primary placeholder:text-on-primary-container focus:outline-none focus:border-on-primary transition-colors font-body-md"
                placeholder="Your Email Address"
                type="email"
              />
              <button className="px-10 py-4 bg-on-primary text-primary font-label-md text-label-md tracking-widest uppercase hover:bg-surface-variant transition-colors" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
