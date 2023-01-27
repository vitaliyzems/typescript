import { FavoriteHotel } from './types.js';

export function toggleFavoriteItem(item: FavoriteHotel) {
  const icon = document.querySelector(`[data-id="${item.id}"]`);
  const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems'));

  if (favoriteItems == null) {
    localStorage.favoriteItems = JSON.stringify({ [item.id]: item });
    icon.classList.add('active');
    return;
  }

  if (favoriteItems[item.id] == null) {
    favoriteItems[item.id] = item;
    localStorage.favoriteItems = JSON.stringify(favoriteItems);
    icon.classList.add('active');
  } else {
    delete favoriteItems[item.id];
    localStorage.favoriteItems = JSON.stringify(favoriteItems);
    icon.classList.remove('active');
  }
}
