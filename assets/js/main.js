
// Chiedi all’utente la sua email, 
var userEmail = prompt('inserisci la tua Email');

//controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
var allowedEmail = ['gicunho@hotmail.it', 'boolean@gmail.com', 'torino@yahoo.it', 'javascript@live.com'];
var utenteAbilitato;
var risultato;

for (var i=0; i<allowedEmail.length; i++) {
    if (userEmail == allowedEmail[i]) 
    {utenteAbilitato=true;
    }
}
//console.log(utenteAbilitato);

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
if (utenteAbilitato == true) {
alert('Complimenti, la tua mail è abilitata per giocare')
var numUtente = Math.floor((Math.random() * 6) + 1);
var numPc = Math.floor((Math.random() * 6) + 1);

//Stabilire il vincitore, in base a chi fa il punteggio più alto.
    if (numUtente > numPc){
        risultato = 'Complimenti, hai vinto!'
        console.log(risultato);
    } else if (numPc > numUtente){
        risultato = 'Ha vinto il PC';
        console.log(risultato);

    } else if (numPc == numUtente){
        risultato = 'Pareggio';
        console.log(risultato);
    }
document.getElementById('sorteggio_utente').innerHTML = numUtente;
document.getElementById('sorteggio_pc').innerHTML = numPc;
document.getElementById('risultato').innerHTML = risultato;

} else {
    alert('Purtroppo non sei nella lista degli utenti abilitati al nostro gioco!')
}

