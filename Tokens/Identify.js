import Token from "./Token";

class Identify extends Token {
    constructor() {
        super()
        this.regex = /^[a-z]+\d*$/
    }
}

export default Identify