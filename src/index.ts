import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { getUserData, renderUserBlock, writeUser } from './user.js';
import { renderToast } from './lib.js';
import { FavoriteItems } from './types.js';

writeUser({ userName: 'Test User', avatarUrl: '/public/img/avatar.png' });

const user = getUserData();

localStorage.removeItem('favoriteItems');

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

function getFavoritesAmount(): number {
  const favoriteItemsJson = localStorage.favoriteItems;

  if (!favoriteItemsJson) {
    return 0;
  }

  const favoriteItems: FavoriteItems = JSON.parse(favoriteItemsJson);
  const count = Object.keys(favoriteItems).length;

  renderUserBlock(user.userName, user.avatarUrl, count);
  return count;
}