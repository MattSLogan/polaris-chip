import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = 'Luka Doncic';
    this.image = 'https://th.bing.com/th/id/OIP._duxwrmMCw14enygzzyQBwHaE8?w=275&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7';
    this.description = 'This card will tell you everything you need to know in order to become the next Lebron James!';
    this.link = 'https://hax.psu.edu';
  }

  static get styles() {
    return css`
      :host {
        display: block;
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
        color: black;
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

  render() {
    return html`
      <div class="card">
        <img class="card-image" src="${this.image}" alt="${this.title}" />
        <div class="card-text">
          <h3 class="card-title">${this.title}</h3>
          <p>${this.description}</p>
          <a href="${this.link}" target="_blank">Details</a>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      description: { type: String },
      link: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
