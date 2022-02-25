// Fonction pour calculer , cube et multiplication :
function produit(){
    let x= parseInt(prompt("Saisissez un entier"));
    let y= parseInt(prompt("Saisissez un multiplicateur"));
    var resultatCube;
    var resultatMultiplication;
    resultatMultiplication = x * y;
    resultatCube = x * x;
    document.write("Le produit de " + x + "x" + y+" vaut : "+ resultatMultiplication + " <br/> Le cube de "+ x + " vaut : "+ resultatCube)
    return x ,y;
}
produit();

// Appel de l'image :
function afficheImg(image) 
{
 document.getElementById("papillon").innerHTML ="<img src='"+image+"'>";
}
chemin="img/papillon.jpg";

afficheImg(chemin);