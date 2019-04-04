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
        '(a * a#) + b',
        '(0.1 - beta) + 8',
    ]

#### Result


	{ example: '12 3x+2.5',
	tokens:
	[ { token: 'Integer', value: '12' },
		{ token: 'Integer', value: '3' },
		{ token: 'Identify', value: 'x' },
		{ token: 'Operator', value: '+' },
		{ token: 'Decimal', value: '2.5' } ] }

	{ example: '3 7',
	tokens:
	[ { token: 'Integer', value: '3' },
		{ token: 'Integer', value: '7' } ] }

	{ example: 'x12+7.5',
	tokens:
	[ { token: 'Identify', value: 'x12' },
		{ token: 'Operator', value: '+' },
		{ token: 'Decimal', value: '7.5' } ] }

	{ example: '123x+2.5',
	tokens:
	[ { token: 'Integer', value: '123' },
		{ token: 'Identify', value: 'x' },
		{ token: 'Operator', value: '+' },
		{ token: 'Decimal', value: '2.5' } ] }

	{ example: '3-7',
	tokens:
	[ { token: 'Integer', value: '3' },
		{ token: 'Operator', value: '-' },
		{ token: 'Integer', value: '7' } ] }

	{ example: '10 / 3',
	tokens:
	[ { token: 'Integer', value: '10' },
		{ token: 'Operator', value: '/' },
		{ token: 'Integer', value: '3' } ] }

	{ example: 'x * y - z',
	tokens:
	[ { token: 'Identify', value: 'x' },
		{ token: 'Operator', value: '*' },
		{ token: 'Identify', value: 'y' },
		{ token: 'Operator', value: '-' },
		{ token: 'Identify', value: 'z' } ] }

	{ example: 'zmienna1 + zmienna2',
	tokens:
	[ { token: 'Identify', value: 'zmienna1' },
		{ token: 'Operator', value: '+' },
		{ token: 'Identify', value: 'zmienna2' } ] }

	{ example: 'w1a*w2b',
	tokens:
	[ { token: 'Identify', value: 'w1a' },
		{ token: 'Operator', value: '*' },
		{ token: 'Identify', value: 'w2b' } ] }

	{ example: 'A3457g4h - t !!!!~ 345',
	tokens:
	[ { token: 'Identify', value: 'A3457g4h' },
		{ token: 'Operator', value: '-' },
		{ token: 'Identify', value: 't' },
		{ token: 'Integer', value: '345' } ],
	ignored:
	[ { position: 14, value: '!' },
		{ position: 15, value: '!' },
		{ position: 16, value: '!' },
		{ position: 17, value: '!' },
		{ position: 18, value: '~' } ] }

	{ example: '10.3-alfa',
	tokens:
	[ { token: 'Decimal', value: '10.3' },
		{ token: 'Operator', value: '-' },
		{ token: 'Identify', value: 'alfa' } ] }

	{ example: '0.685739*5 ',
	tokens:
	[ { token: 'Decimal', value: '0.685739' },
		{ token: 'Operator', value: '*' },
		{ token: 'Integer', value: '5' } ] }

	{ example: '(x+y)*z',
	tokens:
	[ { token: 'Bracket', value: '(' },
		{ token: 'Identify', value: 'x' },
		{ token: 'Operator', value: '+' },
		{ token: 'Identify', value: 'y' },
		{ token: 'Bracket', value: ')' },
		{ token: 'Operator', value: '*' },
		{ token: 'Identify', value: 'z' } ] }

	{ example: '(a * a) + b',
	tokens:
	[ { token: 'Bracket', value: '(' },
		{ token: 'Identify', value: 'a' },
		{ token: 'Operator', value: '*' },
		{ token: 'Identify', value: 'a' },
		{ token: 'Bracket', value: ')' },
		{ token: 'Operator', value: '+' },
		{ token: 'Identify', value: 'b' } ] }

	{ example: '(a * a#) + b',
	tokens:
	[ { token: 'Bracket', value: '(' },
		{ token: 'Identify', value: 'a' },
		{ token: 'Operator', value: '*' },
		{ token: 'Identify', value: 'a' },
		{ token: 'Bracket', value: ')' },
		{ token: 'Operator', value: '+' },
		{ token: 'Identify', value: 'b' } ],
	ignored: [ { position: 7, value: '#' } ] }

	{ example: '(0.1 - beta) + 8',
	tokens:
	[ { token: 'Bracket', value: '(' },
		{ token: 'Decimal', value: '0.1' },
		{ token: 'Operator', value: '-' },
		{ token: 'Identify', value: 'beta' },
		{ token: 'Bracket', value: ')' },
		{ token: 'Operator', value: '+' },
		{ token: 'Integer', value: '8' } ] }



