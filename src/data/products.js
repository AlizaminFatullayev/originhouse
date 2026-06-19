const sharedGallery = [
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

export const products = [
  {
    id: 1,
    slug: "ethiopia-yirgacheffe",
    name: "Ethiopia Yirgacheffe",
    shortName: "Ethiopia Sidamo",
    category: "Filter Coffee",
    price: 24,
    isFeatured: true,
    isNewest: true,
    eyebrow: "Single Origin - Ethiopia",
    processLabel: "Heirloom - Washed",
    description: "A delicate profile with complex floral notes and a crisp, tea-like finish.",
    detailDescription:
      "An exceptional expression of high-altitude heirloom varieties from the Gedeo zone, washed for clarity and floral complexity.",
    tasteNotes: ["Jasmine", "Bergamot", "Honey"],
    origin: "Gedeo Zone, 2000masl",
    roast: "Light - Medium",
    process: "Washed, Sun-dried",
    weightOptions: ["250g", "500g", "1kg"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCe2RdC8dFWRCTdViheRKvPJwzkRnVatejFraGwV9Ta_3DmIiOxEpC2RgLa4v6HEjbxUeuaFVRSdMug1utiAb76KytNikYb8EakOyN-ygvf8ITTUwpt-e-s3fgGDEYzN8Xtdwkmak4DdPLuNl8Y6BIQX-XntZqwkadQjNvMPxb9sYXuFwAZ-7dFhp9tbUy1OTk7pBdxyWkpYdZZCq_oOh910-jsWOyHWwSfwxj2RkHsNl4u4EcpxopXpzGAnQNprwd8EZMbbZUor8g",
    imageAlt: "Premium Ethiopia Yirgacheffe coffee bag on a minimalist counter.",
    gallery: sharedGallery,
    story:
      "Yirgacheffe is synonymous with floral-noted coffees. This lot comes from a washing station committed to regenerative agricultural practices and careful hand sorting.",
    storyImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDAwwW5Cts1Bg1f9bHo0nRFXgk_3qUwGWT2TFYSJ70vAw4yX9iwp2NUxgtuiRgmoPI_NiRTBDrH3s8Ko3NberdDs1vFzENSjChy7sioxks7tJlroQ-PdFcB5XepqbIrUBajlQt0oyjp1KuGhVa93p-yb5dAhwNXJIw8O1TS-2kmUo-VVriRT21cYAVkPaBILUZJsYhpg0hckIpCsdWa5ukaHLCxYCdBf8rSmCDKUAi9I_Er0KMSXh5naT7bVzwihzcBYMp-VkDVqco",
    storyImageAlt: "Rolling coffee plantations in Ethiopia during golden hour.",
    brewing: {
      method: "Hario V60 or Kalita Wave for maximum floral extraction.",
      ratio: "1:16 ratio. 20g of coffee to 320ml of water at 94 C.",
      time: "Aim for a total draw-down time of 3:00 to 3:30 minutes.",
    },
    similarProductSlugs: ["kenya-aa", "colombia-supremo", "house-espresso"],
  },
  {
    id: 2,
    slug: "colombia-supremo",
    name: "Colombia Supremo",
    category: "Filter Coffee",
    price: 22,
    isFeatured: true,
    isNewest: true,
    eyebrow: "Seasonal Blend - Colombia",
    processLabel: "Caturra - Natural",
    description: "Rich and full-bodied with a deep chocolate base and hints of dark berry fruitiness.",
    detailDescription: "A layered Colombian cup with rounded sweetness, polished acidity, and a structured cocoa finish.",
    tasteNotes: ["Dark Cocoa", "Blackberry", "Brown Sugar"],
    origin: "Huila, Colombia",
    roast: "Medium",
    process: "Natural",
    weightOptions: ["250g", "500g", "1kg"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAiK0QJpHdVd4yJKbMLDYXrCq1opjPR-B05Ohtn-Ny0G1sdhF4Pf2VbAxFmSpKwZAYb-turEs0IzqyJwkb3IDHTI0r7kXYX7j7Au5wrI2d6k3cvd5mhp_eJd5QyKhA33Nqyev0MZBOrtpArr1UN__5ZLCcT_eUx1GuQ7zw5Wyx1B91vJO5rRVlPkwEYppQbG9iqFuMTWRoaIY8oaOVsIwat5z4cYm8bHhGBIBocSg7ptayX2odEnsXxrQmAb5cWAL9xZ0TnTsVN9FE",
    imageAlt: "Colombia Supremo coffee beans spilling from a white minimalist bag.",
    gallery: sharedGallery,
    story:
      "This lot is built around sweetness and texture, selected for brewers who want an approachable but expressive everyday cup.",
    storyImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDAwwW5Cts1Bg1f9bHo0nRFXgk_3qUwGWT2TFYSJ70vAw4yX9iwp2NUxgtuiRgmoPI_NiRTBDrH3s8Ko3NberdDs1vFzENSjChy7sioxks7tJlroQ-PdFcB5XepqbIrUBajlQt0oyjp1KuGhVa93p-yb5dAhwNXJIw8O1TS-2kmUo-VVriRT21cYAVkPaBILUZJsYhpg0hckIpCsdWa5ukaHLCxYCdBf8rSmCDKUAi9I_Er0KMSXh5naT7bVzwihzcBYMp-VkDVqco",
    storyImageAlt: "Coffee growing landscape during golden hour.",
    brewing: {
      method: "Flat-bottom dripper or batch brew.",
      ratio: "1:15.5 ratio for a rounded, sweet profile.",
      time: "Target 3:15 to 3:45 minutes.",
    },
    similarProductSlugs: ["ethiopia-yirgacheffe", "kenya-aa", "peru-decaf"],
  },
  {
    id: 3,
    slug: "house-espresso",
    name: "House Espresso",
    category: "Espresso",
    price: 20,
    isFeatured: true,
    isNewest: true,
    eyebrow: "Origin House Signature",
    processLabel: "Brazil / Colombia - Washed",
    description: "Our flagship blend designed for perfect clarity and a syrupy mouthfeel in milk.",
    detailDescription: "A balanced espresso blend created for daily brewing, with caramel sweetness and a polished finish.",
    tasteNotes: ["Caramel", "Toasted Nut", "Milk Chocolate"],
    origin: "Brazil / Colombia",
    roast: "Medium",
    process: "Washed / Natural",
    weightOptions: ["250g", "500g", "1kg"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGZBjdMWSFhEQf_qVUGpr5eIt4hO6BW-UPNvqGcl5TGlGsOANQ6qEeJDOeFlkaipwlwDXnj7VT8pNmj3OUWX4hGxNzw9S8Sp31J8Tk5NzQl3ntGmriM6kpCmyjodu1s7eeyDEhKjOk_-HSFNQUt5MRqZ9Xcv4LrnmYLoOlW92OcZsSB-K5kt8VTnIxQ8c1L5vDQro8xfH4bvj_P7sD8jalA1SjC1KLNYl7YbJjLO_atjWmUpWy7vTYEOe0Pdg8F094J4efGESnCnM",
    imageAlt: "House Espresso coffee beside professional barista tools.",
    gallery: sharedGallery,
    story:
      "House Espresso anchors the Origin House bar program, calibrated for clarity as a straight shot and warmth through milk.",
    storyImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDAwwW5Cts1Bg1f9bHo0nRFXgk_3qUwGWT2TFYSJ70vAw4yX9iwp2NUxgtuiRgmoPI_NiRTBDrH3s8Ko3NberdDs1vFzENSjChy7sioxks7tJlroQ-PdFcB5XepqbIrUBajlQt0oyjp1KuGhVa93p-yb5dAhwNXJIw8O1TS-2kmUo-VVriRT21cYAVkPaBILUZJsYhpg0hckIpCsdWa5ukaHLCxYCdBf8rSmCDKUAi9I_Er0KMSXh5naT7bVzwihzcBYMp-VkDVqco",
    storyImageAlt: "Coffee origin landscape with warm light.",
    brewing: {
      method: "Espresso, moka pot, or automatic brewer.",
      ratio: "1:2 espresso ratio, 19g in and 38g out.",
      time: "Pull between 27 and 31 seconds.",
    },
    similarProductSlugs: ["colombia-supremo", "ethiopia-yirgacheffe", "peru-decaf"],
  },
  {
    id: 4,
    slug: "peru-decaf",
    name: "Peru Decaf",
    category: "Decaf",
    price: 26,
    isFeatured: false,
    isNewest: false,
    eyebrow: "Single Origin - Peru",
    processLabel: "Swiss Water Process",
    description: "Exceptional flavor without the caffeine. Balanced sweetness with a clean citrus finish.",
    detailDescription: "A decaf coffee that keeps the ritual intact with molasses sweetness, citrus lift, and a clean finish.",
    tasteNotes: ["Sweet Orange", "Molasses", "Cocoa"],
    origin: "Cajamarca, Peru",
    roast: "Medium",
    process: "Swiss Water",
    weightOptions: ["250g", "500g", "1kg"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATetBrR9Tw6gCfZ2mDF1gQTDxvRo4AFUmCkgrD-trd_-W3XN4-TMhFeh4jQQnYcTfR-XRLHIQ8reP_BInC84e1Fbf1zusmWjl1sPPmnsE3dnBo7JpY1dfZrXf3cTDIKGw5raAlybRXoRUVumxXhuY2a4-arjCK0KgOhaioN388FayMQTR-RfIH4NHA3aVbiH-m-IgcieCOchgMpdm3v4DIk6aMCe0KQMnQf2z6rVyeyO5pln2YobBJTwaSupUUTjQ6VbqB5025whI",
    imageAlt: "Pour-over carafe with steam and Peru Decaf coffee bag.",
    gallery: sharedGallery,
    story: "Careful decaffeination preserves sweetness and structure, giving a quiet evening cup with full specialty character.",
    storyImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDAwwW5Cts1Bg1f9bHo0nRFXgk_3qUwGWT2TFYSJ70vAw4yX9iwp2NUxgtuiRgmoPI_NiRTBDrH3s8Ko3NberdDs1vFzENSjChy7sioxks7tJlroQ-PdFcB5XepqbIrUBajlQt0oyjp1KuGhVa93p-yb5dAhwNXJIw8O1TS-2kmUo-VVriRT21cYAVkPaBILUZJsYhpg0hckIpCsdWa5ukaHLCxYCdBf8rSmCDKUAi9I_Er0KMSXh5naT7bVzwihzcBYMp-VkDVqco",
    storyImageAlt: "Coffee origin landscape with warm light.",
    brewing: {
      method: "French press or pour-over.",
      ratio: "1:15 for a rounder cup.",
      time: "Brew for 3:30 to 4:00 minutes.",
    },
    similarProductSlugs: ["house-espresso", "colombia-supremo", "kenya-aa"],
  },
  {
    id: 5,
    slug: "kenya-aa",
    name: "Kenya AA",
    category: "Filter Coffee",
    price: 28,
    isFeatured: false,
    isNewest: false,
    eyebrow: "Single Origin - Kenya",
    processLabel: "SL28/SL34 - Washed",
    description: "Explosive acidity and vibrant fruit-forward notes characteristic of Kenyan peaks.",
    detailDescription: "A vivid washed Kenya with a precise red-fruit profile, structured acidity, and a long citrus finish.",
    tasteNotes: ["Red Currant", "Grapefruit", "Black Tea"],
    origin: "Nyeri, Kenya",
    roast: "Light",
    process: "Washed",
    weightOptions: ["250g", "500g", "1kg"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTeF-8y8-rZ8meZSP6XtVEg7OifX8A-OX5_JVUb7JJhxNW74vcvyMCzvujDtZ49isHTlqdsJ3kYaGNi4DR52gkUpev2vtpTDCjtmXjN60k5UDbWx340jflH6GfLARRTjaOpK4qERYZ-ik-kAmpraUzw-MIKAo7ozg6p4fQ15ckhbtLHCrnUXttYcJnPLAVQbuS2sV3BJqUtLppD1uSXXWGX_izJyJhYj-fpafBrIrZ5jJ7s2nQkfASA5-nAWPSOt7VZCjuqL-ZtOE",
    imageAlt: "Green and roasted coffee beans on linen fabric.",
    gallery: sharedGallery,
    story: "Kenya AA highlights the energy of high-elevation lots selected for intensity, clarity, and refined structure.",
    storyImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDAwwW5Cts1Bg1f9bHo0nRFXgk_3qUwGWT2TFYSJ70vAw4yX9iwp2NUxgtuiRgmoPI_NiRTBDrH3s8Ko3NberdDs1vFzENSjChy7sioxks7tJlroQ-PdFcB5XepqbIrUBajlQt0oyjp1KuGhVa93p-yb5dAhwNXJIw8O1TS-2kmUo-VVriRT21cYAVkPaBILUZJsYhpg0hckIpCsdWa5ukaHLCxYCdBf8rSmCDKUAi9I_Er0KMSXh5naT7bVzwihzcBYMp-VkDVqco",
    storyImageAlt: "Coffee origin landscape with warm light.",
    brewing: {
      method: "Pour-over with a slightly coarser grind.",
      ratio: "1:16.5 to open the acidity.",
      time: "Target 3:00 to 3:20 minutes.",
    },
    similarProductSlugs: ["ethiopia-yirgacheffe", "colombia-supremo", "peru-decaf"],
  },
  {
    id: 6,
    slug: "stagg-ekg-kettle",
    name: "Stagg EKG Kettle",
    category: "Equipment",
    price: 165,
    isFeatured: false,
    isNewest: false,
    eyebrow: "Equipment - Matte Black",
    processLabel: "Precision Pour-Over",
    description: "The ultimate pour-over companion with variable temperature control and a precise spout.",
    detailDescription: "A temperature-controlled kettle designed for repeatable brewing and elegant counter presence.",
    tasteNotes: ["Precision", "PID Control", "Matte Black"],
    origin: "Designed for Origin House bar service",
    roast: "Equipment",
    process: "Variable temperature control",
    weightOptions: ["Matte Black", "Warm White", "Studio Silver"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADbOhpDExvqUmVsvhUbTvSozxQcUidipLhu2HD7eQMf_iBzTOgN0lxzlwEcMKr0Hq1EGfFTIRVyEHzqdZhwSnGh0vr6wNpFlJGUwikNv1XQpRpxAMnZbFEPhk6877HjRJc2HhHKWpWteN_3UAQVVcxDJrVv_NmKOPI1RpeADqWgu7oud3pQBUc3ePXowm_BQrfdy2kZhqPSDour6y_YvkZrj6F_uqtJV53EaxtTuIcXi4lnUksKB3xD73zEH5Pn_FpkFsqYyKfFl8",
    imageAlt: "Matte black gooseneck kettle and burr grinder on a minimalist shelf.",
    gallery: sharedGallery,
    story: "The kettle used across our brew bars brings control and pace to the pour-over ritual.",
    storyImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDAwwW5Cts1Bg1f9bHo0nRFXgk_3qUwGWT2TFYSJ70vAw4yX9iwp2NUxgtuiRgmoPI_NiRTBDrH3s8Ko3NberdDs1vFzENSjChy7sioxks7tJlroQ-PdFcB5XepqbIrUBajlQt0oyjp1KuGhVa93p-yb5dAhwNXJIw8O1TS-2kmUo-VVriRT21cYAVkPaBILUZJsYhpg0hckIpCsdWa5ukaHLCxYCdBf8rSmCDKUAi9I_Er0KMSXh5naT7bVzwihzcBYMp-VkDVqco",
    storyImageAlt: "Coffee origin landscape with warm light.",
    brewing: {
      method: "Use with pour-over, immersion, and tea service.",
      ratio: "Hold target temperature for consistent extraction.",
      time: "Built-in hold mode supports longer brew sessions.",
    },
    similarProductSlugs: ["ethiopia-yirgacheffe", "house-espresso", "kenya-aa"],
  },
];

export const productCategories = ["All", "Espresso", "Filter Coffee", "Decaf", "Equipment"];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

export function getSimilarProducts(product) {
  return product.similarProductSlugs
    .map((slug) => getProductBySlug(slug))
    .filter(Boolean);
}
