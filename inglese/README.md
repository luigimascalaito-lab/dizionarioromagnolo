# Poetic Dictionary English ⇄ Romagnolo — installable app

Upload the `en/` folder next to the Italian edition (e.g. in the GitHub Pages repository `dizionario`, so that it is served at `.../inglese/`). Its files:

- `index.html` (data embedded)
- `dizionario_en.json` (optional: the app falls back on the embedded copy)
- `manifest.webmanifest`
- `sw.js` (its own scope, `./en/`: it does not interfere with the Italian edition)
- `icons/`

## Installation
- **Android/Chrome, desktop Chrome/Edge:** the “Install the app” button appears in the header (or the install icon in the address bar).
- **iPhone/iPad (Safari):** Share → Add to Home Screen (the app shows a reminder).

Installation requires HTTPS (GitHub Pages is fine) or `localhost`; opened from `file://` the app works but cannot be installed.

## Deep links
`#en/word` looks up an English word, `#rom/word` a Romagnolo one (e.g. `.../en/#en/to%20rain`).

## Updates
Network first, cache as a fallback. Change `VERSIONE` in `sw.js` with every new edition to renew the cache.
