const template: HTMLTemplateElement = document.createElement('template');
template.innerHTML = `
    <style>
        #header{
            width: 100%;
            display: flex;
            background-color: red;
            justify-content: space-between;
        }
    </style>
    <div id='header'>
        <nav-menu></nav-menu>
    </div>
`;

export default class Header extends HTMLElement {
  constructor(){
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}


