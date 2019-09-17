const readline = require('readline-sync')

function start() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm() {
        return readline.question('Escreva o titulo do video: ')
    }

    function askAndReturnPrefix() {
        const prefixes = ['What mean', 'What is', 'A little about']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha um prefixo: ')
        const selectedPrefixtext = prefixes[selectedPrefixIndex]

        return selectedPrefixtext
    }

    console.log(content)
}

start()