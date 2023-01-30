import { renderBlock } from './lib.js';
import { User } from './types.js';
import { renderFavoritesBlock } from './favorite.js';

export function writeUser(user: User): void {
  localStorage.user = JSON.stringify(user);
}

export function renderUserBlock(userName: string, avatarLink: string, favoriteItemsAmount: number): void {
  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src=${avatarLink} alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            ${renderFavoritesBlock(favoriteItemsAmount)}
          </p>
      </div>
    </div>
    `
  );
}

export function getUserData(): User {
  return JSON.parse(localStorage.user);
}
