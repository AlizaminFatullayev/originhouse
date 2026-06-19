import { Link } from "react-router-dom";

export default function ProductCard({ product, variant = "shop", onAddToCart }) {
  const isFeatured = variant === "featured";
  const title = isFeatured ? product.name : product.shortName || product.name;

  return (
    <article className={`group flex flex-col ${isFeatured ? "" : "h-full"}`}>
      <div
        className={`relative overflow-hidden bg-surface-container-low transition-colors group-hover:bg-surface-container ${
          isFeatured ? "aspect-[4/5] mb-8" : "aspect-[4/5] mb-6"
        }`}
      >
        <Link to={`/shop/${product.slug}`} aria-label={`View ${product.name}`}>
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={product.image}
            alt={product.imageAlt}
          />
        </Link>
        {!isFeatured ? (
          <button
            type="button"
            className="absolute bottom-6 left-6 right-6 bg-primary-container text-on-primary py-4 font-label-md text-label-md opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 focus:opacity-100 focus:translate-y-0 transition-all duration-300 hover:bg-primary"
            onClick={() => onAddToCart?.(product)}
          >
            Add to Cart
          </button>
        ) : null}
      </div>

      {isFeatured ? (
        <Link to={`/shop/${product.slug}`} className="space-y-3 block">
          <p className="font-label-md text-label-md text-secondary tracking-widest uppercase">{product.eyebrow}</p>
          <h3 className="font-headline-md text-headline-md text-primary">{product.name}</h3>
          <p className="font-body-md text-secondary italic">Notes of {product.tasteNotes.join(", ")}</p>
          <div className="pt-4 flex justify-between items-center">
            <span className="font-body-lg text-primary">${product.price.toFixed(2)}</span>
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest group-hover:underline underline-offset-8">
              View Product
            </span>
          </div>
        </Link>
      ) : (
        <>
          <div className="flex justify-between items-start mb-2 gap-4">
            <h2 className="font-headline-md text-headline-md">{title}</h2>
            <span className="font-label-md text-label-md pt-2">${product.price.toFixed(2)}</span>
          </div>
          <p className="font-label-md text-label-md text-outline mb-3 uppercase tracking-wider">{product.processLabel}</p>
          <p className="font-body-md text-body-md text-secondary mb-4 line-clamp-2">{product.description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {product.tasteNotes.slice(0, 3).map((note) => (
              <span key={note} className="px-2 py-1 bg-tertiary-fixed text-on-tertiary-container font-label-md text-[10px] uppercase tracking-tighter">
                {note}
              </span>
            ))}
          </div>
          <Link className="font-label-md text-label-md text-primary uppercase tracking-widest underline underline-offset-8 w-fit mt-auto" to={`/shop/${product.slug}`}>
            View Details
          </Link>
        </>
      )}
    </article>
  );
}
