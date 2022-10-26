const nomePartecipante = prompt("Inserisci il tuo nome");
const invitati = ["luca", "simone", "francesco","andrea"];
if(nomePartecipante.includes("luca")){
    console.log("Può entrare");
}else if(nomePartecipante.includes("simone")){
    console.log("Può entrare");
}else if(nomePartecipante.includes("francesco")){
    console.log("Può entrare");
}else if(nomePartecipante.includes("andrea")){
    console.log("Può entrare");
}else{
    console.log("Non può entrare")
}