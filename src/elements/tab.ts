import { GemElement, html, customElement } from '@mantou/gem';

@customElement('rwg-ele-tab')
export class Tab extends GemElement {
  render() {
    return html`
      <div class="articles-toggle">
        <ul class="nav nav-pills outline-active">
          <li class="nav-item">
            <a class="nav-link active" href="">My Articles</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Favorited Articles</a>
          </li>
        </ul>
      </div>
    `;
  }
}
