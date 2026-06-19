const philosophyCards = [
  {
    title: "Quality Beans",
    text: "We source only Specialty Grade beans, ensuring each crop is harvested at peak ripeness and processed with precision.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAM2aexKnGrk_BTqh5GbvkmzE8_gVilWFQQczY__DVJi5sR0RmphzKLpzJR_ytya6niJtwqxX9VeUDFcN5gAGKu7LduVbn45gCkA41Sla-sCBMqPhj22-zXWX1n7IIzm83AXko2qs7JQ0DWQEZGIpCVIBv4u0yfJ5FUQFXNkG3arGe71ozkWhntE6aMRvC50VmF-vLAWHw4doQfDFYc8UgP90Hx3t4ahO2Te3S9FA9JlJIIlqSSn_wJhmMhRDNcamOKDkjqfbjdRVU",
  },
  {
    title: "Thoughtful Design",
    text: "Our spaces are minimalist, quiet, and intentional, designed to let every sense focus on the cup.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDr3v6lrHFU5l6jc9bCaGimprFocOX23s4C1FtwqdSaTlq5bO9IFA2NZPlCIOykfW05bPDWj8larDxTpXEtY20_RQBOPad3WbqVVz8sg-_EtNUGKsK9iBebFdE1T7HLUSFl4vDzHVO1kqzOENQ1Cb-XxI-jj7yWk7s-ty4aV0VYZn0v0jsRNFjVcOx9SXdPJGUm2AKAJcYuIPYJaagj47Y_RkOB3MtX526raEMSztBbpUFd5AHwZEBEmTidLCqTOGSJq-bsxe7LTb8",
  },
  {
    title: "Local Experience",
    text: "Each house honors its neighborhood, integrating local art and culture into the world of Origin House.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6oXVal69wEqLIzVJT5QZhbKSPSh3gP-Dnyps7cNN5byvEuYJEXJ-une4Qwzygd8ICjZp6Wv5n4CbYC1f53Jpz14wyQ6AGwqwpJPVFPTU3pRpBYambzMlsREQG5z-8mdEwP2Oszv03WeZJRBBriqxGbawQPXupearT_ygbuJp3TN_ifFMPrsY9etfcNuxW6qD3KusJukgi4SuN3JaoF1H0_8Zq5j_Evav7IJYY9nSysjxr_n6ZSYqjxYIQRWJwQ9UBPgsCQEgyMws",
  },
];

