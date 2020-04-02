import { html, GemElement, customElement } from '@mantou/gem';

import '@mantou/gem/elements/route';
import '@mantou/gem/elements/title';
import routes from 'src/routes';

import 'src/elements/header';

@customElement('rwg-root')
export class App extends GemElement {
  constructor() {
    super(false);
  }
  render() {
    return html`
      <rwg-ele-header></rwg-ele-header>
      <gem-route .routes=${routes}></gem-route>
    `;
  }
}
