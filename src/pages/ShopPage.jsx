import { Link } from "react-router-dom";

const products = [
  {
    name: "Ethiopia Sidamo",
    slug: "ethiopia-yirgacheffe",
    price: "$24.00",
    process: "Heirloom - Washed",
    description: "A delicate profile with complex floral notes and a crisp, tea-like finish.",
    notes: ["Jasmine", "Bergamot", "Honey"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCe2RdC8dFWRCTdViheRKvPJwzkRnVatejFraGwV9Ta_3DmIiOxEpC2RgLa4v6HEjbxUeuaFVRSdMug1utiAb76KytNikYb8EakOyN-ygvf8ITTUwpt-e-s3fgGDEYzN8Xtdwkmak4DdPLuNl8Y6BIQX-XntZqwkadQjNvMPxb9sYXuFwAZ-7dFhp9tbUy1OTk7pBdxyWkpYdZZCq_oOh910-jsWOyHWwSfwxj2RkHsNl4u4EcpxopXpzGAnQNprwd8EZMbbZUor8g",
  },
  {
    name: "Colombia Supremo",
    slug: "colombia-supremo",
    price: "$22.00",
    process: "Caturra - Natural",
    description: "Rich and full-bodied with a deep chocolate base and hints of dark berry fruitiness.",
    notes: ["Dark Cocoa", "Blackberry"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAiK0QJpHdVd4yJKbMLDYXrCq1opjPR-B05Ohtn-Ny0G1sdhF4Pf2VbAxFmSpKwZAYb-turEs0IzqyJwkb3IDHTI0r7kXYX7j7Au5wrI2d6k3cvd5mhp_eJd5QyKhA33Nqyev0MZBOrtpArr1UN__5ZLCcT_eUx1GuQ7zw5Wyx1B91vJO5rRVlPkwEYppQbG9iqFuMTWRoaIY8oaOVsIwat5z4cYm8bHhGBIBocSg7ptayX2odEnsXxrQmAb5cWAL9xZ0TnTsVN9FE",
  },
  {
    name: "House Espresso",
    slug: "house-espresso",
    price: "$20.00",
    process: "Origin House Signature",
    description: "Our flagship blend designed for perfect clarity and a syrupy mouthfeel in milk.",
    notes: ["Caramel", "Toasted Nut"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGZBjdMWSFhEQf_qVUGpr5eIt4hO6BW-UPNvqGcl5TGlGsOANQ6qEeJDOeFlkaipwlwDXnj7VT8pNmj3OUWX4hGxNzw9S8Sp31J8Tk5NzQl3ntGmriM6kpCmyjodu1s7eeyDEhKjOk_-HSFNQUt5MRqZ9Xcv4LrnmYLoOlW92OcZsSB-K5kt8VTnIxQ8c1L5vDQro8xfH4bvj_P7sD8jalA1SjC1KLNYl7YbJjLO_atjWmUpWy7vTYEOe0Pdg8F094J4efGESnCnM",
  },
];

const categories = ["All", "Espresso", "Filter Coffee", "Decaf", "Equipment"];

export default function ShopPage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
      <section className="py-16 md:py-32 flex flex-col items-center text-center">
        <span className="font-label-md text-label-md text-outline uppercase tracking-[0.2em] mb-6">Collections</span>
        <h1 className="font-headline-lg text-headline-lg md:text-display-lg max-w-3xl">Shop Coffee</h1>
        <p className="mt-8 font-body-lg text-body-lg text-secondary max-w-2xl">
          Meticulously sourced, small-batch roasted, and delivered with uncompromising quality from our house to yours.
        </p>
      </section>

      <section className="flex flex-col md:flex-row justify-between items-center py-8 border-y border-outline-variant/30 gap-6" aria-label="Shop controls">
        <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`whitespace-nowrap px-6 py-2 rounded-full border font-label-md text-label-md transition-all ${
                category === "All" ? "bg-primary-container text-on-primary border-primary-container" : "border-outline/20 text-primary hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto justify-end">
          <label className="font-label-md text-label-md text-outline uppercase tracking-wider" htmlFor="sort-products">
            Sort By
          </label>
          <select id="sort-products" className="bg-transparent border-0 border-b border-primary/20 pb-1 font-body-md text-body-md focus:ring-0 focus:border-primary">
            <option>Newest</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-24 mt-20" aria-label="Products">
        {products.map((product) => (
          <article className="group flex flex-col" key={product.name}>
            <div className="relative overflow-hidden aspect-[4/5] mb-6 bg-surface-container-low transition-colors group-hover:bg-surface-container">
              <Link to={`/shop/${product.slug}`} aria-label={`View ${product.name}`}>
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={product.image} alt={`${product.name} product bag`} />
              </Link>
              <button type="button" className="absolute bottom-6 left-6 right-6 bg-primary-container text-on-primary py-4 font-label-md text-label-md transition-all duration-300 hover:bg-primary">
                Add to Cart
              </button>
            </div>
            <div className="flex justify-between items-start mb-2 gap-4">
              <h2 className="font-headline-md text-headline-md">{product.name}</h2>
              <span className="font-label-md text-label-md pt-2">{product.price}</span>
            </div>
            <p className="font-label-md text-label-md text-outline mb-3 uppercase tracking-wider">{product.process}</p>
            <p className="font-body-md text-body-md text-secondary mb-4 line-clamp-2">{product.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {product.notes.map((note) => (
                <span key={note} className="px-2 py-1 bg-tertiary-fixed text-on-tertiary-container font-label-md text-[10px] uppercase tracking-tighter">
                  {note}
                </span>
              ))}
            </div>
            <Link className="font-label-md text-label-md text-primary uppercase tracking-widest underline underline-offset-8 w-fit" to={`/shop/${product.slug}`}>
              View Details
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
