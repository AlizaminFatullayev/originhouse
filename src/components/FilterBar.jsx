export default function FilterBar({ categories, activeCategory, onChange }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto hide-scrollbar">
      {categories.map((category) => {
        const isActive = category === activeCategory;

        return (
          <button
            key={category}
            type="button"
            className={`whitespace-nowrap px-6 py-2 rounded-full border font-label-md text-label-md transition-all ${
              isActive ? "bg-primary-container text-on-primary border-primary-container" : "border-outline/20 text-primary hover:border-primary"
            }`}
            onClick={() => onChange(category)}
            aria-pressed={isActive}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
