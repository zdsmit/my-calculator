import React, { Component } from 'react';
import Button from './Button';

export default class Buttons extends Component {

    render() {
        return (
            <div>
                <div class="btn-group">
                  <Button value="1"/>
                  <Button value="2"/>
                  <Button value="3"/>
                  <Button value="+"/>
                  <br />
                </div>

                <div class="btn-group">
                  <Button value="4"/>
                  <Button value="5"/>
                  <Button value="6"/>
                  <Button value="-"/>
                  <br />
                </div>

                <div class="btn-group">
                  <Button value="7"/>
                  <Button value="8"/>
                  <Button value="9"/>
                  <Button value="*"/>
                </div>
            </div>
        )
    }
}