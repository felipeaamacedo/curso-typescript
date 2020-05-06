"use strict";
// TOC
//
// 1. CRIANDO DECORATOR DE CLASSE
// 2. DECORATOR FACTORY
// 3. ALTERANDO CONSTRUTOR COM DECORATOR DE CLASSE
// 4. ADICIONANDO MÉTODO COM DECORATOR DE CLASSE
// 5. MÚLTIPLOS DECORATORS
// 6. DESAFIO DECORATOR DE CLASSE
// 7. DECORATOR DE MÉTODO
// 8. DECORATOR DE ATRIBUTO
// 9. DECORATOR DE PARÂMETRO
// 10. CONCLUSÃO
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//DEFINIÇÃO DE DECORATOR
//
//AULA 127 - CRIANDO DECORATORS DE CLASSES
//@logarClasse
let Eletrodomestico = 
//@decorator({a:'Teste', b:123})
class Eletrodomestico {
    constructor() {
        console.log('novo...');
    }
};
Eletrodomestico = __decorate([
    logarClasseSe(true)
    //@decorator({a:'Teste', b:123})
], Eletrodomestico);
function logarClasse(construtor) {
    console.log(construtor);
}
//AULA 128 - DECORATOR FACTORY
//É uma função que chama um decorator de dentro, podendo chamar mais de um inclusive.
// addition of decoratorVazio, logarClasseSe, decorator
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return function (construtor) {
        console.log(obj.a + ' ' + obj.b);
    };
}
//# sourceMappingURL=decorators.js.map