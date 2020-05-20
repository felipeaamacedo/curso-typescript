// puxar as dependencias do gulp que executam tarefas em série (series), em paralelo (parallel), src (informa os arquivos que serão usados em build) e o dest (que fala onde você irá salvar o resultado do build)
const { series, parallel, src, dest } = require('gulp')

const del = require('del')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const tsify = require('tsify')

function limparDist(){
  return del(['dist']) //nomes dentro de del são as pastas que serão deletadas durante o build
}

function copiarHTML(cb){
    // usar public/**/* faz com que o gulp não só copie os arquivos em public, mas também as pastas e os arquivos abaixo.
  return src('public/**/*')
        .pipe(dest('dist')) 
}

function gerarJS(cb){
    return browserify({
        basedir: '.',
        entries: ['src/main.ts']//passando o arquivo de entrada ( o principal ) e a partir dele, o browserify acha os outros arquivos, livro.ts e vendavel.ts
    })
        .plugin(tsify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(dest('dist'))
}

exports.default = series(
    limparDist,
    parallel(gerarJS, copiarHTML)
)


