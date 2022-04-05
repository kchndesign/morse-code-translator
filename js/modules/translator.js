export class Translator {
    constructor(mapEnglish, mapMorse) {
        this.english = '';
        this.morse = '';
        this.mapEnglish = mapEnglish;
        this.mapMorse = mapMorse;
    }

    translate(type, text) {
        if (typeof text !== 'string' || text == '') {
            this.english = '';
            this.morse = '';
            return;
        }

        if (type == 'english') {
            const letterArray = [...text];

            if (
                !letterArray.every((letter) =>
                    this.mapEnglish.get(letter.toUpperCase()),
                )
            ) {
                return (this.morse = "Sorry! We don't know that character :(");
            }

            this.morse = letterArray
                .map((letter) => {
                    return this.mapEnglish.get(letter.toUpperCase());
                })
                .join(' ');
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
        } else {
            throw `${type} is not a valid type.`;
        }
    }
}
