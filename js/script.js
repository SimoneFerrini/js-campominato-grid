/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno:  :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.


Consegna:
-creare elem btn-play
-creare varEl my-grid
-creare var difficult = 100;

onclick btn-play{
reset my-grid;
for(i=1; i<= difficult; i++){
    -crea nuova cella classe my cell
    -nuovacella.innerhtmal = 1;
    -my grid.append nuova cella
    -onclick nuova cella:
        aggiungere classe active
        console.log(nuova cella.textcontent)
} <- pensare a usare function---------------

*/


let btnPlayEl = document.getElementById("my-btn-play");
let gridEl = document.getElementById("my-grid");
let difficult;


btnPlayEl.addEventListener("click", function (){
    gridEl.innerHTML = "";
    
    let level = document.getElementById("level").value;
    
    
    if(level == 1){
        difficult = 100;
        document.getElementById("my-grid").style.width = "600px";
        
    }else if(level == 2){
        difficult = 81;
        document.getElementById("my-grid").style.width = "540px";
        
    }else if(level == 3) {
        difficult = 49;
        document.getElementById("my-grid").style.width = "420px";
    }



    for(let i=1; i<= difficult; i++){
        let newCell = createNewCellWithNumber(i);

        newCell.addEventListener("click", function() {
            newCell.classList.add("active");
            console.log(i);
        })
    }
})


function createNewCellWithNumber(num){
    let newCell = document.createElement("div");
    newCell.classList.add("my-cell");
    gridEl.append(newCell);
    newCell.textContent = num;

    return newCell;
}