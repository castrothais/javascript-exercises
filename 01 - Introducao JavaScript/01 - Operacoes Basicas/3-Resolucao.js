/* Utilize if/else para escrever um código que imprima o maior de três números.
Defina, no começo do seu código, três variáveis com os valores que serão comparados. */

const num1 = 30;
const num2 = 15;
const num3 = 15;

if (num1 > num2 && num1 > num3) {
    console.log(`O maior número é o ${num1}`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`O maior número é o ${num2}`);
} else if (num3 > num1 && num3 > num2) {
    console.log(`O maior número é o ${num3}`);
} else {
    console.log("Tem números iguais");
}
