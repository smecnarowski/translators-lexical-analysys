import Tokens from './Tokens'

class TokensExtractor {
    constructor(lexicalSymbol) {
        this.parsedTokens = []
        this.ignoredStrings = []
        this.lexicalSymbol = lexicalSymbol
        this.parse()
        this.parseIgnored()
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

    parseIgnored() {
        let cleanedLexicaSymbol = this.parsedTokens.map(token => token.value).join('')
        let baseLexicalSymbol = this.lexicalSymbol;
        let baseCursorPosition = 1
        while (cleanedLexicaSymbol.length) {
            let position = baseLexicalSymbol.indexOf(cleanedLexicaSymbol[0])
            if (position === 0) {
                baseLexicalSymbol = baseLexicalSymbol.slice(1)
            } else {
                let splittedIgnoredString = (baseLexicalSymbol.slice(0, position)).split('')
                splittedIgnoredString.forEach((char, index) => {
                    if (char.trim().length) {
                        this.ignoredStrings.push({
                            position: baseCursorPosition + index,
                            value: char
                        })
                    }
                });
                baseLexicalSymbol = baseLexicalSymbol.slice(position+1)
            }

            cleanedLexicaSymbol = cleanedLexicaSymbol.slice(1)
            baseCursorPosition += position + 1
        }
    }

    get ignored() {
        return this.ignoredStrings
    }
}

export default TokensExtractor