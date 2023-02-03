import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { getUserData, renderUserBlock, writeUser } from './user.js';
import { renderToast } from './lib.js';
import { getFavoritesAmount } from './favorite.js';
import { ToastMessage, ToastAction } from './types.js';
import { FlatRentSdk } from './flat-rent-sdk.js';

writeUser({ userName: 'Test User', avatarUrl: '/public/img/avatar.png' });
const sdk = new FlatRentSdk();

const user = getUserData();

const toastMessage: ToastMessage = {
  text: 'Это пример уведомления. Используйте его при необходимости',
  type: 'success'
};

const toastAction: ToastAction = {
  name: 'Понял',
  handler: () => {
    console.log('Уведомление закрыто');
  },
};

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(user.userName, user.avatarUrl, getFavoritesAmount());
  renderSearchFormBlock();
  renderSearchStubBlock();
  renderToast(toastMessage, toastAction);
});
