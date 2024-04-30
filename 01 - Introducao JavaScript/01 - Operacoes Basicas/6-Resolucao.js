/* Utilize if...else para escrever um código que defina três números em variáveis e
retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
Faça esse exercício utilizando somente um if. */

const number1 = 87;
const number2 = 9;
const number3 = 45;
let isAnyEven = false;

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
    isAnyEven = true;
} else {
    isAnyEven = false;
}
console.log("Pelo menos um dos números é par?", isAnyEven);
