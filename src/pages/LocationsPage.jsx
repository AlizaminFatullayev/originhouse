import { useMemo, useState } from "react";
import LocationCard from "../components/LocationCard.jsx";
import LocationModal from "../components/LocationModal.jsx";
import { cityFilters, locations } from "../data/locations.js";
import { filterLocations } from "../utils/locations.js";

export default function LocationsPage() {
  const [activeCity, setActiveCity] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);

  const visibleLocations = useMemo(
    () => filterLocations(locations, activeCity, searchTerm),
    [activeCity, searchTerm],
  );

  return (
    <main>
      <header className="pt-24 md:pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-4 block">Our Spaces</span>
            <h1 className="font-display-lg text-display-lg md:text-[80px] leading-tight">Find Your House</h1>
          </div>
          <div className="w-full md:w-96">
            <label className="sr-only" htmlFor="location-search">
              Search by city or location name
            </label>
            <div className="relative group">
              <input
                id="location-search"
                className="w-full bg-transparent border-b border-outline/30 py-3 focus:outline-none focus:border-primary transition-colors font-body-md text-body-md placeholder:text-outline/50"
                placeholder="Search by city..."
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <span className="material-symbols-outlined absolute right-0 top-3 text-outline group-focus-within:text-primary" aria-hidden="true">
                search
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-12 overflow-x-auto hide-scrollbar" aria-label="City filters">
          {cityFilters.map((city) => {
            const isActive = city === activeCity;

            return (
              <button
                key={city}
                type="button"
                className={`px-6 py-2 font-label-md text-label-md border transition-all whitespace-nowrap ${
                  isActive ? "bg-primary text-on-primary border-primary" : "bg-transparent text-secondary hover:text-primary border-outline/20"
                }`}
                aria-pressed={isActive}
                onClick={() => setActiveCity(city)}
              >
                {city === "All" ? "All Locations" : city}
              </button>
            );
          })}
        </div>
      </header>

      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap">
        {visibleLocations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-gutter">
            {visibleLocations.map((location) => (
              <LocationCard key={location.id} location={location} onSelect={setSelectedLocation} />
            ))}
          </div>
        ) : (
          <div className="py-section-gap text-center">
            <p className="font-body-lg text-body-lg text-secondary">No locations match your search.</p>
          </div>
        )}
      </section>

      <section className="w-full h-[600px] relative overflow-hidden bg-surface-container">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-margin-mobile">
          <div className="bg-surface p-10 md:p-12 shadow-2xl max-w-sm text-center">
            <h2 className="font-headline-md text-headline-md mb-4">Worldwide Provenance</h2>
            <p className="font-body-md text-body-md text-secondary mb-8">
              We curate spaces in vibrant neighborhoods, bringing the ritual of specialty coffee to modern urban life.
            </p>
            <span className="font-label-md text-label-md underline underline-offset-8 text-primary">VIEW ALL PARTNER CAFES</span>
          </div>
        </div>
        <img
          className="w-full h-full object-cover opacity-60 grayscale"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuACodN2ui3U_SexpfMWhDn8zLoPAriL_TfJHS3M3HzAipPE1t429byf7M1qNciZTXRSmtad9-E1fjrIeafC-XIvy5ECFgTu4EoxAu3fcUSRJZIOjyBiZkkKcetkBZsx6D7H1Ny6A5lTu2mez3ZlyasUs8qndLCnrsWkFWs4JzFaXZb5vKLrJn3k7avUTexJzYYS6jLAiNO9ERHLAlM9i3sEzaRSYOrmSgzuxOl7XPv2euth5eTbnOengSmjrcVzI34CASs5nPCNcqo"
          alt="Editorial map-style city texture for Origin House locations."
        />
      </section>

      <LocationModal location={selectedLocation} onClose={() => setSelectedLocation(null)} />
    </main>
  );
}
