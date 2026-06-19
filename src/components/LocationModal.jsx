export default function LocationModal({ location, onClose }) {
  if (!location) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-margin-mobile" role="dialog" aria-modal="true" aria-labelledby="location-modal-title">
      <button type="button" className="absolute inset-0 bg-primary/50 backdrop-blur-sm" aria-label="Close location details" onClick={onClose} />
      <div className="relative bg-surface w-full max-w-3xl max-h-[90vh] overflow-y-auto editorial-shadow">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-[4/5] md:aspect-auto bg-surface-container">
            <img className="w-full h-full object-cover" src={location.image} alt={location.imageAlt} />
          </div>
          <div className="p-8 md:p-10">
            <div className="flex justify-between items-start gap-6 mb-8">
              <div>
                <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-3">{location.city}</p>
                <h2 id="location-modal-title" className="font-headline-md text-headline-md text-primary">
                  {location.name}
                </h2>
              </div>
              <button type="button" className="text-primary hover:rotate-90 transition-transform duration-300" onClick={onClose} aria-label="Close location details">
                <span className="material-symbols-outlined" aria-hidden="true">
                  close
                </span>
              </button>
            </div>
            <p className="font-body-md text-secondary leading-relaxed mb-8">{location.description}</p>
            <div className="space-y-4 mb-8">
              <div>
                <span className="font-label-md text-label-md text-outline block mb-1">ADDRESS</span>
                <p className="font-body-md text-primary">{location.address}</p>
              </div>
              <div>
                <span className="font-label-md text-label-md text-outline block mb-1">OPENING HOURS</span>
                <p className="font-body-md text-primary">{location.openingHours}</p>
              </div>
              <div>
                <span className="font-label-md text-label-md text-outline block mb-1">PHONE</span>
                <p className="font-body-md text-primary">{location.phone}</p>
              </div>
            </div>
            <div className="mb-10">
              <span className="font-label-md text-label-md text-outline block mb-4">AVAILABLE SERVICES</span>
              <div className="flex flex-wrap gap-2">
                {location.services.map((service) => (
                  <span key={service} className="px-3 py-2 bg-tertiary-fixed text-on-tertiary-container font-label-md text-[10px] uppercase tracking-wider">
                    {service}
                  </span>
                ))}
              </div>
            </div>
            <a
              className="block w-full text-center bg-primary-container text-on-primary py-5 font-label-md text-label-md tracking-widest uppercase hover:opacity-90 transition-opacity"
              href={location.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
