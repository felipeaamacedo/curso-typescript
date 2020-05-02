"use strict";
//
// TOC
// 1. Modulos
// 2. Instalando SystemJS 0.x
// 3. Carregando módulos
// 4. Importando e Exportando Modulos
// 5. A propriedade 'module' no TSConfig
// 6. Usando padrão CommonsJS
// 7. Resumo Namespaces Vs Modulos
//
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//AULA 89 - MÓDULOS
//modulos são partes de códigos que ficam em arquivos secundários, que exportam códigos, para um arquivo principal que importa esses códigos. São usados quando é necessário modularizar o programa, com objetivo de facilitaro troubleshooting. São geralmente armazenados em uma pasta, com um arquivo principal e outros secundários, de mandeira que, nos arquivos secundários, cada função ou atributo ou variável/constante que seja necessário importar, é adicionado a palavra 'export' antes da inicialização dessas palavras. No arquivo principal, é utilizado o comando import { <oque_quer_que_importe> from './fonte_do_import', sendo neste caso para um módulo armazenado localmente.
//import { areaRetangulo } from './retangulo'
//import { areaCircunferencia } from './circunferencia'
var retangulo_1 = __importDefault(require("./retangulo"));
var circunferencia_1 = require("./circunferencia"); //mudar o nome que será chamado usando o 'as <nome desejado>'
console.log('Estou no modulo.ts');
console.log(retangulo_1.default(7, 8));
console.log(circunferencia_1.areaCircunferencia(4));
//AULA 91 CARREGANDO MODULOS
// os BROWSER utilizados não tem a capacidade de entender o javascript gerado pelo TS quando trabalhados com modulos, somente o nodejs, para conseguir carregar módulos no JS podemos usar bibliotecas profissionais como o webpacke o Gulp, ou bibliotecas mais simples como o SystemJS. Nesse tópico será utilizado o system.js para fazer o trabalho de encontrar as outras pastas e juntar os módulos. Essa biblioteca pode ser encontrara no nodejs ou na internet sendo necessário somente baixar o arquivo system.js. No nodejs para instalar o system.js você pode instalar com o comando "npm i -s systemjs@0.21.6"
//para importar no projeto com o system, é necessário indicar o caminho do arquivo no <script src="caminho system.js> e indicar o caminho baseUrl que é o ponto em "./..." que é usado nos arquivos
/*
<script>
              SystemJS.config({
                         baseUrl: '/06_2_modulos',
                         packages:{
                                  '/06_2_modulos':{
                                          defaultJSExtension: true
                                    }
                            }
                    })
                    SystemJS.import('./06_2_modulos/modulos.js')
</script>
*/
//AULA 92 - IMPORTANDO E EXPORTANDO MODULOS
// outra maneira de chamar os módulos importados no arquivo principal é usando o ' as <nomedesejado>' é utilizado quando você possui nomes de módulos grandes, podendo encurtar como o caso do areaCirculo por somente circ. É usado bem na hora que usa o " import { areaCircunferencia as circ } from './circunferencia'"
// AULA 93 - A PROPRIEDADE MODULE NO TSCONFIG
// essa propriedade do 'module' no TS config determina como o arquivo em JS será gerado. Se caso usarmos o es6, o arquivo gerado possui o padrão do es6 do JS. Entretanto o SystemJS não identifica. Para o SystemJS é necessário usar o commonjs.
//AULA 94 - USANDO O PADRAO COMMONSJS (require / module.export)
// estamos usando outro padrão de export import do node, que é o module.export -  no arquivo de export, e o require. 
var digaOi = require('./novo').digaOi;
console.log(digaOi('Ana'));
//AULA 95 - NAMESPACES VS MODULOS
//NAMESPACE
//pros:
//* organização feita com objetos
//* pode ser separado em vários arquivos
//* não há necessidade de loaders (transpilers SystemJS)
//cons:
//* Gerenciamento de dependencias torna-se complicado em aplicacoes grandes - está aberto a todos
//
//MODULOS
//pros:
//*organização feita com modulos reais
//*APP pode ter multiplos modulos reais
//cons:
//*precisa de um loader para ir para o browser (transmiler systemjs ou webpack, gulp etc)
//pros&cons:
//*declaracao explicita de dependencias
