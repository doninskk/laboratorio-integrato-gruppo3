## VolleyNet

## Table of Contents

1. [Exercise Requirement](#exercise-requirement)
2. [Technologies](#technologies)
3. [Author](#author)
4. [License](#license)
5. [Standard Use](#standard-use)
6. [Approach To Solution](#approach-to-solution)
7. [Front-end](#front-end)

   - [HomeComponent](#HomeComponent)
   - [StatisticheComponent](#StatisticheComponent)
   - [NewsComponent](#NewsComponent)
   - [GiocaComponent](#GiocaComponent)
   - [GameDetailComponent](#GameDetailComponent)
   - [RicercaComponent](#RicercaComponent)
   - [TeamDetailComponent](#TeamDetailComponent)
   - [ApiService](#ApiService)
   - [PartiteService](#PartiteService)
   - [ErrorComponent](#ErrorComponent)
   - [AppComponent](#AppComponent)

8. [Back-end](#Back-end)

   - [](#)

9. [Digital Strategist](#Digital-Strategist)
   - [](#)

## Exercise Requirement

---

Il progetto mira a creare un portale web per visualizzare risultati e statistiche sportive.

Utilizzerà le API Sports per ottenere dati in tempo reale di uno sport specifico.

L'obiettivo è fornire una piattaforma user-friendly con un tono di voce distintivo. I dati verranno periodicamente aggiornati e gestiti tramite un database.

## Technologies

---

### Front-end

Angular, Bootstrap, TypeScript, jQuery, HTML5, CSS3.

### Backend

draw.io, phpmyadmin, XAMPP, Postman, SpringBoot, Java (Maven, Tomcat, JPA, Java docs), Intellij, GitHub

### Digital Strat

Figma, Illustrator, Photoshop, Semrush, Canva, Business Manager, Google ADS

## Author

---

### Flow's Tech

Author: Claudia Grassitelli  
Contact Information: claudia.grassitelli@edu.itspiemonte.it  
Role: Team Leader, Front-end Developer

Author: Davide Bruno  
Contact Information: davide.bruno@edu.itspiemonte.it  
Role: PM Front-end Developer

Author: Carlotta Monaco  
Contact Information: carlotta.monaco@edu.itspiemonte.it  
Role:

Author: Simona Pecoraro  
Contact Information: simona.pecoraro@edu.itspiemonte.it  
Role: PM Digital Strategist, UI Designer

Author: Sara Eynard  
Contact Information: sara.eynard@edu.itspiemonte.it  
Role: UX Designer

Author: Paolo Viara  
Contact Information: paolo.viara@edu.itspiemonte.it  
Role: Account Specialist

Author: Valentino Chatrian  
Contact Information: valentino.chatrian@edu.itspiemonte.it  
Role: PM Back-end Developer

Author: Francesco Della Corte  
Contact Information: francesco.dellacorte@edu.itspiemonte.it  
Role: Back-end Developer

Author: Francesco Bechini  
Contact Information: francesco.bechini@edu.itspiemonte.it  
Role: Back-end Developer

## License

---

CC By Attribution  
You are free to:  
Share — copy and redistribute the material in any medium or format  
Adapt — remix, transform, and build upon the material for any purpose, even commercially.  
The licensor cannot revoke these freedoms as long as you follow the license terms.

## Standard Used

---

Variables: camelCase

Files and Folder: kebab-case

# Approach To Solution

---

## Front-end

### **HomeComponent**

La HomeComponent rappresenta la pagina principale del sito.

Mostra i risultati predefiniti delle partite, inclusi i nomi delle squadre, i loghi, i punteggi e l'orario della partita.

Utilizza \*ngFor per iterare attraverso l'array risultatiDefaultGame.teams e visualizza le informazioni relative a ciascuna squadra.

Fornisce tre menu a tendina per selezionare il campionato, la stagione e la giornata delle partite., utilizzando \*ngFor per popolare dinamicamente le opzioni nei menu a tendina.

Un pulsante "Cerca" attiva la funzione weekFilterResults() quando viene premuto.

Utilizza \*ngFor per iterare attraverso l'array risultatiPartite e visualizzare le informazioni di ciascuna partita.

Ogni partita include i loghi delle squadre, i nomi delle squadre, i punteggi, l'orario e un pulsante "Dettagli" che reindirizza alla pagina dei dettagli della partita.

### **StatisticheComponent**

La StatisticheComponent gestisce la visualizzazione delle classifiche e delle statistiche delle squadre.

Un menu a tendina consente di selezionare il campionato, utilizzando \*ngFor per popolare dinamicamente le opzioni nel menu a tendina.

Un pulsante "Cerca" attiva la funzione standingsLeague() quando viene premuto, che recupera le classifiche del campionato selezionato.

Mostra una legenda con i significati delle abbreviazioni utilizzate nella classifica, come POS (posizione), SQ (nome squadra), PTS (punti), W (match vinto), L (match perso), ecc.

Utilizza \*ngFor per iterare attraverso l'array classifica e visualizzare le informazioni relative a ciascuna squadra.
Ogni squadra mostra la posizione in classifica, il logo, il nome della squadra, i punti ottenuti, la forma recente e la zona di classifica.

### **NewsComponent**

La NewsComponent mostra una serie di card di articoli sulla pallavolo.

Ogni card contiene un'immagine, un titolo e un riassunto dell'articolo.

Gli utenti possono cliccare su ogni card per espandere e leggere ulteriori dettagli sull'argomento dell'articolo.

La pagina copre argomenti come strategie vincenti, leggende del volley, una semifinale emozionante e le regole di base del gioco.

- Utilizzo di variabili booleane (isButtonClick, isButtonSecondArticleClick, ecc.) per gestire lo stato degli articoli.
- Implementazione di metodi (toggleArticle, toggleSecondArticle, ecc.) per cambiare lo stato degli articoli.

### **GiocaComponent**

La GiocaComponent gestisce la pagina dedicata alle scommesse degli utenti. Le principali funzionalità sono:

Visualizzazione delle scommesse fatte dagli utenti.
Possibilità di effettuare nuove scommesse e salvare tali scommesse tramite il servizio partiteServices.

### **GameDetailComponent**

Il componente GameDetail offre una visualizzazione dettagliata dei risultati di una partita, presentando informazioni come data, squadre coinvolte e risultato finale in modo strutturato e accessibile.

### **RicercaComponent**

Il componente Ricerca permette agli utenti di cercare squadre e visualizzare squadre popolari.

Un pulsante "Cerca" attiva la funzione search() quando viene premuto. Questa funzione recupera i risultati della ricerca in base alla query inserita.

Viene visualizzata una lista di squadre popolari con collegamenti per accedere alle pagine delle squadre.

### **TeamDetailComponent**

Il componente Team-Detail fornisce una visualizzazione dettagliata delle informazioni di una squadra, inclusi i risultati ottenuti sia in casa che fuori casa.

Utilizzo del servizio partiteServices per ottenere informazioni dettagliate su una specifica squadra.

Il template utilizza un ciclo \*ngFor per iterare attraverso i dettagli della squadra (teamDetails).

Presenta i risultati ottenuti fuori casa attraverso una seconda card Bootstrap con informazioni simili, ma relative alle partite fuori casa.

### **ApiService**

L'ApiService è un servizio Angular dedicato alla gestione delle chiamate HTTP verso l'API del backend per diverse funzionalità dell'applicazione.

Di seguito, una spiegazione dei metodi principali:

1. getRisultatiPartiteDefault()

- Descrizione: Ottiene i risultati di default delle partite.
- Metodo HTTP: GET
- URL API: 'http://localhost:8080/game/default'

2. getRisultatiPartite(requestBody: any)

- Descrizione: Ottiene i risultati delle partite in base alla richiesta.
- Metodo HTTP: POST
- URL API: 'http://localhost:8080/game/getGeneric'
- Parametri: requestBody - corpo della richiesta

3. getTeamsList(requestBodyTeams: any)

- Descrizione: Ottiene la lista delle squadre in base alla richiesta.
- Metodo HTTP: POST
- URL API: 'http://localhost:8080/team/getList'

4. getTeamsDetail(requestBodyId: any)

- Descrizione: Ottiene i dettagli di una squadra in base all'ID.
- Metodo HTTP: POST
- URL API: 'http://localhost:8080/team/statistics'

5. getStandings(requestStandingBody: any)

- Descrizione: Ottiene la classifica in base alla richiesta
- Metodo HTTP: POST
- URL API: 'http://localhost:8080/league/standings'

6. userRegister(requestRegisterBody: any)

- Descrizione: Registra un nuovo utente.
- Metodo HTTP: POST
- URL API: 'http://localhost:8080/user/signup'

7. login(requestLoginBody: any)

- Descrizione: Effettua il login di un utente.
- Metodo HTTP: POST
- URL API: 'http://localhost:8080/user/login'

8. betPage()

- Descrizione: Ottiene la pagina delle scommesse.
- Metodo HTTP: GET
- URL API: 'http://localhost:8080/game/betPage'

9. filterBet(requestBetBody: any)

- Descrizione: Filtra le scommesse in base alla richiesta.
- Metodo HTTP: POST
- URL API: 'http://localhost:8080/bet/betList'

10. gameDetail(id: any)

- Descrizione: Ottiene i dettagli di una partita in base all'ID.
- Metodo HTTP: POST
- URL API: 'http://localhost:8080/game/getSpecific'

11. getUsersRank()

- Descrizione: Ottiene la classifica degli utenti.
- Metodo HTTP: GET
- URL API: 'http://localhost:8080/user/getRank'

12. saveBet(userBody: any)

- Descrizione: Salva una scommessa.
- Metodo HTTP: POST
- URL API: 'http://localhost:8080/bet/save'

13. updateCoins(coinsJson: any)

- Descrizione: Aggiorna il saldo delle monete di un utente.
- Metodo HTTP: POST
- URL API: 'http://localhost:8080/user/updateMoney'

### **PartiteService**

Il servizio PartiteServices in Angular agisce come intermediario tra i componenti dell'applicazione e l'ApiService.

Fornisce metodi specifici per ottenere dati relativi alle partite, squadre, classifiche, gestione degli utenti e scommesse.

Di seguito, una spiegazione dei principali metodi del servizio:

1. getDefault()

Ottiene i risultati di default delle partite.

Chiama il metodo corrispondente di ApiService.

2. getGames(requestBody: any)

Ottiene i risultati delle partite in base alla richiesta.

Chiama il metodo corrispondente di ApiService passando il corpo della richiesta.

3. teamsList(requestBodyTeams: any)

Ottiene la lista delle squadre in base alla richiesta.

Chiama il metodo corrispondente di ApiService passando il corpo della richiesta.

4. detailTeam(requestBodyId: any)

Ottiene i dettagli di una squadra in base alla richiesta.

Chiama il metodo corrispondente di ApiService passando il corpo della richiesta.

5. standings(requestBodyStandings: any)

Ottiene la classifica in base alla richiesta.

Chiama il metodo corrispondente di ApiService passando il corpo della richiesta.

6. subscribeUser(requestSubBody: any)

Registra un nuovo utente.

Chiama il metodo corrispondente di ApiService passando il corpo della richiesta.

7. userLogin(requestLogBody: any)

Effettua il login di un utente.

Chiama il metodo corrispondente di ApiService passando il corpo della richiesta.

8. betPageResults()

Ottiene la pagina delle scommesse.

Chiama il metodo corrispondente di ApiService.

9. filterForBets(requestBetBody: any)

Filtra le scommesse in base alla richiesta.

Chiama il metodo corrispondente di ApiService passando il corpo della richiesta.

10. getGameDetail(id: any)

Ottiene i dettagli di una partita in base all'ID.

Chiama il metodo corrispondente di ApiService passando l'ID della partita.

11. getUsersPositions()

Ottiene la classifica degli utenti.

Chiama il metodo corrispondente di ApiService.

12. getSaveBets(user: any)

Salva una scommessa.

Chiama il metodo corrispondente di ApiService passando il corpo della richiesta.

13. getCoins(coins: any)

Aggiorna il saldo delle monete di un utente.

Chiama il metodo corrispondente di ApiService passando il corpo della richiesta.

### **ErrorComponent**

Il componente Error è una pagina di errore personalizzata che viene visualizzata quando si verifica un errore 404, indicando che la pagina cercata non è disponibile.

### **AppComponent**

All'interno di AppComponent, troviamo principalmente la navbar e il footer.

Stiamo adattando il layout in base alla larghezza dello schermo:

- in versione mobile, la navbar viene posta in basso per migliorare l'usabilità su schermi più piccoli,
- mentre in versione desktop, torna alla parte superiore del documento per mantenere un aspetto standard.

Il footer è posizionato sopra la navbar in versione mobile per garantire una chiara distinzione tra le due sezioni.

1. Layout di Base (senza media query):

La navbar è posizionata all'interno dell'header e si estende orizzontalmente.

Il footer è posizionato alla fine del corpo.

2. Media Query per Versione Mobile:

Quando la larghezza dello schermo è inferiore a 600px:
La navbar diventa una colonna verticale e si estende per tutta la larghezza.

La navbar è posizionata in basso, fissata nella parte inferiore dello schermo.

Il footer ha uno sfondo diverso e viene posizionato sopra la navbar.

3. Media Query per Dispositivi Desktop:

Quando la larghezza dello schermo è superiore a 600px:

- La navbar torna al layout orizzontale, poiché la proprietà flex-direction viene reimpostata su row.
- La navbar perde il posizionamento fisso e torna al flusso normale del documento.
- Il margine inferiore del corpo viene ripristinato alla sua impostazione pre-media query.

### **Back-end**

### **Digital Strategist**