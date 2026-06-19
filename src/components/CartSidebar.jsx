import { useEffect, useState } from "react";
import CheckoutModal from "./CheckoutModal.jsx";
import QuantitySelector from "./QuantitySelector.jsx";
import { useCart } from "../context/CartContext.jsx";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function CartSidebar() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const {
    cartItems,
    closeCart,
    decreaseQuantity,
    increaseQuantity,
    isCartOpen,
    removeFromCart,
    subtotal,
  } = useCart();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isCartOpen);

    return () => document.body.classList.remove("overflow-hidden");
  }, [isCartOpen]);

  function handleContinueShopping() {
    setIsCheckoutOpen(false);
    closeCart();
  }

  return (
    <>
      <div className={`fixed inset-0 z-50 ${isCartOpen ? "" : "pointer-events-none"}`} aria-hidden={!isCartOpen}>
        <button
          type="button"
          className={`absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity duration-500 ${
            isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Close cart"
          onClick={closeCart}
        />
        <aside
          className={`fixed top-0 right-0 h-full w-full max-w-md bg-surface shadow-2xl transition-transform duration-500 ease-out flex flex-col p-6 md:p-8 ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cart-title"
        >
        <div className="flex justify-between items-center mb-12">
          <h2 id="cart-title" className="font-headline-md text-headline-md text-primary">
            Your Cart
          </h2>
          <button type="button" className="text-primary hover:rotate-90 transition-transform duration-300" onClick={closeCart} aria-label="Close cart">
            <span className="material-symbols-outlined" aria-hidden="true">
              close
            </span>
          </button>
        </div>

        {cartItems.length > 0 ? (
          <>
            <div className="flex-grow space-y-8 overflow-y-auto pr-2">
              {cartItems.map((item) => (
                <article className="flex gap-4" key={`${item.product.slug}-${item.weight}`}>
                  <div className="w-24 h-24 bg-surface-variant flex-shrink-0">
                    <img className="w-full h-full object-cover" src={item.product.image} alt={item.product.imageAlt} />
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="font-label-md text-label-md text-secondary tracking-widest uppercase">{item.product.category}</p>
                    <h3 className="font-headline-md text-[20px] text-primary mb-1 truncate">{item.product.name}</h3>
                    <p className="font-body-md text-on-secondary-container mb-4">
                      {item.weight} · {currencyFormatter.format(item.product.price)}
                    </p>
                    <div className="flex items-center justify-between gap-4">
                      <QuantitySelector
                        quantity={item.quantity}
                        onDecrease={() => decreaseQuantity(item.product.slug, item.weight)}
                        onIncrease={() => increaseQuantity(item.product.slug, item.weight)}
                      />
                      <button
                        type="button"
                        className="font-label-md text-label-md text-secondary hover:text-primary underline underline-offset-4"
                        onClick={() => removeFromCart(item.product.slug, item.weight)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="pt-8 border-t border-outline/10 mt-8">
              <div className="flex justify-between mb-6">
                <span className="font-label-md text-label-md text-secondary uppercase">Subtotal</span>
                <span className="font-body-lg text-primary">{currencyFormatter.format(subtotal)}</span>
              </div>
              <button
                type="button"
                className="w-full bg-primary-container text-on-primary py-5 font-label-md text-label-md tracking-widest uppercase hover:opacity-90 transition-opacity"
                onClick={() => setIsCheckoutOpen(true)}
              >
                Checkout
              </button>
              <button type="button" className="w-full mt-4 border border-outline/30 text-primary py-4 font-label-md text-label-md tracking-widest uppercase hover:border-primary transition-all" onClick={closeCart}>
                Continue Shopping
              </button>
            </div>
          </>
        ) : (
          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-primary text-5xl mb-6" aria-hidden="true">
              shopping_bag
            </span>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Your cart is empty</h3>
            <p className="font-body-md text-secondary mb-8 max-w-xs">Add a roast or brewing tool to begin your Origin House order.</p>
            <button type="button" className="px-10 py-4 border border-primary text-primary font-label-md text-label-md tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all" onClick={closeCart}>
              Continue Shopping
            </button>
          </div>
        )}
        </aside>
      </div>
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onContinueShopping={handleContinueShopping}
      />
    </>
  );
}
