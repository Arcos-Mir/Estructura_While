/* while */

/* Ejercicio 1 el programa dbe preguntar al usuario un número y mostrar los que son multiplos de 5 */

let number = prompt("Escribe un número");
let i = 1;
console.log("Mi número es: ",number);

do {

    if (i % 5 === 0) {
        console.log(i, "es múltiplo de 5");
    }
    i++;
}
while (i < number);


/* Ejercicio 2 pedir al usuario 2 números entre 1 y 50, mostrar en consola los números del 1 al 50, añadiendo el mensaje "Loteria" solo al mostrar los números indicados por el usuario */

let num1 = prompt("Ingresa un número entre 1 y 50");
let num2 = prompt("Ingresa otro número entre 1 y 50");
let x = 0;

console.log( "Ingresaste éstos números: ", num1 + " y " + num2);

while (x <= 50) {

    if (num1 == x ) console.log(num1, "Lotería");
    if (num2 == x ) console.log(num2, "Lotería");

    console.log(x);
    x++;
} 

/* do {
    
    if (num1 == i ) console.log(num1, "Lotería");
    if (num2 == i ) console.log(num2, "Lotería");
    
    i++;
}
while ( i <= 50); */

/* Ejercicio 3 pedir al usuario números, los números guardarlos en un arreglo, mostrar en consola los números indicados por el usuario */

let numbers = prompt("Ingresa varios números separados por comas ',' y para terminar agrega un '0' ");
let arrayNum = [];
let n = 0;

while (n == 0) {
    
    if (numbers != 0) {
        
        arrayNum.push(numbers);
        console.log("Mis números son: ", arrayNum);
    } else {

    }
    break;
}

/* Ejercicio 4 Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas. */

/* let word = prompt("Escribe letras o palabras");
let word2 = prompt("Escribe letras o palabras");
let word3 = prompt("Escribe letras o palabras");

console.log("Las palabras son: ", word + " " + word2 + " " + word3); */

let word = " ";
const words = [];
let arrayW = document.querySelector("#arrayW") 
let n1 = 0;

while (n1 < 5) {
    
    if (word == word) {
        
        let word = prompt("Escribe letras o palabras");
        words.push(word);
    }
    arrayW.innerHTML = (words.join(" - "));
    console.log(words.join(" - "));
    n1++;
}

/* Ejercicio 5  Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información. */

let diaSemana = " ";

while ( diaSemana != "domingo") {
    
    let diaSemana = prompt("Ingresa un día de la Semana 👍");
    
        
    switch(diaSemana) {
        case "lunes":
            alert("Feliz inicio de Semana 💪 ☕");
            break;
        case "martes":
            alert("Hechale Ganas!!! 🙌");
            break;
        case "miercoles":
            alert("Mitad de semana Vamos!!! tú puedes 👊");
            break;
        case "jueves":
            alert("Casi es Viernes 😁");
            break;
        case "viernes":
            alert ("Es viernes y el cuerpo lo sabe 🚘 🍸");
            break;
        case "sabado":
            alert("sabado de fiesta 🎉");
            break;
        default:
            alert("Ingresa un día válido 🚫");
            break;  /*si le dejo el default y escribo domingo, aparece el alert donde me dice ingresar un día válido se le da enter y despues se cierra el programa*/
        }if( diaSemana == "domingo") {
            alert("Ve a Descansar 😴");
            break;
        }
}
diaSemana++;





