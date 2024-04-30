const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* 1 - Percorra o array imprimindo todos os valores contidos nele
com a função console.log(). */

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}
/* 2 - Some todos os valores contidos no array e imprima o resultado. */
let sumNumbers = 0;
for (let j = 0; j < numbers.length; j += 1) {
    sumNumbers += numbers[j];
}
console.log(`Soma de todos os números é: ${sumNumbers}`);

/* 3 - Calcule e imprima a média aritmética dos valores contidos no array.
A média aritmética é o resultado da soma de todos os elementos dividido pelo
número total de elementos. */
const media = sumNumbers / (numbers.length);
console.log(`Média: ${media} `);

/* 4 - Com base no código que acabou de gerar, referente ao cálculo da média aritmética,
faça com que: caso o valor final seja maior que 20, imprima a mensagem
“O valor da média aritmética é maior que 20”; e, caso não seja maior que 20,
imprima a mensagem “O valor da média aritmética é menor ou igual a 20”. */
if (media > 20) {
    console.log("O valor da média aritmética é maior que 20");
} else {
    console.log("O valor da média aritmética é menor ou igual a 20");
}

/* 5 - Utilizando o for, descubra o maior valor contido no array e imprima-o. */
let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
        higherNumber = numbers[index];
    }
}
console.log(`O maior número é: ${higherNumber}`);

/* 6 - Descubra quantos valores ímpares existem no array e imprima o resultado.
Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”. */

let oddAmount = 0;
for (let k = 0; k < numbers.length; k += 1) {
    if (numbers[k] % 2 !== 0) {
        oddAmount += 1;
    }
}
if (oddAmount === 0) {
    console.log("Nenhum valor ímpar encontrado");
} else {
    console.log(`O array possui ${oddAmount} número ímpares`);
}
