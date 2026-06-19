const locations = [
  {
    name: "Mayfair House",
    city: "London",
    address: "14 Mount St, Mayfair, London W1K 3AS, UK",
    hours: "08:00 - 19:00 Daily",
    phone: "+44 20 7499 0000",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxPkXnh_lImRzaoABucXN3nFnARrUPQP4kfiNju9zVEQ84ABughuZH3nva-l3Q42fl_lJB16eR0TRKgvx0Ytm7_5R8zbIZ3ja5kGyhSuXpJisahVaEVazLTfUzj0UlWjfONtCicX2cIZWQ0afnBqG6efuFou3AKsVH3bwQacnLIiERue8bgsAkZcwYdd70RPzQhTAW6X1rQCa023HZ4Zn8Q5kwwu4SmN-TVs7KWcZJCB6bjNyWGQBhsNq6XfMoCXP4OtZFy6Qb9yk",
  },
  {
    name: "West Village",
    city: "New York",
    address: "123 Perry St, New York, NY 10014",
    hours: "07:00 - 18:00 Daily",
    phone: "+1 212 555 0199",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVok-qQDEJgoBnVZJIG1C5Y4E8apoafMDqTVDU0Gd_ZPuqV11WmZ7-ObjAe4EucN-Gn_WRQ89lr2u20qQlRUO8LIj7tZcFozCl7NMBo3zI-K6MceXki1dGNZzuMewmDmXlEYb2BeQa0vX1Y81SRxyzrPSWrMIj2qrYsil0q2DKkeH4cGyCy3w1LcWpj6LeBCIpLXAffWnpycOS3dcRBcMWOpDZK0Pxuo4HDAqYdZGv8wdR6La_csBINhPRrl_N5LkRKtSFc_ctG48",
  },
  {
    name: "D3 Sanctuary",
    city: "Dubai",
    address: "Building 7, Dubai Design District, Dubai, UAE",
    hours: "09:00 - 22:00 Daily",
    phone: "+971 4 555 1234",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfX0Bwlb0eC9dZnblP3XFzkahgVwRoISgvcyBmVIHWgyhIWpCSwKjezM_zhDGZMHVP6DrLkMVX1XQ_jto0xi1qUoATFI-gH7daKtgjgZ1PYNE0QNHZFg3RRty0oXlNLxA-KVgxqb61iMOTQBnDugMOrX4FjdxTBT0NCqtwMpGGNFqh7Oy_bpL3uwJOt3S1mS1sLnaSUqDb6TPqoeTuattPLJHrGmSrnzbEIjsKxb_FeApiywdZj4hGHx_Szm4QlpMWUkdxJ_0mHko",
  },
];

const cities = ["All", "London", "New York", "Dubai"];

export default function LocationsPage() {
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
              Search by city
            </label>
            <div className="relative group">
              <input
                id="location-search"
                className="w-full bg-transparent border-b border-outline/30 py-3 focus:outline-none focus:border-primary transition-colors font-body-md text-body-md placeholder:text-outline/50"
                placeholder="Search by city..."
                type="text"
              />
              <span className="material-symbols-outlined absolute right-0 top-3 text-outline group-focus-within:text-primary" aria-hidden="true">
                search
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-12 overflow-x-auto hide-scrollbar" aria-label="City filters">
          {cities.map((city, index) => (
            <button
              key={city}
              type="button"
              className={`px-6 py-2 font-label-md text-label-md border transition-all whitespace-nowrap ${
                index === 0 ? "bg-primary text-on-primary border-primary" : "bg-transparent text-secondary hover:text-primary border-outline/20"
              }`}
            >
              {city === "All" ? "All Locations" : city}
            </button>
          ))}
        </div>
      </header>

      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-gutter">
          {locations.map((location) => (
            <article className="group cursor-pointer" key={location.name}>
              <div className="relative overflow-hidden aspect-[4/5] mb-8">
                <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" src={location.image} alt={`${location.name} interior`} />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h2 className="font-headline-md text-headline-md">{location.name}</h2>
                  <span className="font-label-md text-label-md text-secondary border border-outline/20 px-3 py-1 whitespace-nowrap">{location.city}</span>
                </div>
                <p className="font-body-md text-body-md text-secondary mb-6 leading-relaxed">{location.address}</p>
                <div className="space-y-2 mb-8 text-outline">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      schedule
                    </span>
                    <span className="font-label-md text-label-md">{location.hours}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      call
                    </span>
                    <span className="font-label-md text-label-md">{location.phone}</span>
                  </div>
                </div>
                <button type="button" className="w-full py-4 border border-primary text-primary font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all duration-300">
                  GET DIRECTIONS
                </button>
              </div>
            </article>
          ))}
        </div>
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
    </main>
  );
}