const galleryImages = [
  {
    className: "md:col-span-8 md:row-span-1 h-[360px] md:h-full",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQp3lBXv6P8H9I8KnlR2PQOpICOWUYxkO6ViC-o2rs3WvY5n_m8infdnnRReONqdQWR6nyVoWNpUxlbFN2zEgKw5zYhlEZ4s93dJqtImHI-MTTHhMT3H5cNPe8VoMSHEKRAVmROAfkvJYGD-J4h53pf4ecsEo1U95uUv3VXrJ0T8qWhnT2-YIsXVjjGO0rp-DGXyVeagRsc8QOes_LeDEo5c8ffLJkot9hPa-F-SrR3DxB3sMKH2ELt-SjAPAif1zqfGUmRFc68GI",
    alt: "Wide panoramic shot of a minimalist coffee bar with precise barista craft.",
  },
  {
    className: "md:col-span-4 md:row-span-2 h-[420px] md:h-full",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMLWgXP_h3uHTEob2cYlZdJEnYjBVxcGnMTEtNUQ-IVmjVGPITGKse_e7KaS4sArpSyppWWL_srIK9yFSQmkkPzRf4vEpvB9hjriBEKCY79r_NNYaYW5hXXNAD92yZmKEqXItNkPf_xvV0Yrh-W7Dm8euKbeHCbZ88weETvXSvkiz2u1GbmBXv5IRb28zcvuuMHzza-9gRcD9FFR_L1TNsagUm-86CGMfxTKoffQMDsgXSxCza4HG1Q05Je6TaIWoVGQOk7z61zKc",
    alt: "Vertical close-up of slow-drip pour-over coffee being prepared.",
  },
  {
    className: "md:col-span-4 md:row-span-1 h-[300px] md:h-full",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWExsJ9RAZltjgCshZQmORLvlwZX0V33YctGz_wetdtWGZsh6Nm7nVI8JiX9i5msdE9NDzdNen_3gVN3iVEd9S-4ODA9t7qhuJQFOpXRxjVIHi7LwK_qnN6ZrM_EwZcswiLOZcgLxZXXcidLLRsoVYMKFI_d4n8Rui8x_cK86wCBXOmtkj-pKyYmhFzP_dN0FvkNhoptQa76f9Z_Q-nOUhJ7KB9Yj8SYRvY1BeBWtKbozkOGlLYcHQfPTvxC1NWvYXuLq7-5gpcqY",
    alt: "Artisanal pastries arranged beside two small coffee cups on marble.",
  },
  {
    className: "md:col-span-4 md:row-span-1 h-[300px] md:h-full",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuALyCEeh2nNY1iA4yXmo39lX_bPfSwGAcPOEgtZuo__JCRszB74oKrPgT0IUr46kLg5-RH3PkeOiFT4XYvJlwFfc-2cYhDNU06MNkR6W4AZ8btO6SIcWm6rcG-EGa6B5AtdcripozUxLVXYehMVOPCAcQGW5Yygp01pC1wrCvuRTwk13AjX_lSU-jX2HNKg33Yx4J9lT1EHINzPu07mTc17wMs026NVfzrCc8NQWXL2qJT1v1AjdndSlNthGKiUabchodR8DMG5U14",
    alt: "Barista hands weighing coffee beans on a high-precision digital scale.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative h-[calc(100vh-80px)] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6UnnopxK3ztJE67uYpPJFvl3C8rf7jfi4Bnx6-wYVNrLXiOYa_jgR054MTxVR7mqfr3mNVE6h4muPSTNG6-tiVZVugvmsZok-2hvEwlg-awJ8JWuTztHPGAZ6_Ikvm8CHPAEgilW4VP34iMycf0mR5VzG-2OSqn_mQJY3vNFytAJ6TIokbes7JdwBPMzPc0xB3Qd44-JwobG1o_oybYxGpLNSFAIlU6z-5uZiULJKPWQbTCgZshZ_a6R1mwEwkC9O17dA507jDNE"
            alt="Barista pouring latte art into a ceramic cup with soft morning sunlight."
          />
          <div className="absolute inset-0 bg-primary/10" />
        </div>
        <div className="relative z-10 text-center max-w-3xl px-margin-mobile">
          <p className="font-label-md text-label-md text-on-primary mb-6 tracking-[0.3em] uppercase opacity-90">Est. 2014</p>
          <h1 className="font-display-lg text-display-lg md:text-[84px] text-on-primary leading-none mb-8 drop-shadow-sm">About Our Coffee House</h1>
          <div className="w-16 h-px bg-on-primary mx-auto opacity-50" />
        </div>
      </section>

      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
            <div className="md:col-span-4 mb-8 md:mb-0">
              <h2 className="font-headline-md text-headline-md text-primary md:sticky md:top-32 italic">A legacy of quiet ritual.</h2>
            </div>
            <div className="md:col-span-8 space-y-8">
              <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
                Origin House began with a singular intention: to reclaim the ritual of coffee from the rush of modern life.
              </p>
              <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
                Our journey started in a small, wood-paneled space where we spent months perfecting signature roasts that could tell stories of volcanic soils, mountain mist, and careful hands.
              </p>
              <div className="relative py-12">
                <img
                  className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3xoai9MKd7-BclT1yYS_myas8iib4xw5AGonk3et2ruEGYI2PJzqvmHUC_FYSHnbZmM4J_ELU9cVCPjF9p2zUUegN5kxhnxU-r1Fj7r7ajtOT4imTkd058NQDuBGu7qmxf_PsM5d5V5ukNL9jFEATcHCN1cXjsaZIsVK3_JPBVgZtjd0p_GNIUcXlDhjKO1lE4HsIuRCZfogvbJqKaFgGrc5HWbxv_8EQ_AmFMYzmnkRaMh_nIjHVLaOrr_CoLDolQMKBZx9DuKg"
                  alt="Artisanal coffee roasting machine in a sun-drenched industrial space."
                />
              </div>
              <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
                Today, Origin House is a sanctuary for those who appreciate precise details, from custom-thrown ceramic mugs to water temperature.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="mb-section-gap text-center">
            <span className="font-label-md text-label-md text-secondary-container bg-primary-container px-4 py-1 inline-block mb-6 uppercase tracking-widest">
              Our Pillar
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">The Philosophy of Origin</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {philosophyCards.map((card, index) => (
              <article className={`group ${index === 1 ? "md:mt-16" : ""}`} key={card.title}>
                <img className="aspect-[4/5] w-full object-cover mb-8 grayscale group-hover:grayscale-0 transition-all duration-500" src={card.image} alt={`${card.title} at Origin House`} />
                <h3 className="font-headline-md text-headline-md text-primary mb-4">{card.title}</h3>
                <p className="font-body-md text-secondary leading-relaxed">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-none md:grid-rows-2 gap-4 h-auto md:h-[1000px]">
            {galleryImages.map((image) => (
              <img key={image.src} className={`${image.className} w-full object-cover transition-transform hover:scale-[1.01] duration-700`} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-gap bg-primary-container text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div className="relative order-2 md:order-1">
            <img
              className="aspect-square w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDpMlkaZ4zgOBvi-vm_VUHzSv5TMuJdC6b_-EcNXxOQ-Sc2tyX4AZ1MlyQ5by55Wkg8yVCP2Pb2m18ZPek6g7Ud4WCYXuXpM_D8aYUF7Gazi333P9WiPvK0sl8-hMY3O7Yz0IOu5SSi36O9I_RC4RraZaFAykimMnYbEUnc85WB5Ejihkp3P3Gp0Lam4jtiosmhQ9-CrHmhmj22P3mv1dFnYTGtQE7gSeyNhh42WMJnTMZ3o8snuSOL4K8Dw9U8aLwkFBtg8_dh1w"
              alt="Lush green coffee plantation in the highlands with morning mist."
            />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-on-primary-container/20 hidden md:block" />
          </div>
          <div className="order-1 md:order-2 md:pl-12">
            <span className="font-label-md text-label-md text-on-primary-container mb-6 block tracking-widest uppercase">Ethics &amp; Earth</span>
            <h2 className="font-headline-lg text-headline-lg mb-8 leading-tight">Responsibility from Root to Cup</h2>
            <p className="font-body-lg text-body-lg text-on-primary-container/80 mb-12">
              Sustainability is not a marketing term for us; it is a prerequisite. We partner directly with farmers and use compostable packaging.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <span className="material-symbols-outlined text-4xl mb-4 text-on-primary" aria-hidden="true">
                  eco
                </span>
                <h3 className="font-headline-md text-headline-md mb-2">Compostable</h3>
                <p className="font-body-md text-on-primary-container/70">Our bags and cups are plant-based and biodegradable.</p>
              </div>
              <div>
                <span className="material-symbols-outlined text-4xl mb-4 text-on-primary" aria-hidden="true">
                  handshake
                </span>
                <h3 className="font-headline-md text-headline-md mb-2">Direct Trade</h3>
                <p className="font-body-md text-on-primary-container/70">Ensuring the prosperity of those who make our coffee possible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
