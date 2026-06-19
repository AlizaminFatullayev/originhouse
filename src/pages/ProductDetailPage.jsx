import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { getProductBySlug, getSimilarProducts, products } from "../data/products.js";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const product = getProductBySlug(productId) || products[0];
  const similarProducts = getSimilarProducts(product);
  const [mainImage, ...thumbnails] = product.gallery;

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
      <nav className="mb-12 flex flex-wrap gap-4 font-label-md text-label-md text-on-secondary-container" aria-label="Breadcrumb">
        <Link className="hover:text-primary transition-colors" to="/shop">
          Shop
        </Link>
        <span>/</span>
        <span className="text-primary opacity-60">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="aspect-[4/5] bg-surface-container-low overflow-hidden">
            <img className="w-full h-full object-cover" src={mainImage.src} alt={mainImage.alt} />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[mainImage, ...thumbnails].map((thumbnail, index) => (
              <button
                key={`${thumbnail.src}-${index}`}
                type="button"
                className={`aspect-square bg-surface-container border-2 transition-all ${index === 0 ? "border-primary" : "border-transparent"}`}
                aria-label={`View product image ${index + 1}`}
              >
                <img className="w-full h-full object-cover opacity-80 hover:opacity-100" src={thumbnail.src} alt={thumbnail.alt} />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-10">
          <header className="space-y-4">
            <p className="font-label-md text-label-md uppercase tracking-widest text-outline">{product.eyebrow}</p>
            <h1 className="font-headline-lg text-headline-lg text-primary leading-tight">{product.name.toUpperCase()}</h1>
            <p className="font-headline-md text-headline-md text-primary">${product.price.toFixed(2)}</p>
          </header>
          <div className="space-y-6">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{product.detailDescription}</p>
            <div className="grid grid-cols-2 gap-y-6 pt-6 border-t border-outline/20">
              <div>
                <span className="font-label-md text-label-md text-outline block mb-1">TASTE NOTES</span>
                <span className="font-body-md text-body-md text-primary">{product.tasteNotes.join(", ")}</span>
              </div>
              <div>
                <span className="font-label-md text-label-md text-outline block mb-1">ROAST LEVEL</span>
                <span className="font-body-md text-body-md text-primary">{product.roast}</span>
              </div>
              <div>
                <span className="font-label-md text-label-md text-outline block mb-1">ORIGIN</span>
                <span className="font-body-md text-body-md text-primary">{product.origin}</span>
              </div>
              <div>
                <span className="font-label-md text-label-md text-outline block mb-1">PROCESS</span>
                <span className="font-body-md text-body-md text-primary">{product.process}</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <span className="font-label-md text-label-md text-outline block mb-4 uppercase tracking-widest">Weight Selection</span>
              <div className="flex flex-wrap gap-3">
                {product.weightOptions.map((weight, index) => (
                  <button
                    key={weight}
                    type="button"
                    className={`px-6 py-3 border font-label-md text-label-md transition-all ${
                      index === 0 ? "border-primary text-primary" : "border-outline/30 text-secondary hover:border-primary hover:text-primary"
                    }`}
                  >
                    {weight.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="font-label-md text-label-md text-outline block mb-4 uppercase tracking-widest">Quantity</span>
              <div className="flex items-center border border-outline/30 w-fit">
                <button type="button" className="px-4 py-3 text-secondary hover:text-primary transition-colors" aria-label="Decrease quantity">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    remove
                  </span>
                </button>
                <span className="px-6 py-3 font-label-md text-label-md text-primary">01</span>
                <button type="button" className="px-4 py-3 text-secondary hover:text-primary transition-colors" aria-label="Increase quantity">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    add
                  </span>
                </button>
              </div>
            </div>
          </div>
          <button type="button" className="w-full bg-primary-container text-on-primary py-5 font-label-md text-label-md tracking-widest uppercase hover:opacity-90 transition-all active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>

      <section className="mt-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-5 space-y-8">
          <h2 className="font-headline-lg text-headline-lg text-primary">THE PRODUCT STORY</h2>
          <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            <p>{product.story}</p>
            <p>Every selection is roasted in small batches and profiled to preserve the detail that made it stand out on the cupping table.</p>
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <div className="aspect-video bg-surface-container-low overflow-hidden">
            <img className="w-full h-full object-cover" src={product.storyImage} alt={product.storyImageAlt} />
          </div>
        </div>
      </section>

      <section className="mt-section-gap bg-secondary-container p-margin-mobile md:p-margin-desktop">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <header className="space-y-4">
            <span className="font-label-md text-label-md text-on-secondary-container uppercase tracking-[0.2em]">Crafting the perfect cup</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">BREWING RECOMMENDATION</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left pt-12 border-t border-outline/10">
            {[
              ["coffee_maker", "METHOD", product.brewing.method],
              ["water_drop", "RATIO", product.brewing.ratio],
              ["timer", "TIME", product.brewing.time],
            ].map(([icon, label, text]) => (
              <div className="space-y-4" key={label}>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">
                    {icon}
                  </span>
                  <span className="font-label-md text-label-md text-primary uppercase font-bold">{label}</span>
                </div>
                <p className="font-body-md text-body-md text-on-secondary-container">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-section-gap space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline/20 pb-8 gap-6">
          <h2 className="font-headline-lg text-headline-lg text-primary">SIMILAR PRODUCTS</h2>
          <Link className="font-label-md text-label-md text-primary underline underline-offset-8 hover:opacity-70 transition-opacity" to="/shop">
            EXPLORE COLLECTION
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {similarProducts.map((similarProduct) => (
            <ProductCard key={similarProduct.slug} product={similarProduct} variant="featured" />
          ))}
        </div>
      </section>
    </main>
  );
}
