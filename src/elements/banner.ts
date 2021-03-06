import { GemElement, html, customElement } from '@mantou/gem';

@customElement('rwg-ele-banner')
export class Banner extends GemElement {
  render() {
    return html`
      <div class="banner">
        <div class="container">
          <h1>How to build webapps that scale</h1>

          <div class="article-meta">
            <a href=""><img src="http://i.imgur.com/Qr71crq.jpg"/></a>
            <div class="info">
              <a href="" class="author">Eric Simons</a>
              <span class="date">January 20th</span>
            </div>
            <button class="btn btn-sm btn-outline-secondary">
              <i class="ion-plus-round"></i>
              &nbsp; Follow Eric Simons <span class="counter">(10)</span>
            </button>
            &nbsp;&nbsp;
            <button class="btn btn-sm btn-outline-primary">
              <i class="ion-heart"></i>
              &nbsp; Favorite Post <span class="counter">(29)</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }
}
