import { LitElement, html, css } from 'lit-element';

class MyLeaf extends LitElement {
  static get properties() {
    return {
      data: { type: Object },
    };
  }

  static get styles() {
    return css`
    span {
      display: list-item;
      }`;
  }

  render() {
    return html`
     <span>${this.data.id}</span>
    `;
  }
}

customElements.define('my-leaf', MyLeaf);
