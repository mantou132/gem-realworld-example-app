import { html, GemElement, customElement } from '@mantou/gem';

import '@mantou/gem/elements/route';
import '@mantou/gem/elements/title';
import 'src/elements/nav';
import routes from 'src/routes';

@customElement('app-root')
export class App extends GemElement {
  render() {
    return html`
      <style>
        app-nav {
          margin-top: 5em;
        }
      </style>
      <app-nav></app-nav>
      <gem-route .routes=${routes}></gem-route>
    `;
  }
}
