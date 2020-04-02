import { GemElement, html, customElement } from '@mantou/gem';

import routes from 'src/routes';
import '@mantou/gem/elements/link';

@customElement('rwg-ele-header')
export class Header extends GemElement {
  constructor() {
    super(false);
  }
  render() {
    return html`
      <nav class="navbar navbar-light">
        <div class="container">
          <a class="navbar-brand" href="index.html">conduit</a>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              <gem-active-link class="nav-link" .route=${routes.home}>Home</gem-active-link>
            </li>
            <li class="nav-item">
              <gem-active-link class="nav-link" .route=${routes.editor}>
                <i class="ion-compose"></i>&nbsp;New Post
              </gem-active-link>
            </li>
            <li class="nav-item">
              <gem-active-link class="nav-link" .route=${routes.settings}>
                <i class="ion-gear-a"></i>&nbsp;Settings
              </gem-active-link>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }
}
