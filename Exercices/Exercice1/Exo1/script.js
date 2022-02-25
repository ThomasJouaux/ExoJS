
var Name = window.prompt("Saisissez votre nom");
var nickName = window.prompt("Saisissez votre prenom");
if (window.confirm ("Etes vous un homme ?") == true){  
   result = "Monsieur"
} else {
    result = "Madame"
};
alert("Bonjour "+ result + " " +  nickName + " " + Name +" bienvenue sur notre site web");
