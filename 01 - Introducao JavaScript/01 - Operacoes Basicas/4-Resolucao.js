/* Utilize if...else para escrever um código que defina três variáveis com os valores dos
 três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos
 de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar
 uma mensagem de erro. */

const angule1 = 100;
const angule2 = 30;
const angule3 = 45;
const sumAngle = angule1 + angule2 + angule3;

if (angule1 > 0 && angule2 > 0 && angule3 > 0) {
    if (sumAngle === 180) {
        console.log("É triângulo, pois a soma deu 180 graus.");
    } else {
        console.log(`Não é triângulo, pois a soma dos ângulos internos deu: ${sumAngle}. Para os ângulos serem de um triângulo válido, a soma dos três ângulos deve ser 180 graus.`);
    }
} else {
    console.log("Por Favor, informe angulos válidos!");
}
