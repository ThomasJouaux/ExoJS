var entier1 = window.prompt("Saisissez un nombre");
var entier2 = window.prompt("Saisissez un nombre");
var operateur = window.prompt("Saisissez un operateur");
if(operateur == "+"){
    alert ( parseInt(entier1) +parseInt(entier2) )
}if(operateur == "-"){
    alert(entier1 - entier2)
}if(operateur == "*"){
    alert(entier1 * entier2)
}if(operateur == "/"){
    alert(entier1 / entier2)
}else{
    alert("Saisissez un bon operateur")
};
if(entier2 == 0){
    alert("Impossible de diviser par 0")
};