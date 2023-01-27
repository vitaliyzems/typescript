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
    <ul class="results-list">
    ${variants.map(hotel => renderSearchResult(hotel))}
    </ul>
    `);
    const searchResultBlock = document.getElementById('search-results-block');
    searchResultBlock.addEventListener('click', (event) => {
        const target = event.target;
        if (!target.classList.contains('favorites')) {
            return;
        }
        const { id, name, image } = target.dataset;
        const item = { id: Number(id), name, image };
        toggleFavoriteItem(item);
    });
}
function renderSearchResult(hotel) {
    const { id, name, image, price, remoteness, description } = hotel;
    return `
    <li class="result">
      <div class="result-container">
        <div class="result-img-container">
          <div class="favorites" data-id="${id}" data-name="${name}" data-image="${image}"></div>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLXJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV2QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsTUFBTSxVQUFVLHFCQUFxQjtJQUNuQyxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7OztLQUtDLENBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsNkJBQTZCLENBQUMsYUFBYTtJQUN6RCxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7V0FHTyxhQUFhOztLQUVuQixDQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLHdCQUF3QixDQUFDLFFBQWlCO0lBQ3hELFdBQVcsQ0FDVCxzQkFBc0IsRUFDdEI7Ozs7Ozs7Ozs7Ozs7TUFhRSxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7O0tBRWpELENBQ0YsQ0FBQztJQUVGLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBRTFFLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ3BELE1BQU0sTUFBTSxHQUFnQixLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUMzQyxPQUFPO1NBQ1I7UUFDRCxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzNDLE1BQU0sSUFBSSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDN0Msa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxLQUFZO0lBQ3RDLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQztJQUNsRSxPQUFPOzs7OzRDQUltQyxFQUFFLGdCQUFnQixJQUFJLGlCQUFpQixLQUFLO3lDQUMvQyxLQUFLOzs7O2lCQUk3QixJQUFJOytCQUNVLEtBQUs7O21FQUUrQixVQUFVOzRDQUNqQyxXQUFXOzs7Ozs7Ozs7R0FTcEQsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJztcbmltcG9ydCB7IEhvdGVsIH0gZnJvbSAnLi90eXBlcy5qcyc7XG5pbXBvcnQgeyB0b2dnbGVGYXZvcml0ZUl0ZW0gfSBmcm9tICcuL2Zhdm9yaXRlLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaFN0dWJCbG9jaygpIHtcbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1yZXN1bHRzLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImJlZm9yZS1yZXN1bHRzLWJsb2NrXCI+XG4gICAgICA8aW1nIHNyYz1cImltZy9zdGFydC1zZWFyY2gucG5nXCIgLz5cbiAgICAgIDxwPtCn0YLQvtCx0Ysg0L3QsNGH0LDRgtGMINC/0L7QuNGB0LosINC30LDQv9C+0LvQvdC40YLQtSDRhNC+0YDQvNGDINC4Jm5ic3A70L3QsNC20LzQuNGC0LUgXCLQndCw0LnRgtC4XCI8L3A+XG4gICAgPC9kaXY+XG4gICAgYFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRW1wdHlPckVycm9yU2VhcmNoQmxvY2socmVhc29uTWVzc2FnZSkge1xuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLXJlc3VsdHMtYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwibm8tcmVzdWx0cy1ibG9ja1wiPlxuICAgICAgPGltZyBzcmM9XCJpbWcvbm8tcmVzdWx0cy5wbmdcIiAvPlxuICAgICAgPHA+JHtyZWFzb25NZXNzYWdlfTwvcD5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hSZXN1bHRzQmxvY2sodmFyaWFudHM6IEhvdGVsW10pIHtcbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1yZXN1bHRzLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cInNlYXJjaC1yZXN1bHRzLWhlYWRlclwiPlxuICAgICAgICA8cD7QoNC10LfRg9C70YzRgtCw0YLRiyDQv9C+0LjRgdC60LA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0cy1maWx0ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzPVwiaWNvbiBpY29uLWZpbHRlclwiPjwvaT4g0KHQvtGA0YLQuNGA0L7QstCw0YLRjDo8L3NwYW4+XG4gICAgICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJcIj7QodC90LDRh9Cw0LvQsCDQtNC10YjRkdCy0YvQtTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJcIj7QodC90LDRh9Cw0LvQsCDQtNC+0YDQvtCz0LjQtTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+0KHQvdCw0YfQsNC70LAg0LHQu9C40LbQtTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDx1bCBjbGFzcz1cInJlc3VsdHMtbGlzdFwiPlxuICAgICR7dmFyaWFudHMubWFwKGhvdGVsID0+IHJlbmRlclNlYXJjaFJlc3VsdChob3RlbCkpfVxuICAgIDwvdWw+XG4gICAgYFxuICApO1xuXG4gIGNvbnN0IHNlYXJjaFJlc3VsdEJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1yZXN1bHRzLWJsb2NrJyk7XG5cbiAgc2VhcmNoUmVzdWx0QmxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0YXJnZXQ6IEhUTUxFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmF2b3JpdGVzJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBpZCwgbmFtZSwgaW1hZ2UgfSA9IHRhcmdldC5kYXRhc2V0O1xuICAgIGNvbnN0IGl0ZW0gPSB7IGlkOiBOdW1iZXIoaWQpLCBuYW1lLCBpbWFnZSB9O1xuICAgIHRvZ2dsZUZhdm9yaXRlSXRlbShpdGVtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclNlYXJjaFJlc3VsdChob3RlbDogSG90ZWwpIHtcbiAgY29uc3QgeyBpZCwgbmFtZSwgaW1hZ2UsIHByaWNlLCByZW1vdGVuZXNzLCBkZXNjcmlwdGlvbiB9ID0gaG90ZWw7XG4gIHJldHVybiBgXG4gICAgPGxpIGNsYXNzPVwicmVzdWx0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWltZy1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmF2b3JpdGVzXCIgZGF0YS1pZD1cIiR7aWR9XCIgZGF0YS1uYW1lPVwiJHtuYW1lfVwiIGRhdGEtaW1hZ2U9XCIke2ltYWdlfVwiPjwvZGl2PlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN1bHQtaW1nXCIgc3JjPVwiJHtpbWFnZX1cIiBhbHQ9XCJcIj5cbiAgICAgICAgPC9kaXY+XHRcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxwPiR7bmFtZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlXCI+JHtwcmljZX0mIzgzODE7PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tbWFwXCI+PGkgY2xhc3M9XCJtYXAtaWNvblwiPjwvaT4gJHtyZW1vdGVuZXNzfdC60Lwg0L7RgiDQstCw0YE8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWRlc2NyXCI+JHtkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbj7Ql9Cw0LHRgNC+0L3QuNGA0L7QstCw0YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgYDtcbn0iXX0=