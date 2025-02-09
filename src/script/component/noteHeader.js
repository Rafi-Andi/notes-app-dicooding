class Header extends HTMLElement {
    constructor() {
        super()

        this._shadowRoot = this.attachShadow({mode: 'open'})
        this._style = document.createElement('style')
    }

    connectedCallback(){
        this.render()
    }

    updateStyle(){
        this._style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik+Wet+Paint&display=swap');
           
            div {
                text-align: left;
                padding: 10px 20px;
                font-size: 20px;
                font-weight: 700;
                font-family: poppins, sans-serif;
            }
        `
    }

    emptyElement(){
        this._shadowRoot.innerHTML = ''
    }

    render(){
        this.emptyElement()
        this.updateStyle()

        this._shadowRoot.appendChild(this._style)

        this._shadowRoot.innerHTML += `
        ${this._style.outerHTML}
        <div>
            <h1>Rafi Notes</h1>
        </div>
        `
    }
}

customElements.define('header-custom', Header)