//PERGUNTAS
// 1. qual a diferenca entre types e interfaces? pelo o que eu entendi estamos criando um tipo diferente.
// 2. não entendi a vantagem de se usar uma interface com uma classe, como funciona na prática?
//
//
//INTERFACE
//é uma obrigação que você define de para que variaveis/constantes, funções e classes, atendam o que você predefiniu de acordo com a interface.
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
var pessoa = {
    nome: 'João',
    idade: 27,
    saudar: function (sobrenome) {
        console.log('Olá meu nome é ' + sobrenome + ', ' + pessoa.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//AULA 100 - Interfaces e Propriedades
//
//saudarComOla({nome:'Jonas', idade:27, altura:1.90})
// AULA 101 - INTERFACES E METODOS
pessoa.saudar('Aroldo');
//AULA 102 - USANDO INTERFACES COM CLASSES
// uma classe implementa uma interface, desta forma, a classe deve respeitar parâmetros da interface, sendo neste contexto seus atributos.Deve ser usado quando você deseja que uma classe necessite ser compatível com uma determinada interface. Para que uma Classe implemente uma interface, você deve usar a sintaxe (class <nome_da_classe> implements <nome_da_interface>{}, e desta forma, todos os atributos que constam na classe devem respeitar a Interface, i.e. devem por obrigação ter as propriedades obrigatórias da classe, e ter definido os metodos.
var Clientes = /** @class */ (function () {
    function Clientes() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    Clientes.prototype.saudar = function (sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    };
    return Clientes;
}());
var meuCliente = new Clientes();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
var potencia;
potencia = function (base, exp) { return Math.pow(base, exp); };
console.log('POTENCIA DE 2 NA BASE 3 EM 1 LINHA: ' + potencia(3, 2));
var RealA = /** @class */ (function () {
    function RealA() {
    }
    RealA.prototype.a = function () { };
    return RealA;
}());
var RealAB = /** @class */ (function () {
    function RealAB() {
    }
    RealAB.prototype.a = function () { };
    RealAB.prototype.b = function () { };
    return RealAB;
}());
var RealABC = /** @class */ (function () {
    function RealABC() {
    }
    RealABC.prototype.a = function () { };
    RealABC.prototype.b = function () { };
    RealABC.prototype.c = function () { };
    return RealABC;
}());
var AbstrataABD = /** @class */ (function () {
    function AbstrataABD() {
    }
    AbstrataABD.prototype.a = function () { };
    AbstrataABD.prototype.b = function () { };
    return AbstrataABD;
}());
// AULA - 105 - COMO INTERFACE É TRADUZIDA PARA JS
// o implements é um recurso que está presente somente no TS, serve apenas para checar as variáveis, não está presente no JS.
// AULA 106 - USO DE INTERFACES PARA EXTENDER OBJECT
// funciona para poder facilitar um exemplo o console.log escrevendo x.log
//
