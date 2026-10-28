/*Ejercicio 1: Verificar si un número es positivo, negativo o cero
Escribe una función llamada verificarNumero que reciba un número como argumento y devuelva si el número es positivo, negativo, o cero.*/

function verificarNumero (numero) {
    if (numero < 0) {
        return('El numero es negativo')
    }
    else if (numero >= 1) {
        return('El número es positivo')
    }
    else {
        return('El numero es 0')
    }
}
console.log(verificarNumero(-2))
/*Ejercicio 2: Edad legal para votar
Escribe una función llamada puedeVotar que reciba la edad de una persona y devuelva si una persona tiene 18 años o más y devuelva "Puede votar" o "No puede votar".*/

function adulto (edad) {

    if (edad <= 18) {
       return('No puede votal')
    }
    else {return('Puede votar')}
}
console.log(adulto(5))

//Ejercicio 3: Mayor de dos números Escribe una función llamada mayorDeDos que reciba dos números y devuelva el mayor de los dos. Si son iguales, devuelve un mensaje indicando que son iguales.



/*Ejercicio 4: Determinar si un número es divisible por 5
Escribe una función llamada esDivisiblePorCinco que reciba un número y devuelva true si el número es divisible por 5 o false si no lo es.*/



/*Ejercicio 5: Clasificar nota de examen
Escribe una función llamada clasificarNota que reciba una nota entre 0 y 100 y devuelva una clasificación:

    Nota >= 90: "Excelente"
    Nota >= 70 y < 90: "Buena"
    Nota >= 50 y < 70: "Regular"
    Nota < 50: "Insuficiente"
*/