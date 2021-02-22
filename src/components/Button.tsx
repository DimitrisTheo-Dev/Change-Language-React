import React from 'react';
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends React.Component {
    // static adds a property to the class itself
    // Its equivalent with  writing outside the class
    // Button.contextType = LanguageContext;
    // static contextType = LanguageContext;
    renderSubmit(value: string) {
       return value === 'english' ? 'Submit' : 'Υποβολή'
    }
    renderButton(color: string) {
        return (

            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value: string) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        return (
            <ColorContext.Consumer>
                { (color: string) => this.renderButton(color) }
            </ColorContext.Consumer>
        );
    }
}

export default Button;
