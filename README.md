# CaVino Website

Hebrew landing page for CaVino, hosted with GitHub Pages.

Public URL: https://rnd247.github.io/cavino/

## What It Includes

- A short Hebrew explanation of the game
- Core game visual: the CaVino play mat
- Waitlist form for collecting early interest
- Mobile-friendly static website for GitHub Pages
- Google Sheet for collected leads:
  https://docs.google.com/spreadsheets/d/1m2BAGVi_ulpXVZvRJcAyAXG4udm2g7Jc9ld86Sj9NSU/edit

## Files

- `index.html` - page content and waitlist form
- `styles.css` - responsive visual design
- `script.js` - smooth scrolling and post-signup message
- `assets/playmat.jpg` - optimized play mat image
- `google-apps-script/Code.gs` - Google Apps Script receiver for waitlist submissions

## Waitlist Setup

The waitlist form submits to the `CaVino Waitlist Receiver` Google Apps Script
web app, which appends new rows to the `CaVino Waitlist Leads` spreadsheet.

Web App URL:
https://script.google.com/macros/s/AKfycbxOgAzszRbEsrozb5zLsXzvnSIbQrCUPoHqlWx7zVAYYYBUeuyL-yJnHIeO3-vxSDT-/exec
