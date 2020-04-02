import { html } from '@mantou/gem';
import { RouteItem } from '@mantou/gem/elements/route';

import 'src/pages/home';
import 'src/pages/article';
import 'src/pages/editor';
import 'src/pages/login';
import 'src/pages/register';
import 'src/pages/settings';

const home: RouteItem = {
  title: 'Home',
  pattern: '/',
  content: html`
    <rwg-page-home></rwg-page-home>
  `,
};

const article: RouteItem = {
  title: 'Article',
  pattern: '/article',
  content: html`
    <rwg-page-article></rwg-page-article>
  `,
};

const editor: RouteItem = {
  title: 'Editor',
  pattern: '/editor',
  content: html`
    <rwg-page-editor></rwg-page-editor>
  `,
};

const login: RouteItem = {
  title: 'Login',
  pattern: '/login',
  content: html`
    <rwg-page-login></rwg-page-login>
  `,
};

const register: RouteItem = {
  title: 'Register',
  pattern: '/register',
  content: html`
    <rwg-page-register></rwg-page-register>
  `,
};

const settings: RouteItem = {
  title: 'Settings',
  pattern: '/settings',
  content: html`
    <rwg-page-settings></rwg-page-settings>
  `,
};

export default {
  home,
  article,
  editor,
  login,
  register,
  settings,
};
