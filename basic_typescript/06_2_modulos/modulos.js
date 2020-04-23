//AULA 89 - MÓDULOS
//modulos são partes de códigos que ficam em arquivos secundários, que exportam códigos, para um arquivo principal que importa esses códigos. São usados quando é necessário modularizar o programa, com objetivo de facilitaro troubleshooting. São geralmente armazenados em uma pasta, com um arquivo principal e outros secundários, de mandeira que, nos arquivos secundários, cada função ou atributo ou variável/constante que seja necessário importar, é adicionado a palavra 'export' antes da inicialização dessas palavras. No arquivo principal, é utilizado o comando import { <oque_quer_que_importe> from './fonte_do_import', sendo neste caso para um módulo armazenado localmente.
System.register(["./retangulo", "./circunferencia"], function (exports_1, context_1) {
    "use strict";
    var retangulo_1, circunferencia_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (retangulo_1_1) {
                retangulo_1 = retangulo_1_1;
            },
            function (circunferencia_1_1) {
                circunferencia_1 = circunferencia_1_1;
            }
        ],
        execute: function () {
            console.log('Estou no modulo.ts');
            console.log(retangulo_1.areaRetangulo(7, 8));
            console.log(circunferencia_1.areaCircunferencia(4));
        }
    };
});
//# sourceMappingURL=modulos.js.map