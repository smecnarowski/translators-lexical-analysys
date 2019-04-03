# Translators - lexical analysys app

#### To install:

    npm install

#### To run:

    npm run start

#### Example data:

    [
        '12 3x+2.5',
        '3 7',
        'x12+7.5',
        '123x+2.5',
        '3-7',
        '10 / 3',
        'x * y - z',
        'zmienna1 + zmienna2',
        'w1a*w2b',
    		'A3457g4h - t !!!!~ 345',
        '10.3-alfa',
        '0.685739*5 ',
        '(x+y)*z',
        '(a * a) + b',
        '(0.1 - beta) + 8',
    ]

#### Result


	{ example: '12 3x+2.5',
		tokens:
		[ { token: 'Integer', value: '12' },
			{ token: 'Integer', value: '3' },
			{ token: 'Identify', value: 'x' },
			{ token: 'Operator', value: '+' },
			{ token: 'Decimal', value: '2.5' } ],
		ignored: [ { position: 3, length: 1, value: ' ' } ] }
	{ example: '3 7',
		tokens:
		[ { token: 'Integer', value: '3' },
			{ token: 'Integer', value: '7' } ],
		ignored: [ { position: 2, length: 1, value: ' ' } ] }
	{ example: 'x12+7.5',
		tokens:
		[ { token: 'Identify', value: 'x12' },
			{ token: 'Operator', value: '+' },
			{ token: 'Decimal', value: '7.5' } ],
		ignored: [] }
	{ example: '123x+2.5',
		tokens:
		[ { token: 'Integer', value: '123' },
			{ token: 'Identify', value: 'x' },
			{ token: 'Operator', value: '+' },
			{ token: 'Decimal', value: '2.5' } ],
		ignored: [] }
	{ example: '3-7',
		tokens:
		[ { token: 'Integer', value: '3' },
			{ token: 'Operator', value: '-' },
			{ token: 'Integer', value: '7' } ],
		ignored: [] }
	{ example: '10 / 3',
		tokens:
		[ { token: 'Integer', value: '10' },
			{ token: 'Operator', value: '/' },
			{ token: 'Integer', value: '3' } ],
		ignored:
		[ { position: 3, length: 1, value: ' ' },
			{ position: 5, length: 1, value: ' ' } ] }
	{ example: 'x * y - z',
		tokens:
		[ { token: 'Identify', value: 'x' },
			{ token: 'Operator', value: '*' },
			{ token: 'Identify', value: 'y' },
			{ token: 'Operator', value: '-' },
			{ token: 'Identify', value: 'z' } ],
		ignored:
		[ { position: 2, length: 1, value: ' ' },
			{ position: 4, length: 1, value: ' ' },
			{ position: 6, length: 1, value: ' ' },
			{ position: 8, length: 1, value: ' ' } ] }
	{ example: 'zmienna1 + zmienna2',
		tokens:
		[ { token: 'Identify', value: 'zmienna1' },
			{ token: 'Operator', value: '+' },
			{ token: 'Identify', value: 'zmienna2' } ],
		ignored:
		[ { position: 9, length: 1, value: ' ' },
			{ position: 11, length: 1, value: ' ' } ] }
	{ example: 'w1a*w2b',
		tokens:
		[ { token: 'Identify', value: 'w1a' },
			{ token: 'Operator', value: '*' },
			{ token: 'Identify', value: 'w2b' } ],
		ignored: [] }
	{ example: 'A3457g4h - t !!!!~ 345',
		tokens:
		[ { token: 'Identify', value: 'A3457g4h' },
			{ token: 'Operator', value: '-' },
			{ token: 'Identify', value: 't' },
			{ token: 'Integer', value: '345' } ],
		ignored:
		[ { position: 9, length: 1, value: ' ' },
			{ position: 11, length: 1, value: ' ' },
			{ position: 13, length: 7, value: ' !!!!~ ' } ] }
	{ example: '10.3-alfa',
		tokens:
		[ { token: 'Decimal', value: '10.3' },
			{ token: 'Operator', value: '-' },
			{ token: 'Identify', value: 'alfa' } ],
		ignored: [] }
	{ example: '0.685739*5 ',
		tokens:
		[ { token: 'Decimal', value: '0.685739' },
			{ token: 'Operator', value: '*' },
			{ token: 'Integer', value: '5' } ],
		ignored: [] }
	{ example: '(x+y)*z',
		tokens:
		[ { token: 'Bracket', value: '(' },
			{ token: 'Identify', value: 'x' },
			{ token: 'Operator', value: '+' },
			{ token: 'Identify', value: 'y' },
			{ token: 'Bracket', value: ')' },
			{ token: 'Operator', value: '*' },
			{ token: 'Identify', value: 'z' } ],
		ignored: [] }
	{ example: '(a * a) + b',
		tokens:
		[ { token: 'Bracket', value: '(' },
			{ token: 'Identify', value: 'a' },
			{ token: 'Operator', value: '*' },
			{ token: 'Identify', value: 'a' },
			{ token: 'Bracket', value: ')' },
			{ token: 'Operator', value: '+' },
			{ token: 'Identify', value: 'b' } ],
		ignored:
		[ { position: 3, length: 1, value: ' ' },
			{ position: 5, length: 1, value: ' ' },
			{ position: 8, length: 1, value: ' ' },
			{ position: 10, length: 1, value: ' ' } ] }
	{ example: '(0.1 - beta) + 8',
		tokens:
		[ { token: 'Bracket', value: '(' },
			{ token: 'Decimal', value: '0.1' },
			{ token: 'Operator', value: '-' },
			{ token: 'Identify', value: 'beta' },
			{ token: 'Bracket', value: ')' },
			{ token: 'Operator', value: '+' },
			{ token: 'Integer', value: '8' } ],
		ignored:
		[ { position: 5, length: 1, value: ' ' },
			{ position: 7, length: 1, value: ' ' },
			{ position: 13, length: 1, value: ' ' },
			{ position: 15, length: 1, value: ' ' } ] }



