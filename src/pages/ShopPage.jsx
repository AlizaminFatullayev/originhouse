import { useMemo, useState } from "react";
import FilterBar from "../components/FilterBar.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import SortDropdown from "../components/SortDropdown.jsx";
import { useCart } from "../context/CartContext.jsx";
import { productCategories, products } from "../data/products.js";
import { getVisibleProducts } from "../utils/shop.js";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortValue, setSortValue] = useState("newest");
  const { addToCart } = useCart();

  const visibleProducts = useMemo(() => {
    return getVisibleProducts(products, activeCategory, sortValue);
  }, [activeCategory, sortValue]);

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
        <FilterBar categories={productCategories} activeCategory={activeCategory} onChange={setActiveCategory} />
        <SortDropdown value={sortValue} onChange={setSortValue} />
      </section>

      {visibleProducts.length > 0 ? (
        <ProductGrid products={visibleProducts} onAddToCart={(product) => addToCart(product)} />
      ) : (
        <div className="py-section-gap text-center">
          <p className="font-body-lg text-body-lg text-secondary">No products match this category.</p>
        </div>
      )}
    </main>
  );
}
