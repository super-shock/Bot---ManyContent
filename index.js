const readline = require('readline-sync')

// Funçao de partida do BOT: INICIO
function start() {
    const content = {}

    // Troca e armazenamento de funções com dados inseridos: INICIO
    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()
    // Troca e armazenamento de funções com dados inseridos: INICIO

    // Função Perguntar e rotarnar o termo de busca: INICIO
    function askAndReturnSearchTerm() {
        return readline.question('Escreva o titulo do video: ')
    }
    // Função Perguntar e rotarnar o termo de busca: FIM

    // Função Perguntar e retornar o prefixo: INICIO
    function askAndReturnPrefix() {
        const prefixes = ['What mean', 'What is', 'A little about']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha um prefixo: ')
        const selectedPrefixtext = prefixes[selectedPrefixIndex]

        return selectedPrefixtext
    }
    // Função Perguntar e retornar o prefixo: FIM

    console.log(content)
}
// Funçao de partida do BOT: FIM

start()