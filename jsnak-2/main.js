const parola1 = prompt("Inserisci la 1 parola");
const parola2 = prompt("Inserisci la 2 parola");
 let lunghezzaParola1 = parola1.length 
console.log(lunghezzaParola1)
let lunghezzaParola2 = parola2.length 
console.log(lunghezzaParola2)
if(lunghezzaParola1 > lunghezzaParola2){
    console.log("Parola 1 piu lunga")
}else if(lunghezzaParola1 < lunghezzaParola2){
    console.log("Parola 2 piu lunga")
}else{
    console.log("parole lunghe uguali")
}