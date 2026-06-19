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
