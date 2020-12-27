import React, {Component} from 'react';
import Display from './Display';
import Buttons from './Buttons';

export default class Calculator extends Component {
    render() {
        return (
            <div class="component-group">
                <Display />
                <Buttons />
            </div>
        )
    }
}