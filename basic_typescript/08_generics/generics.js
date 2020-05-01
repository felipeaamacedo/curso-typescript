"use strict";
//TIPO GENERICS
//� um outro tipo que substitui o ANY, e � utilizado quando precisa ter alguma fun��o ou vari�vel mais gen�rica, mas que mesmo assim passe pelo transpiler do TS. 
//
//
function echo(objeto) {
    return objeto;
}
console.log(echo('Jo�o').lenght);
console.log(echo(27).lenght);
console.log(echo({ nome: 'Jo�o', idade: 27 }));
// AULA 111 - CRIANDO UMA FUN��O COM GENERICS
// SINTAX: function nomeDaFuncao <nomeTIpo>(input:nomeTipo):nomeTipo.
// no caso o <nomeTipo> usado por padr�o tipo. O generics permite voc� criar um tipo dessa forma que � definido posteriormente durante o c�digo o tipo � definido. 
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('Jo�o').length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'Jo�o', idade: 27 }).nome);
