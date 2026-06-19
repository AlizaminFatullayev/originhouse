export default function QuantitySelector({ quantity, onDecrease, onIncrease, min = 1 }) {
  return (
    <div className="flex items-center border border-outline/30 w-fit">
      <button
        type="button"
        className="px-4 py-3 text-secondary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Decrease quantity"
        onClick={onDecrease}
        disabled={quantity <= min}
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          remove
        </span>
      </button>
      <span className="px-6 py-3 font-label-md text-label-md text-primary tabular-nums">
        {String(quantity).padStart(2, "0")}
      </span>
      <button
        type="button"
        className="px-4 py-3 text-secondary hover:text-primary transition-colors"
        aria-label="Increase quantity"
        onClick={onIncrease}
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          add
        </span>
      </button>
    </div>
  );
}
