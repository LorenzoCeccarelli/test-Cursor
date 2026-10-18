# Track Academy

Sito Next.js a **export statico**, pronto per Aruba Hosting.

## Sviluppo

```bash
npm install
npm run dev
```

I testi modificabili stanno in `src/content/site.ts`.

## Build per Aruba

```bash
npm run build
```

Carica il contenuto della cartella `out/` nella `public_html` (o cartella del dominio) tramite FTP/File Manager.

Il file `contact.php` deve restare nella root del sito insieme agli HTML. Su Aruba la funzione `mail()` deve essere abilitata.

Prima del lancio:

1. imposta `previewNoIndex: false` in `src/content/site.ts`
2. sostituisci il lockup con il logo originale
3. configura HTTPS e il reindirizzamento www/non-www dal pannello, usando i DNS del dominio già posseduto
