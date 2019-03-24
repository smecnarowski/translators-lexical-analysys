import Tokens from './Tokens'

class TokensExtractor {
    constructor(lexicalSymbol) {
        this.parsedTokens = []
        this.lexicalSymbol = lexicalSymbol
        this.parse()
    }

    parse() {
        let currentTestLexicalSymbol = this.lexicalSymbol
        let alreadyParsedLength = 0
        const tokens = []
        do {
            let matchingTokens = Object.keys(Tokens).filter(key => {
                return new Tokens[key]().match(currentTestLexicalSymbol)
            })

            if (!matchingTokens.length) {
                currentTestLexicalSymbol = currentTestLexicalSymbol.slice(0, -1)
            } else {
                tokens.push({ 'token': matchingTokens[0], value: currentTestLexicalSymbol })
                alreadyParsedLength += currentTestLexicalSymbol.length 
                currentTestLexicalSymbol = this.lexicalSymbol.slice(alreadyParsedLength)
            }

            if (currentTestLexicalSymbol.length === 0) {
                alreadyParsedLength++;
                currentTestLexicalSymbol = this.lexicalSymbol.slice(alreadyParsedLength)
            }
        } while (currentTestLexicalSymbol.length > 0);

        this.parsedTokens = tokens
    }

    get tokens() {
        return this.parsedTokens
    }
}

export default TokensExtractor