let amount = 0;
for(let i = 0; i < 3; i++){
    const number = Number(prompt("inserisci un numero"));
    amount += number;
}
console.log(`totale: ${amount}`);