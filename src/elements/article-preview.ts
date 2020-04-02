import { GemElement, html, customElement } from '@mantou/gem';

@customElement('rwg-ele-article-preview')
export class ArticlePreview extends GemElement {
  render() {
    return html`
      <div class="article-preview">
        <div class="article-meta">
          <a href=""><img src="http://i.imgur.com/Qr71crq.jpg"/></a>
          <div class="info">
            <a href="" class="author">Eric Simons</a>
            <span class="date">January 20th</span>
          </div>
          <button class="btn btn-outline-primary btn-sm pull-xs-right"><i class="ion-heart"></i> 29</button>
        </div>
        <a href="" class="preview-link">
          <h1>How to build webapps that scale</h1>
          <p>This is the description for the post.</p>
          <span>Read more...</span>
        </a>
      </div>
    `;
  }
}
