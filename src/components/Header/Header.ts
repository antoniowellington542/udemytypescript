import { LitElement, html, render} from 'lit';
import {customElement} from 'lit/decorators.js'

const template = html`
    <style>
        #header{
            width: 100%;
            display: flex;
            background-color: red;
            justify-content: space-between;
        }
    </style>
    <div id='header'>
        <h1>oi</h1>
    </div>
  `;


@customElement('header-top')
export default class Header extends LitElement {
    render(){
        return template;
    }
}


