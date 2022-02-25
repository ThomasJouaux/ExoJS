var aneeNaissance = window.prompt("Saisissez votre anée de naissance");
var age = 2022 - aneeNaissance ;
if(age >= 18){
    alert("Vous etes majeur , vous avez"+ age +"ans");
}else{
    alert("Vous etes mineur , vous avez"+ age +"ans");
}
