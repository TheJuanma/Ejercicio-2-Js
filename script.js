/* 1. Crear un array vacío, luego generar 10 números al azar 
y guardarlos en un array. Mostrar en consola el resultado del array. 

//let randomNumber = Math.floor(Math.random() * 10); Me generara un numero aleatorio entre 0 y 9.
//Math.random es un metodo me va generar un numero aleatorio pero en el rango de 0 ~ 1 entonces sera muy pequeño.
//Se multiplica por 10 para que el numero este en rando de 0 ~ 9 ej: Numero random 0.464 * 10 = 4.64
//Math.floor es un metodo y lo que hara es coger el numero con decimales y radondearlo hacia abajo y que quede entero.

const emptyArray = []; //Arreglo vacio

//Genero un iterador para generar los elementos de mi array
for (let i = 0; i < 10; i++) { 
    let randomNumber = Math.floor(Math.random() * 10);
    emptyArray.push(randomNumber);
    //console.log(emptyArray);
}

console.log(emptyArray);
*/

/* 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir 
en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado. 

let numbers = prompt(`Generer un texto que en vez de estar separado por espacios este separado por comas`);
const numbersArray = numbers.split(",");

console.log(numbersArray);
*/


/* 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: 
El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor.
Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo. 

const array = [10,40,30,20,15,5];

//Utilice el operador de programación `...` para que me separara individualmente los elementos de mi array.
//El metodo .max y .min me miran todo los numeros de mi array y escogen el mayor y el menor. 
//Este metodo solo espera elementos individuales. Por eso utilice el `...`
let maxNumber = Math.max(...array); 
let minNumber = Math.min(...array);

console.log(`Este es el menor numero de array: ${minNumber}`);
console.log(`Este es el mayor numero de array: ${maxNumber}`);
*/