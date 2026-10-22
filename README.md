# Dizionario Romagnolo — portale

Struttura del repository (GitHub Pages):

- `index.html` — home del portale, con ricerca rapida (italiano / English); tutti i link sono relativi, quindi funziona in qualunque indirizzo
- `.nojekyll` — pubblica i file così come sono; `404.html`
- `dizionario/` — dizionario poetico italiano ⇄ romagnolo (app installabile, `dizionario.json`)
- `inglese/` — dizionario inglese ⇄ romagnolo (app installabile con ambito proprio)
- `rime/` — dizionario delle rime: legge `../dizionario/dizionario.json` (un solo file da aggiornare)
- `berti/` — segnaposto del dizionario di Enrico Berti (copiarvi l’app)

## Pubblicazione su GitHub Pages (senza dominio)
1. Crea il repository e carica tutto il contenuto di questa cartella.
2. Settings → Pages: sorgente «Deploy from a branch», ramo `main`, cartella `/ (root)`.
3. Il sito sarà su `https://<utente>.github.io/<repository>/` (oppure su `https://<utente>.github.io/` se il repository si chiama `<utente>.github.io`).

## Quando acquisterai il dominio
Aggiungi un file `CNAME` con il solo nome del dominio, imposta il DNS (quattro record A: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153; un CNAME `www` → `<utente>.github.io`) e attiva «Enforce HTTPS». Non serve modificare nessuna pagina.

Aggiornamenti: a ogni nuova edizione di un’app aumenta `VERSIONE` nel suo `sw.js`.
Collegamenti diretti: `dizionario/#adesso`, `dizionario/#rom/burdèl`, `inglese/#en/to%20rain`.
