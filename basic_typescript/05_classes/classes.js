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
//AULA 67 - CLASSES & METODOS
//é o nome dado a funções que estão dentro de uma classe.
class TProduto2 {
    constructor(nome, preco, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa ${this.preco} com um desconto de ${this.desconto * 100}%`;
    }
}
const prod1 = new TProduto2('Caneta BIC', 0.80, 0.10);
console.log(prod1.resumo());
//Desafio CLASSES & METODOS
//Criar método precoComDesconto
//Quais são os parâmetros e o retorno
//Alterar método resumo para mostrar o preço com desconto
//
class TProduto3 {
    constructor(nome, preco, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} custa ${this.preco} com um desconto de ${this.desconto * 100}% o preço se torna ${this.precoComDesconto()}`;
    }
}
const prod2 = new TProduto3('Caneca Star Wars', 4.50, 0.10);
console.log(prod2.resumo());
//AULA 70 - MODIFICADORES DE ACESSO (PUBLIC, PRIVATE, PROTECTED)
//são as tags public e private que são colocadas quando se deseja deixar alguns parametos ocultos(private) ou não (public) para os usuários no frontend, no caso dos parametros protected, eles são parametros com o comportamento privado, que entretanto são transmitidos para outras classes que herdam atributos/metodos da classe pai. São colocados antes dos atributos das classes, como no exemplo: private velocidadeAtual:number = 0.
//CONCLUSÃO:
//PUBLIC: informações visíveis para todos
//PRIVADO: informações privadas do mundo não é visível para os outros, estão escondidas dentro da estrutura.
//PROTECTED: visivel dentro da própria classe, e transmitido por herança
//
//PRIVADO < PROTECTED < PUBLIC
//
//OBS: Apesar desses tipos de modificadores de acesso existirem no TS, no JS eles não existem, então caso o noEmitOnError estiver = false, apesar de errado no TS, o arquivo JS será gerado, e mesmo tentando acessar o atributo privado no TS e gerando um erro, o erro irá aparecer no browser, pois o JS é gerado de qualquer forma.
//
class TCarro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        if (novaVelocidade <= this.velocidadeMaxima && novaVelocidade >= 0) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual >= this.velocidadeMaxima ? this.velocidadeAtual : this.velocidadeAtual = 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(+5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
let carro1 = new TCarro('Ford', 'Fiesta', 130);
Array(50).fill(0).forEach(() => carro1.frear()); //O forEach tem como input uma function que é aplicada em todos os campos do Array.
console.log(`VELOCIDADE ATUAL: ${carro1.frear()}`);
//AULA 70 - HERANÇA
//é a capacidade da OOP de reutilizar códigos. Onde uma classe é composta por outra classe, reutilizando o código de outra classe. Ex. Classe TRobo tem dentro Classe TJuntas. É utilizado quando uma classe usa atributos de outra classe no seu código. A herança é criada ao utilizar a palavra 'extends' seguido da classe que ela herda atributos, exemplo
//
//class <classe filha> extends <classe pai>
//
//class TRobo extends TJunta
class TFerrari extends TCarro {
    //como a marca do construtor TCarro vai ser sempre ferrari podemos criar um novo construtor enviando somente 2 atributos, modelo e velocidadeMaxima. Para isso criamos um novo construtor, com os 2 parâmetros de entrada, e usamos dentro dele o parâmetro super() é como você estivesse chamando o construtor PAI e inserindo seus atributos. No caso ferrari, serão 'Ferrari', modelo, e velocidadeMaxima, sendo esses dois últimos inseridos ao criar uma FERRARI.
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(+20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new TFerrari('Ferrari', 'F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
//# sourceMappingURL=classes.js.map