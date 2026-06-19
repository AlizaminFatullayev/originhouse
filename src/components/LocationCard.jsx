export default function LocationCard({ location, onSelect }) {
  return (
    <article className="group cursor-pointer">
      <button type="button" className="block w-full text-left" onClick={() => onSelect?.(location)}>
        <div className="relative overflow-hidden aspect-[4/5] mb-8">
          <img
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            src={location.image}
            alt={location.imageAlt}
          />
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-start mb-4 gap-4">
            <h2 className="font-headline-md text-headline-md">{location.name}</h2>
            <span className="font-label-md text-label-md text-secondary border border-outline/20 px-3 py-1 whitespace-nowrap">
              {location.city}
            </span>
          </div>
          <p className="font-body-md text-body-md text-secondary mb-6 leading-relaxed">{location.address}</p>
          <div className="space-y-2 mb-8 text-outline">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                schedule
              </span>
              <span className="font-label-md text-label-md">{location.openingHours}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                call
              </span>
              <span className="font-label-md text-label-md">{location.phone}</span>
            </div>
          </div>
        </div>
      </button>
      <a
        className="block w-full text-center py-4 border border-primary text-primary font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all duration-300"
        href={location.mapUrl}
        target="_blank"
        rel="noreferrer"
      >
        GET DIRECTIONS
      </a>
    </article>
  );
}
