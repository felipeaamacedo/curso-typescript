"use strict";
// TABLE OF CONTENTS
//
// 1. Classes & Atributes
// 2. Desafio classe Produto
// 3. Classes & Métodos
// 4. Desafio Método
// 5. Modificadores de Acesso
// 6. Herança
// 7. Getters & Setters
// 8. Membros Estáticos
// 9. Construtor Privado & Singleton
// 10. Atributos Somente Leitura
// 11. Desafio do Módulo
// 12. Conclusão
//
//
//AULA 63 - CLASSES & ATRIBUTOS PART 1
class TData {
    //CRIAÇÂO DO CONSTRUTOR PARA CRIAR A CLASSE palavra constructor(atributos que devem ser atribuidos como parâmetros inicializadores){abre e fecha chaves, com os inicializadores this.atributo = atributo}
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
//CRIAÇÃO DE OBJETOS INSTANCIANDO CLASSES
//primeiro você cria uma variável||constante e depois você com a palavra "new" antes, cria o objeto usando o pŕoprio nome da classe e o construtor com os atributos.  
const aniversario = new TData(16, 5, 1991);
console.log(aniversario);
aniversario.mes = 4;
console.log(aniversario);
//METODO DE CRIAÇÃO DE CLASSES SEM PRECISAR COLOCAR OS INICIALIZAR OS ATRIBUTOS DENTRO DO CONSTRUCTOR
//ao colocar os atributos dentro do parênteses, antes de escrever o atributo, colocar a palavra public||private.
class TDataEsperta {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const casamento = new TDataEsperta(13, 9, 2020);
console.log(casamento);
casamento.mes = 7;
console.log(casamento);
//AULA 65 - DESAFIO PRODUTO
//Atributos:nome, preco, desconto
//Criar o construtor
//OBS 1: Desconto é opcional (valor padrão 0)
//OBS 2: Criar 2 produtos: passando dois e três params
class TProduto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.precoDesconto = this.preco * (1 - this.desconto);
    }
}
const banana = new TProduto('banana', 2);
console.log(banana);
const laranja = new TProduto('laranja', 4, 0.10);
console.log(laranja);
//# sourceMappingURL=classes.js.map