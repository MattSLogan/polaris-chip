import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = 'Luka Doncic';
    this.image = 'https://th.bing.com/th/id/OIP._duxwrmMCw14enygzzyQBwHaE8?w=275&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7';
    this.link = 'https://hax.psu.edu';
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --my-card-fancy-bg: yellow;
        --my-card-text-color: black;
      }
    details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
  }

  details[open] summary {
    font-weight: bold;
  }
  
  details div {
    border: 2px solid black;
    text-align: left;
    padding: 8px;
    height: 70px;
    overflow: auto;
  }
      :host([fancy]) .card {
        background-color: var(--my-card-fancy-bg, blue);
        color: white;
      }

      .card {
        font-size: 1em;
        display: inline-flex;
        border: 2px solid grey;
        padding: 8px;
        margin: 8px;
        opacity: 0.8;
        background-color: navy;
        transition: 0.6s all ease-in-out;
      }

      .card:hover,
      .card:focus-within {
        opacity: 1;
        outline: 2px solid green;
        outline-offset: 16px;
      }

      .card-image {
        width: 200px;
        height: 100%;
      }

      .card-text {
        width: 300px;
        padding: 0 8px 8px 8px;
        color: var(--my-card-text-color, black);
        background-color: white;
        margin: 0 0 0 8px;
        height: 300px;
        overflow: auto;
      }

      .card-title {
        position: sticky;
        top: 0;
        background-color: #eeeeee;
        text-align: center;
        font-size: 2em;
        padding: 8px 8px 16px;
        margin: 0 -8px;
      }
    `;
  
}

  openChanged(e) {
    if (e.target.getAttribute('open') !== null) {
      this.fancy = true;
    } 
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div class="card">
        <img class="card-image" src="${this.image}" alt="${this.title}" />
        <div class="card-text">
          <h3 class="card-title">${this.title}</h3>
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <div>
              <slot></slot>
              <a href="${this.link}" target="_blank">
           <button class="btn"><em>Link for more info</em></button> 
          </a>
            </div>
          </details>
        </div>
      </div>`;
  }
  
  

  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true },
      title: { type: String },
      image: { type: String },
      link: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
