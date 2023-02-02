import { renderBlock } from './lib.js';
import { toggleFavoriteItem } from './favorite.js';
export function renderSearchStubBlock() {
    renderBlock('search-results-block', `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `);
}
export function renderEmptyOrErrorSearchBlock(reasonMessage) {
    renderBlock('search-results-block', `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `);
}
export function renderSearchResultsBlock(variants) {
    const hotelsHTML = variants.map(hotel => {
        return getSearchResult(hotel);
    });
    renderBlock('search-results-block', `
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
    `);
    const searchResultBlock = document.getElementById('search-results-block');
    searchResultBlock.addEventListener('click', (event) => {
        const element = event.target;
        if (!element.classList.contains('favorites')) {
            return;
        }
        const { id, name, image } = element.dataset;
        const item = { id, name, image };
        toggleFavoriteItem(item);
    });
}
function getSearchResult(hotel) {
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
function isActive(id) {
    const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems'));
    if (favoriteItems == null)
        return '';
    if (favoriteItems[id] == null)
        return '';
    return 'active';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLXJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV2QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsTUFBTSxVQUFVLHFCQUFxQjtJQUNuQyxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7OztLQUtDLENBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsNkJBQTZCLENBQUMsYUFBcUI7SUFDakUsV0FBVyxDQUNULHNCQUFzQixFQUN0Qjs7O1dBR08sYUFBYTs7S0FFbkIsQ0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSx3QkFBd0IsQ0FBQyxRQUFpQjtJQUN4RCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3RDLE9BQU8sZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBRUgsV0FBVyxDQUNULHNCQUFzQixFQUN0Qjs7Ozs7Ozs7Ozs7OztRQWFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOztLQUV0QixDQUNGLENBQUM7SUFFRixNQUFNLGlCQUFpQixHQUFnQixRQUFRLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFFdkYsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBaUIsRUFBRSxFQUFFO1FBQ2hFLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFxQixDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUM1QyxPQUFPO1NBQ1I7UUFDRCxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQzVDLE1BQU0sSUFBSSxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUNqQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLGVBQWUsQ0FBQyxLQUFZO0lBQ25DLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQztJQUNsRSxPQUFPOzs7O2tDQUl5QixRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsSUFBSSxpQkFBaUIsS0FBSzt5Q0FDL0QsS0FBSzs7OztpQkFJN0IsSUFBSTsrQkFDVSxLQUFLOzttRUFFK0IsVUFBVTs0Q0FDakMsV0FBVzs7Ozs7Ozs7O0dBU3BELENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsRUFBVTtJQUMxQixNQUFNLGFBQWEsR0FBa0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFFdkYsSUFBSSxhQUFhLElBQUksSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBRXJDLElBQUksYUFBYSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUk7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUV6QyxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcyc7XG5pbXBvcnQgeyBGYXZvcml0ZUl0ZW1zLCBIb3RlbCB9IGZyb20gJy4vdHlwZXMuanMnO1xuaW1wb3J0IHsgdG9nZ2xlRmF2b3JpdGVJdGVtIH0gZnJvbSAnLi9mYXZvcml0ZS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hTdHViQmxvY2soKTogdm9pZCB7XG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJiZWZvcmUtcmVzdWx0cy1ibG9ja1wiPlxuICAgICAgPGltZyBzcmM9XCJpbWcvc3RhcnQtc2VhcmNoLnBuZ1wiIC8+XG4gICAgICA8cD7Qp9GC0L7QsdGLINC90LDRh9Cw0YLRjCDQv9C+0LjRgdC6LCDQt9Cw0L/QvtC70L3QuNGC0LUg0YTQvtGA0LzRgyDQuCZuYnNwO9C90LDQttC80LjRgtC1IFwi0J3QsNC50YLQuFwiPC9wPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckVtcHR5T3JFcnJvclNlYXJjaEJsb2NrKHJlYXNvbk1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLXJlc3VsdHMtYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwibm8tcmVzdWx0cy1ibG9ja1wiPlxuICAgICAgPGltZyBzcmM9XCJpbWcvbm8tcmVzdWx0cy5wbmdcIiAvPlxuICAgICAgPHA+JHtyZWFzb25NZXNzYWdlfTwvcD5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hSZXN1bHRzQmxvY2sodmFyaWFudHM6IEhvdGVsW10pOiB2b2lkIHtcbiAgY29uc3QgaG90ZWxzSFRNTCA9IHZhcmlhbnRzLm1hcChob3RlbCA9PiB7XG4gICAgcmV0dXJuIGdldFNlYXJjaFJlc3VsdChob3RlbCk7XG4gIH0pO1xuXG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0cy1oZWFkZXJcIj5cbiAgICAgICAgPHA+0KDQtdC30YPQu9GM0YLQsNGC0Ysg0L/QvtC40YHQutCwPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXJlc3VsdHMtZmlsdGVyXCI+XG4gICAgICAgICAgICA8c3Bhbj48aSBjbGFzcz1cImljb24gaWNvbi1maWx0ZXJcIj48L2k+INCh0L7RgNGC0LjRgNC+0LLQsNGC0Yw6PC9zcGFuPlxuICAgICAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwiXCI+0KHQvdCw0YfQsNC70LAg0LTQtdGI0ZHQstGL0LU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwiXCI+0KHQvdCw0YfQsNC70LAg0LTQvtGA0L7Qs9C40LU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPtCh0L3QsNGH0LDQu9CwINCx0LvQuNC20LU8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8dWwgaWQ9XCJyZXN1bHRzLWxpc3RcIiBjbGFzcz1cInJlc3VsdHMtbGlzdFwiPlxuICAgICAgJHtob3RlbHNIVE1MLmpvaW4oJycpfVxuICAgIDwvdWw+XG4gICAgYFxuICApO1xuXG4gIGNvbnN0IHNlYXJjaFJlc3VsdEJsb2NrOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcmVzdWx0cy1ibG9jaycpO1xuXG4gIHNlYXJjaFJlc3VsdEJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYXZvcml0ZXMnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGlkLCBuYW1lLCBpbWFnZSB9ID0gZWxlbWVudC5kYXRhc2V0O1xuICAgIGNvbnN0IGl0ZW0gPSB7IGlkLCBuYW1lLCBpbWFnZSB9O1xuICAgIHRvZ2dsZUZhdm9yaXRlSXRlbShpdGVtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFNlYXJjaFJlc3VsdChob3RlbDogSG90ZWwpOiBzdHJpbmcge1xuICBjb25zdCB7IGlkLCBuYW1lLCBpbWFnZSwgcHJpY2UsIHJlbW90ZW5lc3MsIGRlc2NyaXB0aW9uIH0gPSBob3RlbDtcbiAgcmV0dXJuIGBcbiAgICA8bGkgY2xhc3M9XCJyZXN1bHRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmYXZvcml0ZXMgJHtpc0FjdGl2ZShpZCl9XCIgZGF0YS1pZD1cIiR7aWR9XCIgZGF0YS1uYW1lPVwiJHtuYW1lfVwiIGRhdGEtaW1hZ2U9XCIke2ltYWdlfVwiPjwvZGl2PlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN1bHQtaW1nXCIgc3JjPVwiJHtpbWFnZX1cIiBhbHQ9XCJcIj5cbiAgICAgICAgPC9kaXY+XHRcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxwPiR7bmFtZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlXCI+JHtwcmljZX0mIzgzODE7PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tbWFwXCI+PGkgY2xhc3M9XCJtYXAtaWNvblwiPjwvaT4gJHtyZW1vdGVuZXNzfdC60Lwg0L7RgiDQstCw0YE8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWRlc2NyXCI+JHtkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbj7Ql9Cw0LHRgNC+0L3QuNGA0L7QstCw0YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgYDtcbn1cblxuZnVuY3Rpb24gaXNBY3RpdmUoaWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGZhdm9yaXRlSXRlbXM6IEZhdm9yaXRlSXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZUl0ZW1zJykpO1xuXG4gIGlmIChmYXZvcml0ZUl0ZW1zID09IG51bGwpIHJldHVybiAnJztcblxuICBpZiAoZmF2b3JpdGVJdGVtc1tpZF0gPT0gbnVsbCkgcmV0dXJuICcnO1xuXG4gIHJldHVybiAnYWN0aXZlJztcbn0iXX0=