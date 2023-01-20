import { renderBlock } from './lib.js';
export function renderUserBlock(userName, avatarLink, favoriteItemsAmount) {
    const favoritesCaption = favoriteItemsAmount
        ? favoriteItemsAmount
        : 'ничего нет';
    const hasFavoriteItems = favoriteItemsAmount ? true : false;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src=${avatarLink} alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
export function getUserData() {
    return JSON.parse(localStorage.user);
}
export function getFavoritesAmount() {
    return Number(localStorage.favoritesAmount);
}
