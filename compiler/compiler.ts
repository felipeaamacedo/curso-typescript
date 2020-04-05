//INICIANDO A SEÇÃO 3 - ENTENDENDO O COMPILADOR TYPESCRIPT
let section3Inicio:string = "section 3 - testando live-server"
console.log(section3Inicio)	

/*
 1. COMPILAÇÃO E "noEmitOnError"
 2. ALTERANDO O "target" VERSÃO DO JAVASCRIPT
 3. DEBUGANDO COM "sourceMaps"
 4. EVITANDO "Any" IMPLICITO
 5. "strictNullChecks", "noUnusedParameters" e "noUnusedLocals"
 6. DIRETÓRIO DE SAÍDA
 7. ARQUIVO DE SAÍDA
 */



// AULA 35 - COMPILAÇÃO E "NOEMITONERROR"
// propriedade: "noEmitOnError
// Faz com que o compilador javascript não gere o arquivo JS caso essa opção esteja em true. Essa propriedade é importante pois por default, apesar o TS estar falando que tem algum erro no código, ainda sim ele gera o arquivo JS e o browser atualiza com o erro.

// AULA 36 - ALTERANDO O TARGET (VERSÃO DO JAVASCRIPT GERADO)
// essa função é utilizada somente para alterar qual versão do javascript será usado quando o arquivo TS for compilado.


// AULA 37 - DEBUGANDO COM SOURCE MAP
// esse arquivo faz com que a gente possa ter o arquivo .ts dentro do browser e com isso a gente consiga debuggar dentro do browser.
// Para debugar dê o load do arquivo no browser, abra o menu desenvolvedor (Ctrl + Shift + I) entre na aba "Source" e em seguida naveguepelas pastas até a pasta do arquivo .ts que você gostaria de debuggar.

// AULA 38 - EVITANDO O ANY IMPLICITO
// propriedade: "noImplicityAny:true
// Essa propriedade é utilizada quando você está fazendo a transição de código JS para TS, de forma que seu projeto TS gere um arquivo que consiga ser interpretado pelo JS.
// Apesar dela estar comentada, é muito importante que seu projeto esteja com essa variável em TRUE, que é a opção padrão.


// AULA 39 - "STRICTNULLCHECKS", "NOUNUSEDPARAMETERS" E "NOUNUSEDLOCALS"
//propriedades: "strictNullChecks", "noUnusedParameters" e "noUnusedLocals"
//No primeiro caso em "strictNullChecks" o compilador checa se o código poderia gerar algum resultado Nulo e avisa. Já no segundo caso em "nounUsedParameters" e "nounUsedLocals" o compilador checa se existe alguma variável que não está sendo utilizada.

// AULA 40 - DIRETÓRIO DE SAÍDA
// propriedades: "outDir"
// esse comando é interessante pois consegue redirecionar todos os arquivos compilados para uma pasta específica, por exemplo "./build", que vai começar a compilar o arquivos para uma pasta do projeto TypeScript chamada build.

// AULA 41 - ARQUIVO DE SAÍDA
// propriedade: "outFile"
// essa propriedade faz com que todos os arquivos compilados do TS fiquem em 1 único arquivo.e.g. "outFile":".build/app.js". Neste caso você só colocaria no html o caminho do arquivo. Entretanto, para utilizar esse tipo de build, é necessário mudar o "module":"commonjs" para "module":"system"


// CONCLUSÃO
// links importantes
// https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
// https://www.typescriptlang.org/docs/handbook/compiler-options.html
