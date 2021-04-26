
// Chiedi all’utente la sua email, 
var userEmail = prompt('inserisci la tua Email');
//controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
var allowedEmail = ['gicunho@hotmail.it', 'boolean@gmail.com', 'torino@yahoo.it', 'javascript@live.com'];
var messaggio;

for (var i=0; i<allowedEmail.length; i++) {
    if (userEmail == allowedEmail[i]) 
    {messaggio = 'vero';
    var numUtente = Math.floor((Math.random() * 6) + 1);
    var numPc = Math.floor((Math.random() * 6) + 1);
    document.getElementById('sorteggio_utente').innerHTML = numUtente;
    document.getElementById('sorteggio_pc').innerHTML = numPc;

    console.log(numUtente);
    console.log(numPC);

    break;} else {messaggio = 'Purtroppo non sei nella lista degli utenti abilitati al nostro gioco!'}
    
}
console.log(messaggio);
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
