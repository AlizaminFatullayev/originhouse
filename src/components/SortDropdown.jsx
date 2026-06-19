export const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price Low to High" },
  { value: "price-desc", label: "Price High to Low" },
];

export default function SortDropdown({ value, onChange }) {
  return (
    <div className="flex items-center gap-4 w-full md:w-auto justify-end">
      <label className="font-label-md text-label-md text-outline uppercase tracking-wider" htmlFor="sort-products">
        Sort By
      </label>
      <select
        id="sort-products"
        className="bg-transparent border-0 border-b border-primary/20 pb-1 font-body-md text-body-md focus:ring-0 focus:border-primary"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
