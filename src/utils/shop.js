export function sortProducts(items, sortValue) {
  const sortedItems = [...items];

  if (sortValue === "price-asc") {
    return sortedItems.sort((a, b) => a.price - b.price);
  }

  if (sortValue === "price-desc") {
    return sortedItems.sort((a, b) => b.price - a.price);
  }

  return sortedItems.sort((a, b) => Number(b.isNewest) - Number(a.isNewest) || b.id - a.id);
}

export function filterProductsByCategory(items, activeCategory) {
  if (activeCategory === "All") {
    return items;
  }

  return items.filter((product) => product.category === activeCategory);
}

export function getVisibleProducts(items, activeCategory, sortValue) {
  return sortProducts(filterProductsByCategory(items, activeCategory), sortValue);
}
