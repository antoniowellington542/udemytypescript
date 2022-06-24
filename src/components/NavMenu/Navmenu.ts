import { LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js'

const template = html `
    <style>
    .menu__icon{
        background-image: url('/src/img/Menu.svg');
        background-repeat: no-repeat;
        background-position: center;
        width: 55px;
        height: 55px;
        display: inline-block;
    }

    .logo__titulo{
        display: none;
    }

    .menu__button{
        display: none;
    }

    .list__menu{
        display: none;
        list-style: none;
    }

    .menu__button:checked~.list__menu{
        display: block;
        position: absolute;
        top: 2.5em;
        left: 0;
        width: 15em;
        box-shadow: 0px 2px 2px black;
        background-color: var(--branco);
        z-index: 2;
        padding: 0;
    }

    .list__menu-options{
        margin-top: 1em;
        text-transform: uppercase;
        padding: 1em;
    }

    .list__menu-title{
        color: var(--laranja);
        font-weight: 700;
    }

    .list__menu-links{
        background: var(--azul-degrade);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        cursor: pointer;
        font-weight: 400;
    }

    .list__menu-options:not(:first-child):hover {
       background-color: rgb(176, 227, 237);
    }

    .menu__button:checked~.rotulo__menu>.menu__icon{
        background-image: url("/img/Menu-Aberto.png");
        background-repeat: no-repeat;
        background-position: center;
        width: 55px;
        height: 55px;
        display: inline-block;

    }

    .titulo__button{
        display: none;
    }

    @media screen and (min-width: 1024px) {

        .menu__icon{
           display: none;
        }

        .list__menu-title{
            display: none;
        }

        .titulo__button{
            display: block;
        }
    }

    </style>

    <input type="checkbox" id="menu" class="menu__button">
    <label for="menu">
        <span class="menu__icon"></span>
    </label>
    <ul class="list__menu">
        <li class="list__menu-options">
            <span class="list__menu-title">Categorias</span>
        </li>
        <li class="list__menu-options">
            <a class="list__menu-links" href="#">Programação</a>
        </li>
        <li class="list__menu-options">
            <a class="list__menu-links" href="#">Front-end</a>
        </li>
        <li class="list__menu-options">
            <a class="list__menu-links" href="#">Infraestrutura</a>
        </li>
        <li class="list__menu-options">
            <a class="list__menu-links" href="#">Business</a>
        </li>
        <li class="list__menu-options">
            <a class="list__menu-links" href="#">Design & UX</a>
        </li>
        <li class="desktop__menu-options">
            <a class="desktop__menu-links" href="#">Favoritos</a>
        </li>
        <li class="desktop__menu-options">
            <a class="desktop__menu-links" href="#">Minha estante</a>
        </li>
    </ul>
`;

@customElement('nav-menu')
export default class NavMenu extends LitElement {
  render(){
    return template;
  }
}
