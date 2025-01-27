# AR Model Placement

Un progetto di realtà aumentata (AR) che utilizza **A-Frame** e **AR.js** per posizionare modelli 3D in uno spazio reale tramite un marker. Questo progetto permette di caricare un modello 3D personalizzato in formato `.glb` e visualizzarlo utilizzando un marker AR specifico.

## 🚧 Stato del Progetto

⚠️ Questo progetto è attualmente in fase di sviluppo e alcune funzionalità potrebbero non essere ancora implementate o finalizzate.

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
   git clone https://github.com/tuo-username/ar-model-placement.git

2.	Vai nella directory del progetto:
    ```bash
    cd ar-model-placement


3.	Avvia un server locale. Ad esempio, utilizzando http-server:
    ```bash
    npx http-server


4.	Apri il progetto nel browser:
    ```bash
    http://localhost:8080

## 📁 Struttura del Progetto

      ar-model-placement/
      ├── index.html              # Pagina principale del progetto
      ├── models/                 # Directory per i modelli 3D
      │   └── kawashaki_ninja_h2.glb # Modello 3D di esempio
      ├── pattern-marker.patt     # Marker personalizzato per l'AR
      ├── ar-support-check.js     # Script per controllare la compatibilità AR
      └── README.md               # Documentazione del progetto

---

## 🚀 Funzionalità Implementate
	•	Caricamento di modelli 3D in formato .glb.
	•	Utilizzo di marker personalizzati per la realtà aumentata.
	•	Animazione dei modelli 3D.

---

## 🔧 Prossimi Passi
	•	Aggiungere supporto per l’interazione con i modelli AR (scalabilità, rotazione manuale).
	•	Ottimizzare la compatibilità con browser e dispositivi più datati.
	•	Migliorare l’interfaccia utente e aggiungere un sistema di menu per caricare diversi modelli.

 ---

## 💡 Contributi

Contributi, segnalazioni di bug e suggerimenti sono benvenuti! Per favore, utilizza il sistema di issue di GitHub per condividere i tuoi feedback.

---

## 📄 Licenza

Questo progetto è distribuito sotto la licenza [MIT](https://opensource.org/licenses/MIT "Vai alla licenza MIT").

---

## 📌 Nota Importante

Il progetto è ancora in fase iniziale e potrebbe non funzionare correttamente su tutti i dispositivi. Sei invitato a testarlo e fornire feedback per miglioramenti futuri.

---
