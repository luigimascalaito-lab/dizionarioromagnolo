# Dizionario Romagnolo — portale

Struttura del repository (GitHub Pages, dominio `dizionarioromagnolo.it`):

- `index.html` — home del portale, con ricerca rapida (italiano / English)
- `CNAME` — dominio personalizzato; `.nojekyll` — pubblica i file così come sono; `404.html`
- `dizionario/` — dizionario poetico italiano ⇄ romagnolo (app installabile, `dizionario.json`)
- `inglese/` — dizionario inglese ⇄ romagnolo (app installabile con ambito proprio)
- `rime/` — segnaposto del dizionario delle rime
- `berti/` — segnaposto del dizionario di Enrico Berti (copiarvi l’app)

## Pubblicazione
1. Crea il repository e carica tutto il contenuto di questa cartella.
2. Settings → Pages: ramo `main`, cartella `/ (root)`; in «Custom domain» scrivi `dizionarioromagnolo.it` e attiva «Enforce HTTPS».
3. Presso il registrar imposta il DNS: quattro record A per l’apex (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) e un CNAME `www` → `<utente>.github.io`.
4. A ogni nuova edizione di un’app aumenta `VERSIONE` nel suo `sw.js`.

Collegamenti diretti: `/dizionario/#adesso`, `/dizionario/#rom/burdèl`, `/inglese/#en/to%20rain`.
