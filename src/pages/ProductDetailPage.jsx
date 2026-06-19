import { Link, useParams } from "react-router-dom";

const thumbnails = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5x33yK7AQopc3TDobgrpPcdr_zsivCYqnB3avxaBPqENlrUs2lcaKcVvTqMtAAJzak0myKaHTgNUaF-2ui531M8EvCAhhNMo58dD0BYQoJGOMxmu2gL7-J8LSvz0hCS3hlLFe-C3lmuZN3ESh2vjROBN0qtCSMpV-OGEX5VWIj44qpc_H74wMALWSqNCtIAZHMio0tgx5ZsoSiQ-KLP8wMTyC-LTOjuW1_L2v6bRy1ZPfrvRmwc_dJjvAariOCdmjeNrK_7U5SY0",
    alt: "Matte espresso-colored coffee bag in a high-end studio setting.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAi3caoF7SWJKaPsaLzu7HYjmAkdEw121FUFInjBkPFt9anuSG0hB0yaSmxw1ZYOSg8x6QQc4IKbCKmUDEviAEmHv-L6FrGU8eKX4evV0R0JhjWwrG9BI9-I1kUSvmWIIzNXUkqyU_58ThpZWNWv_fDoQVi_kgLXPp67L0tYYhZ1V2L47mtKA70ZpjJL5P1dMMW3jly9jPwQcQEL41UgFtAATdWrFsdiu0QpEAYO0RBDoaSeVxe185eADH57y8HBFtZpV-4ENXWgeA",
    alt: "Macro shot of roasted specialty coffee beans on dark ceramic.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHGRMq7eHGjXF6i-djSVUHAduXuLjrA6cM1XSOhV9LZRTyP_du4KFaXPo9oy1TPU4W4NcOj7YiNaQmZhqTGlDulRdM-x6aLkqphCLG1iIl2dYJXi49hZZtexoDYuSkfB2fO0mwTqVavxiE_6_b4xF86OW_xHNKPymyCYs60REv3ifdohSDofXuahrxebupwM-4dMX0EzGs85i7KOEjcMxJTwzUxPOFPYe6SUTiH-nPtoo64enQB50tR-J1vqlU0Hby96R6gyUuoHM",
    alt: "Minimalist hand-pour coffee setup in a modern cafe.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm1y7O7Ds16eoRHrTEWGyL30zZraXklmWOpHWEyRdl8N4FfEzgqkGwkE5VbVnb2N2FjRww_r_1cLVlsxwIc6nxQddVxykquuZLhXOS8yXOCq2XZ7ARiUv5X2FmO58PQ2_GfMkwiuwQ3XoIh1glLIrWfEwE3DdZSufKFTZTkr-DinWk797phuV-L4pAgEaoOILl9hiYY1JuzADpnncX0YOQBM2fgbdTBc-v4HXgDZPVi1bhurDj0FJzSPnxLwUP4ePUInCBXb0iNf0",
    alt: "Top-down view of a white ceramic coffee cup filled with dark coffee.",
  },
];

