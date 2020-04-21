"use strict";
// TABLE OF CONTENTS
//
// 1. Classes, atributos & construtores 
// 2. Desafio classe Produto
// 3. Classes & Métodos
// 4. Desafio Método
// 5. Modificadores de Acesso
// 6. Herança
// 7. Getters & Setters
// 8. Membros Estáticos
// 9. Classe Abstrata
// 10. Construtor Privado & Singleton
// 11. Atributos Somente Leitura
// 12. Desafio do Módulo
// 13. Conclusão
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
const f40 = new TFerrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
// AULA 73 - GETTERS AND SETTERS
// é uma metodologia de acessar e atribuir valores aos atributos da classe. Usualmente nas linguagens de programação normal, é utilizado criando-se um método com o nome get ou set seguido do nome do atributo e.g. getIdade, mas em TS e JS é utilizado com uma variável, sa seguinte forma "get idade" ou "set idade". É utilizado quando é necessário acessar algum parâmetro privado, fazendo validações, um exemplo é se o usuário tentasse inserir uma idade negativa, com o get/set é possível validar se a idade é negativa ou não. É usada dentro da classe, a partir das palavras get e set.
//
// uma vantagem da variável get e set no TS, JS em relação às outras linguagens, é que você não precisa ficar criando diversos get set para todos os atributos, você utiliza somente nas necessárias, quando esse atributo requer algum tipo de validação. Ainda, se durante o desenvolvimento você descobrir que algum get/set precisa ser criado, você pode facilmente criar adicionando o get ou set na frente, mas sem ter que mudar em todo o código a estrutura de chamada, já que o pessoa1.idade, não precisa ser alterado para pessoa1.getIdade por exemplo.
//
class TPessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new TPessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -3;
console.log(pessoa1.idade);
//AULA 74 - MEMBROS ESTÁTICOS
//quando estático o  tributo/método é da classe e não da instância, desta forma a classe tem um papel maior, pois não é necessário criar uma instância para poder usar os métodos. É utilizado quando se trabalha com criação de classes que não tem a necessidade de criar uma instância para usar os atributos/métodos. Um exemplo seria uma biblioteca de funções matemáticas, como a Math. Para declarar um membro estático, é necessário, somente adicionar a palavra 'static' antes do atributo/metodo.
//
class Matematica {
    constructor() {
        this.PI = 3.14;
    }
    areaCirc(raio) {
        return this.PI * Math.pow(raio, 2);
    }
}
let mat = new Matematica;
console.log("ÁREA DO CIRCULO CRIANDO INSTANCIA COM MATEMATICA: " + mat.areaCirc(2));
class MatematicaEstatico {
    static areaCirc(raio) {
        return this.PI * Math.pow(raio, 2);
    }
}
MatematicaEstatico.PI = 3.14;
console.log("ÁREA DO CIRCULO COM MATEMÁTICAESTÁTICO: " + MatematicaEstatico.areaCirc(2));
//AULA 75 - CLASSE ABSTRATA
//é um conceito em OOP onde uma classe é criada mas não serve para ser instanciada, somente usada como classe PAI de outras classes que essas sim serão instanciadas. É especifico do Typescript, não está presente no JS mas está em outras linguagens de programação mais baixo nível (C++, Object PASCAL, JAVA etc...).  É utilizada quando necessita criar uma classe que não tem como objetivo ser instanciada e no caso nem é possível ser instanciada, mas ser a classe PAI de outras classes. É utilizada como template geral, por exemplo, Garrafa de café, garrafas de café tem vários tipos e formatos, que as vezes funcionam de maneira diferente, exemplo garrafa de bomba e garrafa de tampa, com isso você consegue criar funções inacabadas, como exemplo um método colocarCafe que deve ser discriminado em suas classes filhas. Essa classe é criada simplesmente adicionando a palavra 'abstract' antes do 'class', e os métodos abstratos podem ser discriminados escrevendo, da mesma forma, 'abstract' antes, e sem abrir e fechar chaves.  
//
//polimorfismo - uma classe tem várias formas, aquela classe Calculo tem uma hora forma de Soma, outra hora de Multiplicação, etc...
class TCalculo {
    constructor() {
        this._resultado = 0;
    }
    get resultado() {
        return this._resultado;
    }
}
class TSoma extends TCalculo {
    executar(...numeros) {
        this._resultado = numeros.reduce((total, adicionando) => total + adicionando);
    }
}
class TMultiplicacao extends TCalculo {
    executar(...numeros) {
        this._resultado = numeros.reduce((total, adicionando) => total * adicionando);
    }
}
let c1 = new TSoma;
c1.executar(2, 3, 4, 5);
console.log(`O RESULTADO DA SOMA DE 2,3,4,5 É ${c1.resultado}`);
c1 = new TMultiplicacao;
c1.executar(2, 3, 4, 5);
console.log(`O RESULTADO DA MULTIPLICAÇÃO DE 2,3,4,5 É ${c1.resultado}`);
// AULA 76 - CONSTRUTOR PRIVADO & SINGLETON
// O singleton é utilizado quando você quer trabalhar com uma única instância, mas que ao mesmo tempo você gostaria de receber métodos e atributos de uma outra classe com a propriedade de herança. Criar uma classe com um número definido de instancias criadas. 
class TUnico {
    constructor() { }
    static getInstance() {
        return TUnico.instance;
    }
    agora() {
        return new Date;
    }
}
TUnico.instance = new TUnico;
console.log(TUnico.getInstance().agora());
//AULA 77 - Atributos somente leitura
//
class TAviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new TAviao('Tu-114', 'PT-ABC');
//Nesse caso se eu tentar mudar os atributos modelo e prefixo, o TS gera um erro, para alertar que esses atributos são do tipo readonly. Se o atributo noEmitOnError estiver false, o JS será gerado e essa alteração será visualizada no Browser, entretanto, se estiver true, o TS não será gerado.
//
//turboHelice.modelo = 'DC-8'
//turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice);
//# sourceMappingURL=classes.js.map