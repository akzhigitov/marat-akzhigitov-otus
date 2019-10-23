import { LitElement, html, css } from 'lit-element';
import './my-leaf.js';

class MyTree extends LitElement {
    static get properties() {
        return {
            data: { type: Object },

        };
    }

    static get styles() {
        return css`
        :host {
            display: list-item;
            list-style: none;
            padding-left: 30px;
        }
         .index {
            margin-left: -30px;
        }`
    }

    render() {
        return html`<span class=index>${this.data.id}</span>
        ${this.data.items.map(items => {
            const nextData = JSON.stringify(items);
            return html`${items.items ? html`<my-tree data=${nextData}></my-tree>` : html`<my-leaf data=${nextData}></my-leaf>`}`
        })}
        `
    }
}

customElements.define('my-tree', MyTree);
