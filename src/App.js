import logo from './logo.svg';
import './App.css';
import TextInputClass from './TextInput/TextInput.js';
import Translator from './Translator/Translator.js';
import React from 'react';

class App extends React.Component {
    constructor() {
        super();

        this.translator = new Translator();

        this.state = {
            englishValue: this.translator.english,
            morseValue: this.translator.morse,
        };

        this.updateState = this.updateState.bind(this);

        console.log(this);
    }

    updateState(e) {
        e.preventDefault();

        this.translator.translate(e.target.name, e.target.value);

        this.setState(
            () => {
                return {
                    englishValue: this.translator.english,
                    morseValue: this.translator.morse,
                };
            },
            () => {
                console.log(this.translator);
            },
        );
    }

    render() {
        return (
            <div className="wrapper">
                <h1>Morse Code Translator</h1>
                <p>Input text or morse code in their respective boxes.</p>
                <p>Only accepts alpha-numeric text :)</p>
                <TextInputClass
                    position="top"
                    value={this.state.englishValue}
                    updateState={this.updateState}
                />
                <img src={logo} alt="" className="image-between" />
                <TextInputClass
                    position="bottom"
                    value={this.state.morseValue}
                    updateState={this.updateState}
                />
            </div>
        );
    }
}

export default App;
