import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({ products, onAddToCart }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-24 mt-20" aria-label="Products">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} onAddToCart={onAddToCart} />
      ))}
    </section>
  );
}
