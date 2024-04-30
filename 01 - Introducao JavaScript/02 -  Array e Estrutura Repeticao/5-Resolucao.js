/* Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos
de base. Por exemplo:

n = 5

*
**
***
****
*****

*/
const asteris = "*";
let space = " ";
for (let i = 0; i < 5; i += 1) {
    space += asteris;
    console.log(space);
}
