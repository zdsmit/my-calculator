import React, {Component} from 'react';
import Display from './Display';
import Buttons from './Buttons';

export default class Calculator extends Component {
    constructor() {
        super()
        this.state = {
            prevValue: 0,
            displayValue: 0,
            signValue: ''
        }
    }

    render() {
        return (
            <div class="component-group">
                <Display prevValue={this.state.prevValue} displayValue={this.state.displayValue} signValue={this.state.signValue}/>
                <Buttons />
            </div>
        )
    }
}