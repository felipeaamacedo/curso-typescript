//AULA 89 - MÓDULOS
//modulos são partes de códigos que ficam em arquivos secundários, que exportam códigos, para um arquivo principal que importa esses códigos. São usados quando é necessário modularizar o programa, com objetivo de facilitaro troubleshooting. São geralmente armazenados em uma pasta, com um arquivo principal e outros secundários, de mandeira que, nos arquivos secundários, cada função ou atributo ou variável/constante que seja necessário importar, é adicionado a palavra 'export' antes da inicialização dessas palavras. No arquivo principal, é utilizado o comando import { <oque_quer_que_importe> from './fonte_do_import', sendo neste caso para um módulo armazenado localmente.


import { areaRetangulo } from './retangulo'
import { areaCircunferencia } from './circunferencia'

console.log('Estou no modulo.ts')
console.log(areaRetangulo(7,8))
console.log(areaCircunferencia(4))

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


