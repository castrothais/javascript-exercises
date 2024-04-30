/* Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de
asteriscos de tamanho n. Por exemplo: */
/*

n = 5

*****
*****
*****
*****
*****

*/

for (let i = 0; i < 5; i += 1) {
    let line = "";
    for (let j = 0; j < 5; j += 1) {
        line += "*";
    }
    console.log(line);
}
