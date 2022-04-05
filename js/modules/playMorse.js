export const playMorse = (text) => {
    const controlSineWave = new ControlSineWave();
    controlSineWave.start();

    const morseArray = [...text];

    if (morseArray.includes((letter) => /[^-\. \/]/.test(letter))) {
        return false;
    }

    function logLetter(letter, time) {
        return new Promise((resolve) => {
            console.log(letter);

            if (letter == ' ' || letter == '/') {
                setTimeout(() => {
                    resolve();
                }, time);
                return;
            }

            controlSineWave.unmute();

            setTimeout(() => {
                controlSineWave.mute();
                setTimeout(resolve, 100);
            }, time);
        });
    }

    // create an already resolved promise to chain .then() onto
    // skips having to create a promise the long way only to chain
    // then() onto
    let chain = Promise.resolve();

    morseArray.forEach((letter) => {
        let time = 0;
        switch (letter) {
            case '-':
                time = 500;
                break;
            case '.':
                time = 80;
                break;
            case ' ':
                time = 300;
                break;
            case '/':
                time = 300;
                break;
        }
        chain = chain.then(() => logLetter(letter, time));
        console.log(chain);
    });
    chain.finally(() => {
        controlSineWave.end();
    });
};

export class ControlSineWave {
    constructor() {
        this.AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContext();
        this.sineWave = new OscillatorNode(this.audioCtx, {
            type: 'sine',
            frequency: 330,
        });
        this.gain = new GainNode(this.audioCtx);
        this.sineWave.connect(this.gain).connect(this.audioCtx.destination);
    }

    start() {
        this.gain.gain.setValueAtTime(this.audioCtx.currentTime, 0);
        this.sineWave.start();
    }

    mute() {
        this.gain.gain.setTargetAtTime(0, this.audioCtx.currentTime, 0.005);
    }

    unmute() {
        this.gain.gain.setTargetAtTime(0.15, this.audioCtx.currentTime, 0.005);
    }

    end() {
        this.audioCtx.close();
    }
}
