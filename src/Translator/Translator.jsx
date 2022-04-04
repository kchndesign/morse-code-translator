export class Translator {
    constructor() {
        this.english = '';
        this.morse = '';

        this.mapEnglish = new Map([
            ['A', '.-'],
            ['B', '-...'],
            ['C', '-.-.'],
            ['D', '-..'],
            ['E', '.'],
            ['F', '..-.'],
            ['G', '--.'],
            ['H', '....'],
            ['I', '..'],
            ['J', '.---'],
            ['K', '-.-'],
            ['L', '.-..'],
            ['M', '--'],
            ['N', '-.'],
            ['O', '---'],
            ['P', '.--.'],
            ['Q', '--.-'],
            ['R', '.-.'],
            ['S', '...'],
            ['T', '-'],
            ['U', '..-'],
            ['V', '...-'],
            ['W', '.--'],
            ['X', '-..-'],
            ['Y', '-.--'],
            ['Z', '--..'],
            ['0', '-----'],
            ['1', '.----'],
            ['2', '..---'],
            ['3', '...--'],
            ['4', '....-'],
            ['5', '.....'],
            ['6', '-....'],
            ['7', '--...'],
            ['8', '---..'],
            ['9', '----.'],
            [' ', '/'],
        ]);

        this.mapMorse = new Map();

        this.mapEnglish.forEach((value, key) => {
            this.mapMorse.set(value, key);
        });
    }

    translate(type, text) {
        if (typeof text !== 'string' || text == '') {
            this.english = '';
            this.morse = '';
            return;
        }

        if (type == 'english') {
            if (text.match(/[^a-z0-9 ]/gi)) {
                this.morse = 'Sorry! Only alpha-numeric characters!';
                return;
            }

            const letterArray = [...text];

            this.morse = letterArray
                .map((letter) => {
                    return this.mapEnglish.get(letter.toUpperCase());
                })
                .join(' ');

            this.english = text;
        } else if (type == 'morse') {
            if (text.match(/[^.\- \/]/gi)) {
                this.english = 'Sorry! Only dots, dashes, spaces and slashes!';
                return;
            }

            let morseArray = text.split(' ');

            this.english = morseArray
                .map((morse) => {
                    const character = this.mapMorse.get(morse);
                    return character ? character.toLowerCase() : ' ';
                })
                .join('');

            this.morse = text;
        } else {
            throw `${type} is not a valid type.`;
        }
    }
}
