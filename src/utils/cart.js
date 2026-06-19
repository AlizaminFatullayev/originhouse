export function addCartItem(currentItems, product, options = {}) {
  const weight = options.weight || product.weightOptions?.[0] || "250g";
  const quantity = options.quantity || 1;
  const existingItem = currentItems.find((item) => item.product.slug === product.slug && item.weight === weight);

  if (existingItem) {
    return currentItems.map((item) =>
      item.product.slug === product.slug && item.weight === weight
        ? { ...item, quantity: item.quantity + quantity }
        : item,
    );
  }

  return [...currentItems, { product, weight, quantity }];
}

export function increaseCartItemQuantity(currentItems, productSlug, weight) {
  return currentItems.map((item) =>
    item.product.slug === productSlug && item.weight === weight
      ? { ...item, quantity: item.quantity + 1 }
      : item,
  );
}

export function decreaseCartItemQuantity(currentItems, productSlug, weight) {
  return currentItems.map((item) =>
    item.product.slug === productSlug && item.weight === weight
      ? { ...item, quantity: Math.max(1, item.quantity - 1) }
      : item,
  );
}

export function removeCartItem(currentItems, productSlug, weight) {
  return currentItems.filter((item) => !(item.product.slug === productSlug && item.weight === weight));
}

export function getCartSubtotal(currentItems) {
  return currentItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
}