export default function ProductDetailPage() {
  const { productId } = useParams();
  const title = productId === "house-espresso" ? "HOUSE ESPRESSO" : "ETHIOPIA YIRGACHEFFE";

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
      <nav className="mb-12 flex flex-wrap gap-4 font-label-md text-label-md text-on-secondary-container" aria-label="Breadcrumb">
        <Link className="hover:text-primary transition-colors" to="/shop">
          Shop
        </Link>
        <span>/</span>
        <span className="text-primary opacity-60">{title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="aspect-[4/5] bg-surface-container-low overflow-hidden">
            <img className="w-full h-full object-cover" src={thumbnails[0].src} alt={thumbnails[0].alt} />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {thumbnails.map((thumbnail, index) => (
              <button
                key={thumbnail.src}
                type="button"
                className={`aspect-square bg-surface-container border-2 transition-all ${index === 0 ? "border-primary" : "border-transparent"}`}
                aria-label={`View product image ${index + 1}`}
              >
                <img className="w-full h-full object-cover opacity-80 hover:opacity-100" src={thumbnail.src} alt={thumbnail.alt} />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-10">
          <header className="space-y-4">
            <p className="font-label-md text-label-md uppercase tracking-widest text-outline">Single Origin - Africa</p>
            <h1 className="font-headline-lg text-headline-lg text-primary leading-tight">{title}</h1>
            <p className="font-headline-md text-headline-md text-primary">$28.00</p>
          </header>
          <div className="space-y-6">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              An exceptional expression of high-altitude heirloom varieties from the Gedeo zone, washed for clarity and floral complexity.
            </p>
            <div className="grid grid-cols-2 gap-y-6 pt-6 border-t border-outline/20">
              <div>
                <span className="font-label-md text-label-md text-outline block mb-1">TASTE NOTES</span>
                <span className="font-body-md text-body-md text-primary">Jasmine, Peach, Bergamot</span>
              </div>
              <div>
                <span className="font-label-md text-label-md text-outline block mb-1">ROAST LEVEL</span>
                <span className="font-body-md text-body-md text-primary">Light - Medium</span>
              </div>
              <div>
                <span className="font-label-md text-label-md text-outline block mb-1">ORIGIN</span>
                <span className="font-body-md text-body-md text-primary">Gedeo Zone, 2000masl</span>
              </div>
              <div>
                <span className="font-label-md text-label-md text-outline block mb-1">PROCESS</span>
                <span className="font-body-md text-body-md text-primary">Washed, Sun-dried</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <span className="font-label-md text-label-md text-outline block mb-4 uppercase tracking-widest">Weight Selection</span>
              <div className="flex flex-wrap gap-3">
                {["250G", "500G", "1KG"].map((weight, index) => (
                  <button
                    key={weight}
                    type="button"
                    className={`px-6 py-3 border font-label-md text-label-md transition-all ${
                      index === 0 ? "border-primary text-primary" : "border-outline/30 text-secondary hover:border-primary hover:text-primary"
                    }`}
                  >
                    {weight}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="font-label-md text-label-md text-outline block mb-4 uppercase tracking-widest">Quantity</span>
              <div className="flex items-center border border-outline/30 w-fit">
                <button type="button" className="px-4 py-3 text-secondary hover:text-primary transition-colors" aria-label="Decrease quantity">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    remove
                  </span>
                </button>
                <span className="px-6 py-3 font-label-md text-label-md text-primary">01</span>
                <button type="button" className="px-4 py-3 text-secondary hover:text-primary transition-colors" aria-label="Increase quantity">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    add
                  </span>
                </button>
              </div>
            </div>
          </div>
          <button type="button" className="w-full bg-primary-container text-on-primary py-5 font-label-md text-label-md tracking-widest uppercase hover:opacity-90 transition-all active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>

      <section className="mt-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-5 space-y-8">
          <h2 className="font-headline-lg text-headline-lg text-primary">THE PRODUCT STORY</h2>
          <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            <p>
              Yirgacheffe is synonymous with floral-noted coffees. This lot comes from a washing station committed to regenerative agricultural practices.
            </p>
            <p>
              Every bean is hand-sorted and slow-dried on raised beds, preserving the delicate organic acids that give this coffee its clarity.
            </p>
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <div className="aspect-video bg-surface-container-low overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAwwW5Cts1Bg1f9bHo0nRFXgk_3qUwGWT2TFYSJ70vAw4yX9iwp2NUxgtuiRgmoPI_NiRTBDrH3s8Ko3NberdDs1vFzENSjChy7sioxks7tJlroQ-PdFcB5XepqbIrUBajlQt0oyjp1KuGhVa93p-yb5dAhwNXJIw8O1TS-2kmUo-VVriRT21cYAVkPaBILUZJsYhpg0hckIpCsdWa5ukaHLCxYCdBf8rSmCDKUAi9I_Er0KMSXh5naT7bVzwihzcBYMp-VkDVqco"
              alt="Rolling coffee plantations in Ethiopia during golden hour."
            />
          </div>
        </div>
      </section>

      <section className="mt-section-gap bg-secondary-container p-margin-mobile md:p-margin-desktop">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <header className="space-y-4">
            <span className="font-label-md text-label-md text-on-secondary-container uppercase tracking-[0.2em]">Crafting the perfect cup</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">BREWING RECOMMENDATION</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left pt-12 border-t border-outline/10">
            {[
              ["coffee_maker", "METHOD", "Hario V60 or Kalita Wave for maximum floral extraction."],
              ["water_drop", "RATIO", "1:16 ratio. 20g of coffee to 320ml of water at 94C."],
              ["timer", "TIME", "Aim for a total draw-down time of 3:00 to 3:30 minutes."],
            ].map(([icon, label, text]) => (
              <div className="space-y-4" key={label}>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">
                    {icon}
                  </span>
                  <span className="font-label-md text-label-md text-primary uppercase font-bold">{label}</span>
                </div>
                <p className="font-body-md text-body-md text-on-secondary-container">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
