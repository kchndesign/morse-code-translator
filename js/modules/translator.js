export class Translator {
    constructor(mapEnglish, mapMorse) {
        this.english = '';
        this.morse = '';
        this.mapEnglish = mapEnglish;
        this.mapMorse = mapMorse;
    }

    translate(type, text) {
        if (type == 'english') {
            const letterArray = [...text];

            this.morse = letterArray
                .map((letter) => {
                    return this.mapEnglish.get(letter.toUpperCase());
                })
                .join(' ');
        } else if (type == 'morse') {
            let morseArray = text.split(' ');

            this.english = morseArray
                .map((morse) => {
                    return this.mapMorse.get(morse).toLowerCase();
                })
                .join('');
        } else {
            throw `${type} is not a valid type.`;
        }
    }
}
