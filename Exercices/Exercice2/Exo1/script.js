var nombre = window.prompt("Saisissez un nombre");
if(nombre == 0){
    alert("Saisissez un autre nombre");
}else{
    console.log(nombre % 2);
};
if(nombre % 2 == 0){
    alert("Ce nombre est pair");
}else{
    alert("Ce nombre est impair");
}
