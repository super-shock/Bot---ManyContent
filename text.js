const ph = require('./texto.txt')
const sentenceBoundaryDetection = require('sbd')

async function robot(content) {
    await textToImage(content)
    breakContentIntoSentences(content)

    async function textToImage(text, output) {
        ph.writeFileSync(output, imageHandler(text, {
            
        }));
        // const textoMandado = textoMontado
        // const textoMontado = await textoTratado.pipe(content.searchTerm)
        // const textoFinal = textoMandado.get()
        
        // content.textContentOriginal = textoFinal.content

    }

    function breakContentIntoSentences(content) {
        const sentences = sentenceBoundaryDetection.sentences(content.capturaDoTexto)
    }
}

module.exports = robot