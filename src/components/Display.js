import React, {Component} from 'react';

export default class Display extends Component {
    
    constructor() {
        super()
    }

    render() {
        return(
            <div class="btn-group">
                {this.props.displayValue}
            </div>
        )
    }
} 