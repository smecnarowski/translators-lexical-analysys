import Token from "./Token";

class Identify extends Token {
    constructor() {
        super()
        this.regex = /^[a-zA-Z]{1}[a-zA-Z0-9]*$/
    }
}

export default Identify