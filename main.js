console.log("simon Says");

const numeri = [];
for (let i = 0; i < 5; i++) {
    // Genero un numero casuale tra 0 e 100
    const numeroCasuale = Math.floor(Math.random() * 101);
    numeri.push(numeroCasuale);
}
document.getElementById('numeri').innerText = numeri.join(', ');



// faccio partire un timer di 30 secondi.
function avviaTimer(secondi) {
    let tempoRimanente = secondi;
    const timerElement = document.getElementById('timer');
    timerElement.innerText = tempoRimanente;

    const countdown = setInterval(() => {
        tempoRimanente--;
        timerElement.innerText = tempoRimanente;

        if (tempoRimanente <= 0) {
            clearInterval(countdown);
            timerElement.innerText = "Tempo scaduto!";
        }
    }, 1000);
    console.log(tempoRimanente);

}
avviaTimer(30);



//faccio scomparire i numeri dopo 30 secondi e faccio apparire  5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

setTimeout(function () {
    // Codice da eseguire dopo 30 secondi
    document.getElementById('numeri').style.display = 'none'; // Nascondi i numeri
    document.getElementById('inputContainer').style.display = 'block'; // Mostra gli input
    console.log("Sono passati 30 secondi!");
}, 30000);


//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

   