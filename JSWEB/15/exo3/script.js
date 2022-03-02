let aleatoire = Math.floor(Math.random()*100)
console.log(aleatoire);
function verif(){
    let pop_Up = document.getElementById('button1');
    let proposition = document.getElementById("textBox1").value;
    pop_Up = console.log("Vous avez saisi : "+ proposition);
    if(proposition > aleatoire){
        alert("Votre nombre est plus grand que le nombre magique ! Votre nombre est : "+proposition+" Et le nombre aleatoire est : "+aleatoire);
    }else if(proposition < aleatoire){
        alert("Votre nombre est plus petit que le nombre magique ! Votre nombre est : "+proposition+" Et le nombre aleatoire est : "+aleatoire);
    }else{
        alert("Felicitation ! Vous avez trouvez le bon numero ! ");
    }
};