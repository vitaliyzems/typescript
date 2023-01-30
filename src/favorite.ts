import { FavoriteHotel, FavoriteItems, FavoritesCaption } from './types.js';

export function toggleFavoriteItem(item: FavoriteHotel) {
  const icon: HTMLElement = document.querySelector(`[data-id="${item.id}"]`);
  const fav: HTMLElement = document.querySelector('.fav');

  const favoriteItems: FavoriteItems = JSON.parse(localStorage.getItem('favoriteItems'));

  if (favoriteItems == null) {
    localStorage.favoriteItems = JSON.stringify({ [item.id]: item });
    icon.classList.add('active');
    fav.innerHTML = renderFavoritesBlock(getFavoritesAmount());
    return;
  }

  if (favoriteItems[item.id] == null) {
    favoriteItems[item.id] = item;
    localStorage.favoriteItems = JSON.stringify(favoriteItems);
    fav.innerHTML = renderFavoritesBlock(getFavoritesAmount());
    icon.classList.add('active');
  } else {
    delete favoriteItems[item.id];
    localStorage.favoriteItems = JSON.stringify(favoriteItems);
    fav.innerHTML = renderFavoritesBlock(getFavoritesAmount());
    icon.classList.remove('active');
  }
}

export function getFavoritesAmount(): number {
  const favoriteItemsJson: string = localStorage.favoriteItems;

  if (!favoriteItemsJson) {
    return 0;
  }

  const favoriteItems: FavoriteItems = JSON.parse(favoriteItemsJson);
  const count = Object.keys(favoriteItems).length;

  return count;
}

export function renderFavoritesBlock(favoritesCaption: FavoritesCaption): string {
  if (favoritesCaption === 0) {
    return `
      <i class="heart-icon"></i> ничего нет
    `;
  }

  return `
    <i class="heart-icon active"></i> ${favoritesCaption}
  `;
}