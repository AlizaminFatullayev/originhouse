import ProductGrid from "../components/ProductGrid.jsx";
import { productCategories, products } from "../data/products.js";

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
          {productCategories.map((category) => (
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

      <ProductGrid products={products} />
    </main>
  );
}
