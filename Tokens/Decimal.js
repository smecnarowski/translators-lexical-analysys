import Token from "./Token";

class Decimal extends Token {
    constructor() {
        super()
        this.regex = /^\d+\.\d+$/
    }
}

export default Decimal