import TokensExtractor from './TokensExtractor'

const examples = [
    '12 3x+2.5',
    '3 7',
    'x12+7.5',
    '123x+2.5',
    '3-7',
    '10 / 3',
    'x * y - z',
    'zmienna1 + zmienna2',
    'w1a*w2b',
    '10.3-alfa',
    '0.685739*5 ',
    '(x+y)*z',
    '(a * a) + b',
    '(0.1 - beta) + 8',
]

const results = []

examples.forEach(example => {
    const result = {
        example,
        tokens: new TokensExtractor(example).tokens
    }

    results.push(result)
    console.log(result)
})

