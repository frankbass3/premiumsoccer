# Maglie da Calcio Incorniciate

Un sito web per la vendita di maglie da calcio incorniciate professionalmente.

## Descrizione

Landing page in italiano per mostrare una collezione di maglie da calcio incorniciate delle principali squadre italiane (Juventus, AC Milan, Inter, Roma, Napoli, Lazio, Fiorentina, Atalanta). Il sito include un hero section, griglia di prodotti a due colonne, selettori di quantità e pulsanti di acquisto.

## Tecnologie Utilizzate

- **Frontend**: React con TypeScript
- **Routing**: Wouter
- **UI Components**: Shadcn UI
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Backend**: Express.js (serve solo i file statici)

## Requisiti

- Node.js (versione 20 o superiore)
- npm

## Come Avviare l'Applicazione

### 1. Installa le dipendenze

```bash
npm install
```

### 2. Avvia l'applicazione in modalità sviluppo

```bash
npm run dev
```

L'applicazione sarà disponibile su `http://localhost:5000`

### 3. Build per produzione (opzionale)

```bash
npm run build
```

Questo comando crea una versione ottimizzata dell'applicazione nella cartella `dist`.

## Struttura del Progetto

```
├── client/                    # Codice frontend
│   ├── src/
│   │   ├── pages/
│   │   │   └── home.tsx      # Pagina principale con prodotti
│   │   ├── components/       # Componenti UI Shadcn
│   │   ├── App.tsx          # Componente principale
│   │   └── index.css        # Stili globali
│   └── index.html           # HTML principale
├── server/                   # Server Express
│   ├── index.ts             # Entry point del server
│   └── routes.ts            # Route API (attualmente vuote)
└── shared/                  # Codice condiviso
```

## Funzionalità

- ✅ Hero section con immagine di sfondo
- ✅ Griglia di prodotti a due colonne
- ✅ 8 prodotti con immagini generate
- ✅ Selettori di quantità (da 1 a 10)
- ✅ Prezzi in formato italiano (€189,99)
- ✅ Pulsanti "Acquista Ora" con notifiche
- ✅ Footer con informazioni di contatto
- ✅ Design responsive
- ✅ SEO ottimizzato con meta tag

## Note Importanti

- **Nessun database**: I dati dei prodotti sono hardcoded nel componente
- **Nessuna integrazione pagamenti**: I pulsanti "Acquista Ora" mostrano solo notifiche toast, non processano pagamenti reali (nessun PayPal, Stripe, o altri gateway di pagamento)
- **Nessun carrello persistente**: La quantità selezionata non viene salvata
- **Solo frontend**: Non ci sono API backend implementate

## Personalizzazione

Per modificare i prodotti, modifica l'array `products` in `client/src/pages/home.tsx`:

```typescript
const products: Product[] = [
  { 
    id: 1, 
    name: "Nome Prodotto", 
    team: "Nome Squadra", 
    price: 189.99, 
    image: imagePath 
  },
  // ... altri prodotti
];
```

## Sviluppo Futuro

Se vuoi espandere l'applicazione, considera di aggiungere:

- Integrazione con sistema di pagamento (PayPal, Stripe, ecc.)
- Carrello della spesa persistente
- Backend con database per gestire prodotti e ordini
- Sistema di autenticazione utenti
- Gestione ordini e spedizioni
- Form di contatto per richieste personalizzate

## Supporto

Per qualsiasi domanda o problema, contatta: info@maglieincorniciate.it
