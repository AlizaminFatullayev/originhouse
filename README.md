Origin House Coffee

A premium coffee shop and coffee e-commerce front-end prototype built with React, Vite, React Router, and Tailwind CSS.

Overview

Origin House Coffee is a portfolio-ready front-end project for a modern premium coffee brand. The project combines a marketing website experience with basic e-commerce functionality, including product browsing, product detail pages, cart behavior, location discovery, and brand storytelling.

The design was based on a Stitch AI-generated visual reference and then converted into a functional React front-end while preserving the original premium coffee shop style.

Live Demo

Coming soon

Features

* Multi-page website experience
* Home, Shop, Product Detail, Locations, and About pages
* React Router navigation
* Responsive desktop and mobile layout
* Mobile drawer menu
* Product listing with category filters
* Product sorting by price and newest items
* Dynamic product detail pages
* Product thumbnail switching
* Weight selection
* Quantity controls
* Similar products section
* Cart sidebar
* Add to cart functionality
* Increase and decrease cart item quantity
* Remove items from cart
* Cart subtotal calculation
* Empty cart state
* Cart persistence with localStorage
* Demo checkout modal
* Location search
* City-based location filters
* Location detail modal
* External directions links
* Static product and location data
* Tailwind CSS theme based on a premium coffee brand style

Tech Stack

* React
* Vite
* React Router
* Tailwind CSS
* Context API
* localStorage

Pages

Home

The landing page introduces the coffee brand with a premium hero section, featured products, brand experience content, location previews, and footer navigation.

Shop

The shop page displays coffee products in a responsive grid with filtering, sorting, product cards, and add-to-cart actions.

Product Detail

The product detail page includes dynamic product information, image thumbnails, taste notes, origin, roast level, process, weight selection, quantity controls, and similar products.

Locations

The locations page allows users to search and filter coffee shop locations by city. Each location includes detailed information and an external directions link.

About

The about page presents the brand story, coffee philosophy, image gallery, and sustainability-focused content.

Installation

npm install
npm run dev

Build

npm run build
npm run preview

Project Structure

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

Notes

* This project is a front-end prototype only.
* There is no backend.
* There is no real payment integration.
* Checkout is displayed as a demo modal.
* Product and location data are stored as static front-end data.
* reference/design-reference.html is kept as the original visual design reference and should not be modified.

Future Improvements

* Add backend API integration
* Add authentication
* Add real checkout and payment functionality
* Add admin dashboard for managing products and locations
* Add CMS integration for brand content
* Add advanced animations and page transitions
* Add unit and component tests

Author

Created by Alizamin Fatullayev as a front-end portfolio project.