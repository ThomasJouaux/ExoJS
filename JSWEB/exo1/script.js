
let tab = [];
let numbers;

  while(numbers != 0){
      let numbers =parseInt(prompt("Saisissez une valeur"));
      tab.push(numbers);
      if(numbers == 0){
        alert("Vous avez saisi 0")
        break;
    }
  };
function moyenne(tab){
    var i=0;
    var somme =0;
    tableauTaille = tab.length;
 while(i<tableauTaille){
     somme = somme + tab[i++];
 }
 return somme / tableauTaille;
}
function sommes(tab){
    var i=0;
    var somme =0;
    tableauTaille = tab.length;
 while(i<tableauTaille){
     somme = somme + tab[i++];
 }
 return somme;
}
var a = moyenne(tab)
var b = sommes(tab)
console.log(numbers)
console.log("La somme du tableau est de : "+b)
console.log("La moyenne du tableau est de : " +a);
console.log("Le tableau fait une taille de : "+ tableauTaille);