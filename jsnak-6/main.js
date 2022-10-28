const nuberlist = [
    34,
    4,
    65,
    3,
    15,
    5,
    70,
];

let i = 0;
let result;
let totale = 0;
while(i < nuberlist.length ){
   result = i % 2;
   if(result !== 0){
    totale = totale + nuberlist[i]
   }
    i++;
}

console.log(totale);