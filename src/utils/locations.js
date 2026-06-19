export function filterLocations(items, activeCity, searchTerm) {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  return items.filter((location) => {
    const matchesCity = activeCity === "All" || location.city === activeCity;
    const matchesSearch =
      normalizedSearch.length === 0 ||
      location.name.toLowerCase().includes(normalizedSearch) ||
      location.city.toLowerCase().includes(normalizedSearch);

    return matchesCity && matchesSearch;
  });
}
