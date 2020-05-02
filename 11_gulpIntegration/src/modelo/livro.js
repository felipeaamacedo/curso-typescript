"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Livro = /** @class */ (function () {
    function Livro(nome, preco, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    Livro.prototype.precoComDesconto = function () {
        return this.preco * (1 - this.desconto);
    };
    return Livro;
}());
exports.default = Livro;
