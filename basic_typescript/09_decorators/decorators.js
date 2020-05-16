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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// RECURSOS DO CAPÍTULO
// https://www.typescriptlang.org/docs/handbook/decorators.html
//DEFINIÇÃO DE DECORATOR
//
//AULA 127 - CRIANDO DECORATORS DE CLASSES
////@logarClasse
//@logarClasseSe(true)
////@decorator({a:'Teste', b:123})
//class Eletrodomestico{
//constructor(){
//console.log('novo...')
//}
//}
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
//AULA 129 - Alterando construtor com decorator e classe
// substituir a classe por uma herança de uma classe, e essa subclasse tem novos métodos e atributos em relação a classe usada.
//@logarClasse
//@decorator({a:'Teste', b:123})
//@logarClasseSe(true)
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('novo...');
    }
};
Eletrodomestico = __decorate([
    logarObjeto
], Eletrodomestico);
function logarObjeto(construtor) {
    console.log('Carregado...');
    return class extends construtor {
        constructor(...args) {
            console.log('Antes...');
            //como eu quero acessar os atributos e metodos da classe pai, preciso usar a função super
            //alé disso é necessário usar o spread, para separar o array que foi enviado como parâmetro
            super(...args);
            console.log('Depois...');
        }
    };
}
new Eletrodomestico;
new Eletrodomestico;
new Eletrodomestico;
//AULA 135 - Decorador de método
//
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    naoNegativo //AULA 136
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    congelar,
    __param(0, paramInfo)
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(10248.57);
console.log(cc.getSaldo());
cc.sacar(5000);
console.log(cc.getSaldo());
// cc.getSaldo = function(){
// 	return this['saldo'] +7000
// }
console.log(cc.getSaldo());
//Assinatura de um decoretor em função
// Object.freeze()
function congelar(alvo, nomeMetodo, descritor) {
    console.log(alvo);
    console.log(nomeMetodo);
    descritor.writable = false;
}
//AULA 135 Decorator de Atributo
//
function naoNegativo(alvo, nomePropriedade) {
    //deleta a propriedade que foi decorada
    delete alvo[nomePropriedade];
    //criou uma nova com o mesmo nome mas internamente salvando em outra variável e criando as propriedades get e set para poder validar se o número é negativo ou não.
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo["_" + nomePropriedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error('Saldo Inválido');
            }
            else {
                alvo["_" + nomePropriedade] = valor;
            }
        }
    });
}
//AULA 137: Decorator de Parâmetro
//
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log(`Alvo: ${alvo}`);
    console.log(`Método: ${nomeMetodo}`);
    console.log(`Índice Param: ${indiceParam}`);
}
//# sourceMappingURL=decorators.js.map