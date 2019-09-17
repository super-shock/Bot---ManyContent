const textoMandado = require('../robots/texto.json').Texto
const sentenceBoundaryDetection = require('sbd')

async function robot(content) {
    await fetchContentFromtexto(content)
    breakContentIntoSentences(content)

    async function fetchContentFromtexto(content) {
        const textoMandado = textoMontado
        const textoMontado = await textoTratado.pipe(content.searchTerm)
        const textoFinal = textoMandado.get()
        
        content.textContentOriginal = textoFinal.content

    }

    function breakContentIntoSentences(content) {
        const sentences = sentenceBoundaryDetection.sentences(content.capturaDoTexto)
    }
}

module.exports = robot