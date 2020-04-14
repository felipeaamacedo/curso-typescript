"use strict";
console.log('Seção 4: Typescript e os Novos Recursos ECMAScript');
console.log('--------------------------------------------------');
//AULA 45 LET e CONST
//comando LET é a nova forma de criar variáveis, ela é muito importante pois podemos criar variáveis em escopo local, e não somente global, como era o caso do VAR (que ainda pode ser utilizado.)
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = "Colocar o casaco!";
    console.log(acao);
}
//Constantes não podem ser alteradas no meio do código, como o código está tentando mudar cpf, e pelo atributo 'target' no arquivo package.json ser es6, o código gera um erro e não funciona tanto no Typescript quanto no Browser. Se mudarmos o 'target' para es6 Typescript gerará um erro, entretanto o browser não. Vale lembrar que o CONST também tem escopo de bloco comoassim como LET.
const cpf = '123.456.789-10';
//cpf = '123.123.123-02'
console.log(cpf);
//AULA 47 ARROW FUNCTION
//arrow function é uma das maneiras de se declarar uma função. Ela é uma função que tem forma reduzida, essa função é sempre anônima, ou seja, uma função sem nome que precisa ser atribuida a uma constante. É utilizada em duas ocasiões: quando se quer escrever uma função pequena, de uma linha apenas; ou quando se atribui ao "this" ao se trabalhar com classes e objetos.É utilizada a partir da sintaxe (variáveis da função):tipo => resultado
//FUNCTION TRADICIONAL
let somaFunctionTradicional = function (nr1, nr2) {
    return nr1 + nr2;
};
console.log(`FUNCTION TRADICIONAL: A soma de 3 + 3 é ${somaFunctionTradicional(13, 24)}`);
//FUCTION EM ARROW FUNCION
let somaArrowFunction = (n1, n2) => n1 + n2;
console.log(`ARROW FUNCTION: A soma de 2 + 3 é ${somaArrowFunction(2, 3)}`);
//# sourceMappingURL=ecmascript.js.map