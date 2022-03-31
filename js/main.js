import { Translator } from './modules/translator.js';

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
]);

const mapMorse = new Map();
mapEnglish.forEach((value, key) => {
    mapMorse.set(value, key);
});

let translator = new Translator(mapEnglish, mapMorse);

const englishInput = document.querySelector('#english');
const morseInput = document.querySelector('#morse');

englishInput.addEventListener('input', () => {
    translator.translate('english', englishInput.value);
    morseInput.value = translator.morse;
});

morseInput.addEventListener('input', () => {
    translator.translate('morse', morseInput.value);
    englishInput.value = translator.english;
});
