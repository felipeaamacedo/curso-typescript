//SETUP PARA CRIAR UM PROJETO GULP
//

// 1. CRIAR PROJETO TS (tsc --init)
// 2. CRIAR PROJETO NODE (npm init -y)
// 3. CRIAR PASTAS DO PROJETO (src, src\modelo)
// 4. CRIAR PASTA PUBLICA DO HTML (public)
// 5. CRIAR O ARQUIVO (main.ts) QUE É ONDE FICA O PROJETO EM TYPESCRIPT
// 6. CRIAR O ARQUIVO (index.html) QUE É ONDE FICA O ARQUIVO HTML QUE COMPILA NO BROWSER


// Lógica do projeto, na pasta "modelos" ficam os módulos que vão ser usados no projeto.

//o arquivo "main.ts" é o arquivo principal, que faz todos os cálculos necessários e se utiliza dos módulos criados que estão na pasta "src/modelos"

//o arquivo "index.html" é o arquivo publico que faz o GUI com o usuário.



// INSTALAÇÃO DE DEPENDÊNCIAS PARA O GULP
// 1. npm i --save-dev gulp typescript browserify tsify vinyl-source-stream del
// 2. entrar no arquivo package.json  e inserir um script de build na área de scripts ("build": "gulp")
// 3. criar o um arquivo "gulpfile.js" na pasta principal, onde fica o package.json

// O QUE é o GULP?
// é uma ferramenta de tarefas, ou seja, ela consegue criar pastas, inserir certos arquivos em suas devidas pastas, pegar diversos arquivos JS e comprimir em um arquivo somente, ou até tirar os espaços brancos dos arquivos build.

//COMO RODAR O GULP?
// para rodar o gulp e executar as tarefas para poder gerar o build (arquivo final comprimido), é necessário somente usar o comando "npm run build"