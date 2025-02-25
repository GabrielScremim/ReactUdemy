import './style.css';

import { Component } from 'react';

export class Button extends Component {

    render() {
        const { text, onClick, disabled } = this.props;

        return (
            <button
                disabled={disabled}
                className='btn'
                onClick={onClick}
            >
                {text}
            </button>
        );
    }
}   