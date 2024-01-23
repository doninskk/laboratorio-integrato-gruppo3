# VolleyNet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

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
   - [ProfiloComponent](#ProfiloComponent)
   - [GiocaComponent](#GiocaComponent)
   - [GameDetailComponent](#GameDetailComponent)
   - [RicercaComponent](#RicercaComponent)
   - [TeamDetailComponent](#TeamDetailComponent)
   - [ApiService](#ApiService)
   - [PartiteService](#PartiteService)
   - [ErrorComponent](#ErrorComponent)
   - [AppComponent](#AppComponent)
   - [ClassificaUtenteComponent](#classifica-utente)

8. [Back-end](#Back-end)

   - [System requirement](#system-requirement)
   - [Possible future feature](#possible-future-feature)
   - []

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
Commit github: main

Author: Davide Bruno  
Contact Information: davide.bruno@edu.itspiemonte.it  
Role: PM Front-end Developer  
Commit github: branch 'davide'

Author: Carlotta Monaco  
Contact Information: carlotta.monaco@edu.itspiemonte.it  
Role:  
Commit github: branch 'carly'

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
Front-end:  
- Variables: camelCase  
- Files and Folder: kebab-case

Back-end:
- Variables: snake_case
- Files and Folder: snake_case

# Approach To Solution

---

## Front-end

### **HomeComponent**

La HomeComponent rappresenta la pagina principale del sito.

Mostra i risultati predefiniti delle partite, inclusi i nomi delle squadre, i loghi, i punteggi e l'orario e la data della partita.

Nella prima parte, abbiamo deciso di riportare l'ultima partita giocata nella superlega.

Abbiamo poi impostato un filtro, che fornisce tre menu a tendina per selezionare il campionato, la stagione e la giornata delle partite, utilizzando \*ngFor per popolare dinamicamente le opzioni.

Un pulsante "Cerca" attiva la funzione weekFilterResults() quando viene premuto.

Inoltre, abbiamo riscontrato difficoltà nel recepire alcuni loghi delle squadre (quali Cisterna, Saturnia Acicastello, Pineto, Aversa e diverse della sezione Femminile per mancanza di dati nelle API).

Il pulsante "Dettagli" reindirizza alla pagina dei dettagli della partita.

### **StatisticheComponent**

La StatisticheComponent gestisce la visualizzazione delle classifiche e delle statistiche delle squadre.

Abbiamo creato un menu a tendina che consente di selezionare il campionato, in modo da filtrare i diversi campionati, per non far risultare tutto il database insieme all'interno della pagina. Di default, inizialmente mostra la classifica della superlega.

Mostra una legenda con i significati delle abbreviazioni utilizzate nella classifica, come POS (posizione), SQ (nome squadra), PTS (punti), W (match vinto), L (match perso), ecc.

Per la sezione femminile, abbiamo creato un mock di JSON per mancanza di dati nelle API Sport, in modo da ricevere dati statici visibili all'utente.

### **NewsComponent**

La NewsComponent mostra una serie di card di articoli sulla pallavolo.

Ogni card contiene un'immagine, un titolo e un riassunto dell'articolo.

Gli utenti possono cliccare su ogni card per espandere e leggere ulteriori dettagli sull'argomento dell'articolo.

- Utilizzo di variabili booleane (isButtonClick, isButtonSecondArticleClick, ecc.) per gestire lo stato degli articoli.
- Implementazione di metodi (toggleArticle, toggleSecondArticle, ecc.) per cambiare lo stato degli articoli.

### **ProfiloComponent**

Il componente profilo presenta 3 sezioni:
- i dati dell'account;
- le card con i vari sconti acquistabili;
- la history delle bet giocate.

**Sezione account:** 

Abbiamo deciso per abbreviare i tempi di lasciare l'account "vale@mail.com" sempre loggato.

I fantacrediti rappresentati sono stati inseriti tramite il database. Presenta un bug per cui se non si passa prima dal componente gioca, i crediti non saranno visualizzati.   

I +10 crediti vengono calcolati nella parte front-end e non vengono riportati nella parte back-end.

Ci sono, inoltre, due collegamenti ai componenti "gioca" e "classifica-utente".

**Le card:**  

I bottoni ottieni calcolano il prezzo della card e lo comparano ai fantacrediti in possesso nell'account, in modo da diventare disabled in caso il prezzo sia maggiore rispetto al conto.

Una volta cliccato, i fantacrediti spesi verranno sottratti al totale e verrà dato un feedback all'utente attraverso il pop up di una modale bootstrap che conferma l'acquisto.  
Tutto ciò viene calcolato nella parte front-end e non è collegato al database, dovuto alla mancanza di tempo.

**Le bet:**

Abbiamo impostato un filtro con due menu a tendina (campionato e giornata), per facilitare la ricerca di una bet specifica. 

Sotto, si vedono le scommesse giocate, riportando la squadra scelta attraverso il "like".

Infine, nonostante la presenza delle API funzionanti fornite dal back-end, per mancanza di tempo non siamo riusciti a implementare un componente dedicato alla registrazione e login dell'utente, che vorremmo aggiungere in futuro.

### **GiocaComponent**

La GiocaComponent gestisce la pagina dedicata alle scommesse degli utenti. 

Vengono riportati 10 futuri game casuali per lega e giornata, dove l'utente potrà selezionare la squadra scelta su cui scommettere, attraverso il bottone check sulla destra, che diventerà disabled una volta cliccato.

Quando il bottone viene cliccato, la funzione setBetBody si attiverà, riportando la bet con la selezione dell'utente sul profilo stesso.

In futuro, vorremmo applicare il costo di 50 fantacrediti delle bet e riportare l'acquisto sul conto dell'utente, inoltre vorremmo aggiungere un filtro per selezionare più precisamente la partita su cui voler scommetere.

### **GameDetailComponent**

Il componente GameDetail offre una visualizzazione dettagliata dei risultati di una partita, presentando informazioni come data, loghi,  squadre coinvolte, set giocati e risultato finale in modo strutturato e accessibile.

### **RicercaComponent**

Il componente Ricerca permette agli utenti di cercare squadre e visualizzare squadre popolari.

Viene visualizzata una lista di squadre popolari con collegamenti per accedere alle pagine delle squadre.

Attualmente, non è possibile effettuare una ricerca attraverso la barra, per mancanza di tempo e dati.

### **TeamDetailComponent**

Il componente Team-Detail fornisce una visualizzazione dettagliata delle informazioni di una squadra, inclusi i risultati ottenuti sia in casa che fuori casa.

I risultati cambiano in base alla stagione (2022 o 2023), che dipende dal filtro della home.

### **ApiService**

Di seguito, una spiegazione dei metodi principali:

1. getRisultatiPartiteDefault()

- Descrizione: Ottiene l'ultimo risultato della superlega.
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

Il logo nella navbar è cliccabile e riporta alla home.

### **Classifica Utente**

Come feature aggiuntiva, abbiamo creato il componente Classifica Utente, che riporta la classifica degli utenti fittizi che si trovano all'interno del database.


# **Back-end**

## System requirement

1. Xampp:
-  Il software xampp dovrà essere installato sulla macchina del cliente.
-  Prima di eseguire l'applicativo bisognerà avviare xampp con i servizi di apache e MySql in eseguzione

2. Database:
-  Una volta installato xampp e avviati i processi, bisognerà cliccare sul tasto "admin" di MySQL, qui si dovrà creare un nuovo database vuoto chimato "lab_int"
-  Dopo averlo creato bisognerà cliccare sul tasto "importa", da questa schermata premeremo il tasto "scegli" e selezioneremo il file da noi fornito "lab_int.sql", infine premere il tasto esegui

3. Applicativo:
- Se la macchina su cui il software dovrà essere eseguito non ha un modo per eseguire il codice in java, si avrà bisogno di installare l'sdk dal sito ufficiale 
  (https://www.oracle.com/it/java/technologies/downloads/#jdk21-windows)
- Una volta installato il jdk, bisognerà aprire un prompt dei comandi di windows come powershell ed eseguire i seguenti comandi: 
   - *cd **nome della cartella***  
   - *java -jar **nome del file**.jar*
- Il servizio verrà eseguito sulla porta 8080, quindi nessun processo dovrà essere in esecuzione su quella porta 

4. scheduling:
- ogni giorno a mezzanotte, l'applicativo farà chiamate ad API sport per aggiornare i dati presenti nel database
- è quindi necessario che l'applicazione sia in esecuzione durante quel periodo per avere sempre i dati aggiornati
- l'operazione di aggiornamento potrebbe richiedere alcuni minuti, a causa delle limitazioni di API sport

### Possible future feature

 1. Players:
 - All'interno dal database si ha una tabella player, con all'interno dei giocatori fittizi
 - In futuro, pensiamo di incorporare dati di giocatori veri, relativi ad ogni stagione

 2. User:
 - sul database nella tabella user si ha un campo "admin", che servirà per indicare quale utente ha i permessi admin nell'applicativo
 - Attualmente nessun user è admin e gli admin non hanno servizi in più
 - Sul database, nella tabella user è anche presente un campo "verificato", in futuro vorremmo incorporare una verifica dell'account tramite mail 
 - Una volta verificato il campo "verificato" avrà valore true

 3. Statistiche team
 - Nel database, nella tabella sono presenti alcune statistiche di alcuni team
 - Le statistiche vengono aggiornate ogni lunedì a mezzanotte

 4. Vincitore del campionato
 - Abbiamo predisposti il database e i servizi per permettere all'utente di fare un altro tipo di scomessa
 - In questa scomessa, l'utente puntava su quale team secondo lui avrebbe vinto una certa lega
 - I servizi per creare questa scommessa (team_list) sono funzionanti: mancano i controlli periodici per vedere se l'utente ha vinto e l'implementazione con il front-end

 5. Offerte
 - Nel database vengono salvate le offerte acquistate dall'utente
 - Tuttavia le offerte generali non sono salvate da nessuna parte
 - Le offerte vengono create quando vengono mandate dal client e sono composte solo da una descrizione

 6. Standing/classifiche:
 - Nel database sono presenti alcune classifiche di diverse leghe
 - Molte classifiche non sono disponibili perché non presenti sulle API sport o, se presenti, risultano incomplete

7. Season:
- Attualmente sono coperte le perdite di tutte le leghe italiane del 2022 e del 2023
- In futuro, voremmo aggiungere tutte le partite di tutte le stagioni disponibili su API sport

8. Preferred team:
- Nel database è presente una tabella "prefered_team", con l'intenzione di dare la possibilità all'utente di scegliere i team da mettere nei preferiti, che vorremmo implementare in futuro

9. Country:
- Nel database, all'interno della tabella contry si ha solo l'Italia
- Ci sarebbe piaciuto aggiungere più paesi, ma a causa delle limitazioni di API sport ci siamo fermati alle competizioni italiane


### **Digital Strategist**
