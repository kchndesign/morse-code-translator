import { Translator } from '../../js/modules/translator.js';

const mapEnglish = new Map([
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
    ["'", '.----.'],
    [',', '--..--'],
    ['.', '.-.-.-'],
    ['?', '..--..'],
]);

const mapMorse = new Map();
mapEnglish.forEach((value, key) => {
    mapMorse.set(value, key);
});

const sampleTranslator = new Translator(mapEnglish, mapMorse);

describe('translator class', () => {
    test('translator object should have the correct properties and method', () => {
        expect(sampleTranslator).toHaveProperty('mapEnglish');
        expect(sampleTranslator).toHaveProperty('mapMorse');
        expect(sampleTranslator).toHaveProperty('english');
        expect(sampleTranslator).toHaveProperty('morse');
        expect(sampleTranslator).toHaveProperty('translate');
    });

    test('should output the correct morse code into its own "morse" property', () => {
        let translator = new Translator(mapEnglish, mapMorse);
        translator.translate('english', 'hello world');
        expect(translator.morse).toEqual(
            '.... . .-.. .-.. --- / .-- --- .-. .-.. -..'
        );
        translator.translate('english', 'chrisjen avasarala');
        expect(translator.morse).toEqual(
            '-.-. .... .-. .. ... .--- . -. / .- ...- .- ... .- .-. .- .-.. .-'
        );
    });

    test('should output the correct english text into its own "english" property', () => {
        let translator = new Translator(mapEnglish, mapMorse);
        translator.translate(
            'morse',
            '... . -... .- ... - .. .- -. / ...- . - - . .-..'
        );
        expect(translator.english).toEqual('sebastian vettel');
        translator.translate(
            'morse',
            '.-. . -- .. / .- -. -.. / ... .- -. -.. .-. .-'
        );
        expect(translator.english).toEqual('remi and sandra');
    });
});
