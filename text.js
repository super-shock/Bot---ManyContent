const ph = require('./matrix/texto.json')
var texto = ph.texto;
const sentenceBoundaryDetection = require('sbd')

// Função assíncrona do robo: INICIO
async function robot(content) {
    await textToImage(content)
    breakContentIntoSentences(content)
// Função assíncrona do robo: FIM

    // Função assíncrona da conversão de texto para imagem: INICIO
    // Função imcompleta*
    async function textToImage(text, output) {
        texto.writeFileSync(output, imageHandler(text, {
        }));
    }
    // Função assíncrona da conversão de texto para imagem: FIM

    // Função de quebrar o conteúdo em sentenças: INICIO
    // Função imcompleta*
    function breakContentIntoSentences(content) {
        const sentences = sentenceBoundaryDetection.sentences(content.capturaDoTexto)
    }
    // Função de quebrar o conteúdo em sentenças: INICIO
}

module.exports = robot