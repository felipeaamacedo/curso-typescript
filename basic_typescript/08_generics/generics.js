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
//AULA 112-113: ARRAY COM GENERICS
//o generics � gen�rico do ponto de vista da pessoa que est� construindo, uma vez que ele constroi a fun��o tendo em vista o usu�rio especificar o tipo ao usar. Isso � uma forma de fortalecer o que o o usu�rio ir� usar.
var notasDosAlunos = [5.5, 7.1, 8.2];
notasDosAlunos.push(9.0);
notasDosAlunos.push(7.9);
//notasDosAlunos.push('8.4') //neste caso temos um erro pois o usu�rio especificou um tipo para a fun��o generics Array.
console.log(notasDosAlunos);
