

// document.getElementById("myform").addEventListener("submit", VerifForm);
// document.getElementById("form2").addEventListener("submit", VerifForm);


// function VerifForm() {
//     let societeFiltre = new RegExp("[a-zA-Z]+");
//     var testSociete = societeFiltre.test(document.getElementById("societe"))
//     console.log(testSociete);
//     if(testSociete != true){
//         alert("Saisissez le nom de votre société")
//     }
// }


document.getElementById("myform").addEventListener("submit", function(event) {

// SOCIETE //
    let societeFiltre = new RegExp("^[a-zA-Z]+$");
    var societe = document.getElementById("societe");
    console.log(societe.value);
    var testSociete = societeFiltre.test(document.getElementById("societe").value);
    console.log(testSociete);
    if(testSociete != true){
        alert("Saisissez le nom de votre société");
        event.preventDefault();
    }
 
 // PERSONNE A CONTACTER //

    let contactFiltre = new RegExp("^[a-zA-Z]+$");
    var contact = document.getElementById("contact");
    console.log(contact.value);
    var testContact = contactFiltre.test(document.getElementById("contact").value);
    console.log(testContact);
    if(testContact != true){
        alert("Saisissez le nom de la personne a contacter");
        event.preventDefault();
    }
// ADRESSE ENTREPRISE //

    let adresseEntrepriseFiltre = new RegExp("^[a-zA-Z]+$");
    var adresseEntreprise= document.getElementById("adresseEntreprise");
    console.log(adresseEntreprise.value);
    var testAdresseEntreprise = adresseEntrepriseFiltre.test(document.getElementById("adresseEntreprise").value);
    console.log(testAdresseEntreprise);
    if(testAdresseEntreprise != true){
        alert("Saisissez l'adresse de votre entreprise");
        event.preventDefault();
    }

// CODE POSTAL // 

let codePostalFiltre = new RegExp("^[0-9]{5}$");
var codePostal = document.getElementById("codePostal");
console.log(codePostal.value);
var testCodePostal = codePostalFiltre.test(document.getElementById("codePostal").value);
console.log(testCodePostal);
if(testCodePostal != true){
    alert("Saisissez un code postal valide !");
    event.preventDefault();
}

// VILLE // 

let villeFiltre = new RegExp("^[a-zA-Z]+$");
var ville= document.getElementById("ville");
console.log(ville.value);
var testVille = villeFiltre.test(document.getElementById("ville").value);
console.log(testVille);
if(testVille != true){
    alert("Saisissez une ville existante");
    event.preventDefault();
}

let e_mailFiltre = new RegExp("/^([w-.]+)@((?:[w]+.)+)([a-zA-Z]{2,4})/i");
var e_mail= document.getElementById("e_mail");
console.log(e_mail.value);
var testE_mail = e_mailFiltre.test(document.getElementById("e_mail").value);
console.log(testE_mail);
if(testE_mail != true){
    alert("Saisissez une adresse e-mail correcte");
    event.preventDefault();
}






});