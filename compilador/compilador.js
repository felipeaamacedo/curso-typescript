"use strict";
var changeChapter = "Chapter 3: Tipos";
var space = "--------------------------------";
console.log(' ');
console.log(changeChapter);
console.log(space);
// AULA 34 Introdução ao módulo
// entendendo como o compilador de TypeScript funciona
// com o código abaixo o typescript gera um erro onde está escrito "canal = inscritos" pois canal não tem o mesmo tipo que inscritos. Entretanto, mesmo assim o arquivo JS é gerado, e é possivel compilá-lo.
var canal = "Gaveta";
var inscritos = 60123;
//canal = inscritos
console.log("Canal = " + canal);
//Para fazer com que o typescript não compile o arquivo, é necessário ir no arquivo de configuração do typescript, "tsconfig.json" e adicionar o código ""noEmitOnError": true,".
// Você pode testar comentando ou não o código "canal = inscritos", com o comando "noEmitOnError": false,
