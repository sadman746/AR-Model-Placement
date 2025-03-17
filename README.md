# AR Model Placement

Un progetto di realtà aumentata (AR) che utilizza **A-Frame** e **AR.js** per posizionare modelli 3D in uno spazio reale tramite un marker. Questo progetto permette di caricare un modello 3D personalizzato in formato `.glb` e visualizzarlo utilizzando un marker AR specifico.

## 🚀 Stato del Progetto

✅ **Funzionalità principali implementate**
- Il caricamento dei modelli 3D ora funziona correttamente.
- Aggiunta una **schermata di caricamento** per migliorare l'esperienza utente.
- Implementato un **pulsante per tornare alla home**.
- Rimossi elementi superflui come il pulsante VR di default.

---

## 🛠️ Tecnologie Utilizzate

- [A-Frame 1.3.0](https://aframe.io/)
- [AR.js 3.4.1](https://github.com/AR-js-org/AR.js)
- HTML, CSS e JavaScript

## 📋 Requisiti

Prima di iniziare, assicurati di avere i seguenti prerequisiti:

1. Un server locale per servire i file. Puoi utilizzare un server statico come [http-server](https://www.npmjs.com/package/http-server) o qualsiasi altro strumento simile.
2. Un browser compatibile con AR.js, come Google Chrome su dispositivi Android o Safari su dispositivi iOS.
3. Accesso alla fotocamera del dispositivo abilitato.

---

## 🧑‍💻 Come Eseguire il Progetto

1. Clona il repository:
   ```bash
   git clone https://github.com/sadman746/ar-model-placement.git
   ```

2. Vai nella directory del progetto:
   ```bash
   cd ar-model-placement
   ```

3. Avvia un server locale. Ad esempio, utilizzando http-server:
   ```bash
   npx http-server
   ```

4. Apri il progetto nel browser:
   ```bash
   http://localhost:8080
   ```

5. Oppure, puoi testarlo direttamente sul mio sito: [Visita il sito](https://sadman.it)

---

## 📁 Struttura del Progetto

```
ar-model-placement/
├── index.html              # Pagina principale del progetto
├── models/                 # Directory per i modelli 3D
├── pattern-marker.patt     # Marker Hero per l'AR
├── ar-support-check.js     # Script per controllare la compatibilità AR
├── script.js               # Gestione della schermata di caricamento e interazioni
├── styles.css              # Stili del progetto
└── README.md               # Documentazione del progetto
```

---

## 🚀 Funzionalità Implementate
✔ **Caricamento di modelli 3D in formato .glb**.  
✔ **Utilizzo di marker personalizzati per la realtà aumentata**.  
✔ **Animazione dei modelli 3D**.  
✔ **Schermata di caricamento per una transizione fluida**.  
✔ **Pulsante "Torna alla Home" per una migliore navigazione**.  
✔ **Rimosso il pulsante VR non necessario**.  

---

## 🔧 Prossimi Passi
🔹 **Aggiungere interazioni avanzate con il modello** (scalabilità, rotazione manuale).  
🔹 **Ottimizzare il progetto per dispositivi meno recenti**.  
🔹 **Migliorare il design dell'interfaccia per un'esperienza più fluida**.  
🔹 **Possibilità di caricare modelli 3D personalizzati dall'utente**.  

---

## 💡 Contributi

Contributi, segnalazioni di bug e suggerimenti sono benvenuti! Per favore, utilizza il sistema di issue di GitHub per condividere i tuoi feedback.

---

## 📄 Licenza

Questo progetto è distribuito sotto la licenza [MIT](https://opensource.org/licenses/MIT "Vai alla licenza MIT").

---

## 📌 Nota Importante

Il progetto è in continuo sviluppo e potrebbe non funzionare correttamente su tutti i dispositivi. Sei invitato a testarlo e fornire feedback per miglioramenti futuri.
