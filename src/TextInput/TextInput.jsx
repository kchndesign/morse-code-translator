import styles from './TextInput.module.scss';
import React from 'react';

class TextInputClass extends React.Component {
    constructor(props) {
        super(props);
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(e) {
        this.props.updateState(e);
    }

    render() {
        switch (this.props.position) {
            case 'top':
                return (
                    <textarea
                        className={styles.TextInput}
                        name="english"
                        id="english"
                        cols="30"
                        rows="5"
                        placeholder="Input letters and numbers here:"
                        value={this.props.value}
                        onInput={this.handleEvent}></textarea>
                );
            case 'bottom':
                return (
                    <textarea
                        className={styles.TextInput}
                        name="morse"
                        id="morse"
                        cols="30"
                        rows="5"
                        placeholder="Input morse code here. Spaces between letters, / between words"
                        value={this.props.value}
                        onInput={this.handleEvent}></textarea>
                );

            default:
                return <h2>Error</h2>;
        }
    }
}

export { TextInputClass };
