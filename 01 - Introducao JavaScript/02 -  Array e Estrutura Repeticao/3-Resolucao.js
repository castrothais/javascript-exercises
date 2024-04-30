/* Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de
inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo.
Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente. */

const word = "banana";

const arrayWord = word.split("");
const reverseWord = arrayWord.reverse().join("");
console.log(reverseWord);
