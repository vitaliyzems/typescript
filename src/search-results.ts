import { renderBlock } from './lib.js';
import { FavoriteItems, Hotel } from './types.js';
import { toggleFavoriteItem } from './favorite.js';

export function renderSearchStubBlock(): void {
  renderBlock(
    'search-results-block',
    `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `
  );
}

export function renderEmptyOrErrorSearchBlock(reasonMessage: string): void {
  renderBlock(
    'search-results-block',
    `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `
  );
}

export function renderSearchResultsBlock(variants: Hotel[]): void {
  const hotelsHTML = variants.map(hotel => {
    return getSearchResult(hotel);
  });

  renderBlock(
    'search-results-block',
    `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    <ul id="results-list" class="results-list">
      ${hotelsHTML.join('')}
    </ul>
    `
  );

  const searchResultBlock: HTMLElement = document.getElementById('search-results-block');

  searchResultBlock.addEventListener('click', (event: MouseEvent) => {
    const element = event.target as HTMLElement;
    if (!element.classList.contains('favorites')) {
      return;
    }
    const { id, name, image } = element.dataset;
    const item = { id, name, image };
    toggleFavoriteItem(item);
  });
}

function getSearchResult(hotel: Hotel): string {
  const { id, name, image, price, remoteness, description } = hotel;
  return `
    <li class="result">
      <div class="result-container">
        <div class="result-img-container">
          <div class="favorites ${isActive(id)}" data-id="${id}" data-name="${name}" data-image="${image}"></div>
          <img class="result-img" src="${image}" alt="">
        </div>	
        <div class="result-info">
          <div class="result-info--header">
            <p>${name}</p>
            <p class="price">${price}&#8381;</p>
          </div>
          <div class="result-info--map"><i class="map-icon"></i> ${remoteness}км от вас</div>
          <div class="result-info--descr">${description}</div>
          <div class="result-info--footer">
            <div>
              <button>Забронировать</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  `;
}

function isActive(id: string): string {
  const favoriteItems: FavoriteItems = JSON.parse(localStorage.getItem('favoriteItems'));

  if (favoriteItems == null) return '';

  if (favoriteItems[id] == null) return '';

  return 'active';
}