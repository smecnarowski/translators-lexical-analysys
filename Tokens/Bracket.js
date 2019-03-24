import Token from "./Token";

class Bracket extends Token {
    constructor() {
        super()
        this.regex = /^(\(|\))$/
    }
}

export default Bracket