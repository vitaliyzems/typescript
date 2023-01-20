import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { getFavoritesAmount, getUserData, renderUserBlock } from './user.js';
import { renderToast } from './lib.js';

const user = getUserData();

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(user.userName, user.avatarUrl, getFavoritesAmount());
  renderSearchFormBlock();
  renderSearchStubBlock();
  renderToast(
    {
      text: 'Это пример уведомления. Используйте его при необходимости',
      type: 'success',
    },
    {
      name: 'Понял',
      handler: () => {
        console.log('Уведомление закрыто');
      },
    }
  );
});
