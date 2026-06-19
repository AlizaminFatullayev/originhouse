# Origin House Coffee

Premium coffee shop and coffee e-commerce front-end prototype built from the Stitch AI design reference.

## Overview

Origin House Coffee is a portfolio-ready React front-end for a premium coffee brand. It includes a responsive marketing and commerce experience with product browsing, product details, cart behavior, location discovery, and brand storytelling.

## Features

- Home, Shop, Product Detail, Locations, and About pages
- React Router page navigation
- Responsive navbar and mobile drawer menu
- Product cards, category filters, and sort dropdown
- Dynamic product detail pages with thumbnail switching, weight selection, quantity controls, and similar products
- Cart sidebar with quantity controls, remove actions, subtotal, empty state, and localStorage persistence
- Demo checkout modal with prototype payment notice
- Location search, city filters, detail modal, and external directions links
- Tailwind theme aligned with the original premium coffee shop design

## Tech Stack

- React
- Vite
- React Router
- Tailwind CSS
- Context API for cart state
- localStorage for cart persistence

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://127.0.0.1:5173/
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/
  context/
  data/
  pages/
  utils/
reference/
  design-reference.html
memory-bank/
  projectContext.md
```

## Notes

- This is a front-end prototype only.
- There is no backend.
- Payment is not available.
- Product and location data are static front-end data files.
- `reference/design-reference.html` is preserved as the visual source of truth and should not be modified.
