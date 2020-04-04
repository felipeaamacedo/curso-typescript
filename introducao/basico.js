"use strict";
// PRÉ REQUISITOS PARA RODAR O TYPESCRIPT
// 1. Instalar o node.js
// 2. Digitar cmd no windows e digitar o comando "npm i -g typescript" e em seguida checar a versão do typescript com o comando "tsc -v"
// 3. Instalar o VS Code;
// COMO COMPILAR UM ARQUIVO TYPESCRIPT MANUALMENTE
// 1. digitar o comando "tsc --init" para iniciar o projeto de typescript e criar o arquivo "tsconfig.json"
// 2. pelo terminal digitar o comando "tsc <nome do arquivo>.ts" que irá gerar um arquivo "<nome do arquivo>.js"
// 3. a partir daí é possível rodar o arquivo JavaScript pelo browser ou pelo próprio node, usando o comando "node <nome do arquivo>.js"
// COMPILANDO ARQUIVOS TYPESCRIPT USANDO O CODE RUNNER
// 1. instalar coderunner pela loja de extensões do VSCODE (comando Ctrl + Shift + X)
// 2. instalar no command prompt o ts-node, através do comando "npm i -g ts-node" OBS: Um warn de dependencias foi gerado mas não tem problema
// 3. a partir desse momento é possivel compilar e rodar o arquivo do typescript diretamente pelo VSCode através do shortcut Ctrl + Alt + N
// EXECUTANDO DIRETO DO BROWSER
// 1. criar um arquivo chamado "index.html" dentro da pasta root do projeto;
// 2. adicionar nesse arquivo no campo de body um <script src='caminho para o arquivo'></script> nesse caso o caminho seria introcucao/basico.js
// 3. na mesma pasta root, digitar o comando "npm init -y", para criar um arquivo de configuração chamado "package.json"
// 4. em seguida instalar o live-server com o comando "npm i -s live-server"
// 5. dentro do arquivo package.json na área "scripts" inserir o comando "start": "live-server"
// OBS neste momento, já é possível usar o comando "npm start" dentro da pasta root do projeto para rodar o código.
//6. Utilizar o comando npm start para iniciar o projeto no browser,
//7. abrir um novo terminal e usar o comando "tsc -w" que o typescript fica em modo WATCH e qualquer modificação do arquivo, quando salvo, ele já é compilado e a modificação aparece no browser.
//RESUMO DE COMANDOS PARA INSTALAR TYPESCRIPT
//1. npm i -g typescript
//2. tsc --init
//3. npm i -g ts-node
//4. npm init -y
//5. npm i -s live-server e inserir comando "start":"live-server" under package.json file
//RESUMO DE COMANDOS PARA RODAR TYPESCRIPT E COMPILAR AUTOMATICAMENTE NO BROWSER
//npm start
//tsc -w 
var changeChapter = 'Chapter 1: básico';
var space = '-----------------------------';
console.log(changeChapter);
console.log(space);
// Início dos exercícios do capítulo.
var a = 'To no TypeScript com direito a servidor ao vivo, bitchessss!!';
console.log(a);
