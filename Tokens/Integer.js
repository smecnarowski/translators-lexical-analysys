import Token from "./Token";

class Integer extends Token {
    constructor() {
        super()
        this.regex = /^\d+$/
    }
}

export default Integer