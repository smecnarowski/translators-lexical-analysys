import Token from "./Token";

class Operator extends Token {
    constructor() {
        super()
        this.regex = /^(\+|-|\*|\/)$/
    }
}

export default Operator