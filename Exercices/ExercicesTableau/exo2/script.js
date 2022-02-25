let tableau = []
var indice;
console.log("je ne suis pas dans la fonction")
var l = tableau.length;

// Remplissage du tableau

function GetInteger(TextMsg)
{
    var nombre = prompt(TextMsg);
    nombre = parseInt(nombre,10);
    console.log("Vous avez saisi le nombre "+ nombre +".");
    return nombre;
}

//Saisie de la taille du tableau

function InitTab()
{
    nombre = GetInteger("Veuillez préciser la taille du tableau.");

    tableau = Array(nombre);
}

//Recherche d'indice dans le tableau

function SaisieTab()
{
    

        for (indice = parseInt(0,10); indice < nombre; indice ++)
    {
        tableau[indice] = GetInteger("Veuillez saisir la valeur de l'élément d'indice "+ indice +".");
    }

}

// Affiche tout les postes du tableau

function AfficheTab()
{
        for (indice = parseInt(0,10); indice < nombre; indice ++)
    {
        console.log(tableau[indice]);
    }
}




// tri a bulle 
function triBulle()
{
    InitTab();
    SaisieTab();

    console.log("Tableau initiale :\n");

    AfficheTab();

    changement = false;
    longueur = tableau.length;

    for(i = parseInt(0,10); i < longueur; i++)
    {
        for(indice = parseInt(0,10); indice < longueur - 1; indice++)
        {
            if(tableau[indice] > tableau[indice + 1])
            {
                stock = tableau[indice];
                tableau[indice] = tableau[indice + 1];
                tableau[indice + 1] = stock;

                changement = true;
            }

        }
    }
    
    console.log("Tableau finale :\n");

    AfficheTab();
}

triBulle();