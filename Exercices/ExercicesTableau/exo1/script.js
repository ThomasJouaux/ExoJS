let numbers = []
  
const length = parseInt(prompt("taille?"))
while (numbers.length != length) {

  number = parseInt(prompt("Saisir un nombre"))
  numbers.push(number)
}

console.log(numbers)