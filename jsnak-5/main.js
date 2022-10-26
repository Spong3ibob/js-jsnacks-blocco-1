
const nuber = [];
for( let i = 0; i < 6; i++ ){
    const numberUser = Number(prompt("Inserisci un numero"));
    if(numberUser % 2 === 1){
        nuber.push(numberUser);
    }
}
console.log(nuber)
