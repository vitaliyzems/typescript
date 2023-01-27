import { myDate } from './dateFormat.js';
import { renderBlock } from './lib.js';
import { search } from './fetch.js';
import { renderSearchResultsBlock } from './search-results.js';
const checkInDate = new Date();
const checkOutDate = new Date();
checkOutDate.setDate(checkInDate.getDate() + 2);
function formHandle(event) {
    event.preventDefault();
    const checkInDate = document.querySelector('#check-in-date');
    const checkOutDate = document.querySelector('#check-out-date');
    const maxPrice = document.querySelector('#max-price');
    const searchData = {
        checkInDate: checkInDate.value,
        checkOutDate: checkOutDate.value,
        maxPrice: Number(maxPrice.value)
    };
    search(searchData)
        .then((results) => renderSearchResultsBlock(results));
}
export function renderSearchFormBlock() {
    renderBlock('search-form-block', `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${myDate.addDays(1)}" min="${myDate.addDays()}" max="${myDate.getMaxDate()}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${myDate.addDays(3)}" min="${myDate.addDays(1)}" max="${myDate.getMaxDate()}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
    const searchForm = document.querySelector('form');
    searchForm.addEventListener('submit', formHandle);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNwQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUcvRCxNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQy9CLE1BQU0sWUFBWSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDaEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFaEQsU0FBUyxVQUFVLENBQUMsS0FBWTtJQUM5QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsTUFBTSxXQUFXLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMvRSxNQUFNLFlBQVksR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2pGLE1BQU0sUUFBUSxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hFLE1BQU0sVUFBVSxHQUFHO1FBQ2pCLFdBQVcsRUFBRSxXQUFXLENBQUMsS0FBSztRQUM5QixZQUFZLEVBQUUsWUFBWSxDQUFDLEtBQUs7UUFDaEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0tBQ2pDLENBQUM7SUFFRixNQUFNLENBQUMsVUFBVSxDQUFDO1NBQ2YsSUFBSSxDQUFDLENBQUMsT0FBZ0IsRUFBRSxFQUFFLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNuRSxDQUFDO0FBRUQsTUFBTSxVQUFVLHFCQUFxQjtJQUNuQyxXQUFXLENBQ1QsbUJBQW1CLEVBQ25COzs7Ozs7Ozs7Ozs7Ozs7OzsyREFpQnVELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Ozs7NERBSXZFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxNQUFNLENBQUMsVUFBVSxFQUFFOzs7Ozs7Ozs7Ozs7S0FZaEksQ0FDRixDQUFDO0lBQ0YsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3BELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBteURhdGUgfSBmcm9tICcuL2RhdGVGb3JtYXQuanMnO1xuaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcyc7XG5pbXBvcnQgeyBIb3RlbCwgU2VhcmNoRm9ybURhdGEgfSBmcm9tICcuL3R5cGVzLmpzJztcbmltcG9ydCB7IHNlYXJjaCB9IGZyb20gJy4vZmV0Y2guanMnO1xuaW1wb3J0IHsgcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrIH0gZnJvbSAnLi9zZWFyY2gtcmVzdWx0cy5qcyc7XG5pbXBvcnQgeyB0b2dnbGVGYXZvcml0ZUl0ZW0gfSBmcm9tICcuL2Zhdm9yaXRlLmpzJztcblxuY29uc3QgY2hlY2tJbkRhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgY2hlY2tPdXREYXRlID0gbmV3IERhdGUoKTtcbmNoZWNrT3V0RGF0ZS5zZXREYXRlKGNoZWNrSW5EYXRlLmdldERhdGUoKSArIDIpO1xuXG5mdW5jdGlvbiBmb3JtSGFuZGxlKGV2ZW50OiBFdmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBjaGVja0luRGF0ZTogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVjay1pbi1kYXRlJyk7XG4gIGNvbnN0IGNoZWNrT3V0RGF0ZTogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVjay1vdXQtZGF0ZScpO1xuICBjb25zdCBtYXhQcmljZTogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXgtcHJpY2UnKTtcbiAgY29uc3Qgc2VhcmNoRGF0YSA9IHtcbiAgICBjaGVja0luRGF0ZTogY2hlY2tJbkRhdGUudmFsdWUsXG4gICAgY2hlY2tPdXREYXRlOiBjaGVja091dERhdGUudmFsdWUsXG4gICAgbWF4UHJpY2U6IE51bWJlcihtYXhQcmljZS52YWx1ZSlcbiAgfTtcblxuICBzZWFyY2goc2VhcmNoRGF0YSlcbiAgICAudGhlbigocmVzdWx0czogSG90ZWxbXSkgPT4gcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrKHJlc3VsdHMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaEZvcm1CbG9jaygpIHtcbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1mb3JtLWJsb2NrJyxcbiAgICBgXG4gICAgPGZvcm0+XG4gICAgICA8ZmllbGRzZXQgY2xhc3M9XCJzZWFyY2gtZmlsZWRzZXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPtCT0L7RgNC+0LQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQgdmFsdWU9XCLQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs1wiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGRpc2FibGVkIHZhbHVlPVwiNTkuOTM4NiwzMC4zMTQxXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInByb3ZpZGVyc1wiPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImhvbXlcIiBjaGVja2VkIC8+IEhvbXk8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImZsYXQtcmVudFwiIGNoZWNrZWQgLz4gRmxhdFJlbnQ8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2Pi0tIT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLWluLWRhdGVcIj7QlNCw0YLQsCDQt9Cw0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2staW4tZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke215RGF0ZS5hZGREYXlzKDEpfVwiIG1pbj1cIiR7bXlEYXRlLmFkZERheXMoKX1cIiBtYXg9XCIke215RGF0ZS5nZXRNYXhEYXRlKCl9XCIgbmFtZT1cImNoZWNraW5cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj7QlNCw0YLQsCDQstGL0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtteURhdGUuYWRkRGF5cygzKX1cIiBtaW49XCIke215RGF0ZS5hZGREYXlzKDEpfVwiIG1heD1cIiR7bXlEYXRlLmdldE1heERhdGUoKX1cIiBuYW1lPVwiY2hlY2tvdXRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWF4LXByaWNlXCI+0JzQsNC60YEuINGG0LXQvdCwINGB0YPRgtC+0Lo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibWF4LXByaWNlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIG5hbWU9XCJwcmljZVwiIGNsYXNzPVwibWF4LXByaWNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj48YnV0dG9uPtCd0LDQudGC0Lg8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvZm9ybT5cbiAgICBgXG4gICk7XG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIHNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZm9ybUhhbmRsZSk7XG59XG5cbiJdfQ==