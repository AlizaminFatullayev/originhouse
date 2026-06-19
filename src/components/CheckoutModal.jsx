export default function CheckoutModal({ isOpen, onClose, onContinueShopping }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-margin-mobile" role="dialog" aria-modal="true" aria-labelledby="checkout-title">
      <button type="button" className="absolute inset-0 bg-primary/50 backdrop-blur-sm" aria-label="Close checkout modal" onClick={onClose} />
      <div className="relative bg-surface w-full max-w-md p-8 md:p-10 editorial-shadow">
        <div className="flex justify-between items-start gap-6 mb-8">
          <h2 id="checkout-title" className="font-headline-md text-headline-md text-primary">
            Checkout
          </h2>
          <button type="button" className="text-primary hover:rotate-90 transition-transform duration-300" onClick={onClose} aria-label="Close checkout modal">
            <span className="material-symbols-outlined" aria-hidden="true">
              close
            </span>
          </button>
        </div>
        <p className="font-body-lg text-body-lg text-secondary mb-10">
          This is a front-end prototype. Payment is not available.
        </p>
        <button
          type="button"
          className="w-full bg-primary-container text-on-primary py-5 font-label-md text-label-md tracking-widest uppercase hover:opacity-90 transition-opacity"
          onClick={onContinueShopping}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
