var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Dates } from './dateFormat.js';
import { renderBlock } from './lib.js';
import { search } from './fetch.js';
import { renderSearchResultsBlock } from './search-results.js';
const checkInDate = new Date();
const checkOutDate = new Date();
checkOutDate.setDate(checkInDate.getDate() + 2);
function formHandle(event) {
    event.preventDefault();
    const checkInDateInput = document.querySelector('#check-in-date');
    const checkOutDateInput = document.querySelector('#check-out-date');
    const maxPriceInput = document.querySelector('#max-price');
    const searchData = {
        checkInDate: checkInDateInput.value,
        checkOutDate: checkOutDateInput.value,
        maxPrice: Number(maxPriceInput.value)
    };
    getVariants(searchData).then((hotels) => renderSearchResultsBlock(hotels));
}
export function renderSearchFormBlock() {
    const date = new Dates();
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
            <input id="check-in-date" type="date" value="${date.addDays(1)}" min="${date.getMinDate()}" max="${date.getMaxDate()}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${date.addDays(3)}" min="${date.addDays(1)}" max="${date.getMaxDate()}" name="checkout" />
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
function getVariants(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const variants = [];
        const result = yield search(data);
        result.forEach(hotel => variants.push(hotel));
        const sdkHotels = JSON.parse(localStorage.getItem('flat-rent-db'));
        sdkHotels.forEach(hotel => {
            const { id, title, details, photos, price } = hotel;
            const formatedHotel = {
                id,
                name: title,
                description: details,
                price,
                image: photos[0],
                remoteness: 0
            };
            variants.push(formatedHotel);
        });
        return variants;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNwQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUvRCxNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQy9CLE1BQU0sWUFBWSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDaEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFaEQsU0FBUyxVQUFVLENBQUMsS0FBWTtJQUM5QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsTUFBTSxnQkFBZ0IsR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3BGLE1BQU0saUJBQWlCLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN0RixNQUFNLGFBQWEsR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3RSxNQUFNLFVBQVUsR0FBRztRQUNqQixXQUFXLEVBQUUsZ0JBQWdCLENBQUMsS0FBSztRQUNuQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsS0FBSztRQUNyQyxRQUFRLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7S0FDdEMsQ0FBQztJQUVGLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFlLEVBQUUsRUFBRSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDdEYsQ0FBQztBQUVELE1BQU0sVUFBVSxxQkFBcUI7SUFDbkMsTUFBTSxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUV6QixXQUFXLENBQ1QsbUJBQW1CLEVBQ25COzs7Ozs7Ozs7Ozs7Ozs7OzsyREFpQnVELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFVLElBQUksQ0FBQyxVQUFVLEVBQUU7Ozs7NERBSXBFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsVUFBVSxFQUFFOzs7Ozs7Ozs7Ozs7S0FZMUgsQ0FDRixDQUFDO0lBQ0YsTUFBTSxVQUFVLEdBQW9CLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkUsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBRUQsU0FBZSxXQUFXLENBQUMsSUFBb0I7O1FBQzdDLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNwQixNQUFNLE1BQU0sR0FBRyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRTlDLE1BQU0sU0FBUyxHQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBRS9FLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEIsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDcEQsTUFBTSxhQUFhLEdBQVU7Z0JBQzNCLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLEtBQUs7Z0JBQ0wsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLFVBQVUsRUFBRSxDQUFDO2FBQ2QsQ0FBQztZQUNGLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlcyB9IGZyb20gJy4vZGF0ZUZvcm1hdC5qcyc7XG5pbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJztcbmltcG9ydCB7IEhvdGVsLCBIb3RlbFNkaywgU2VhcmNoRm9ybURhdGEgfSBmcm9tICcuL3R5cGVzLmpzJztcbmltcG9ydCB7IHNlYXJjaCB9IGZyb20gJy4vZmV0Y2guanMnO1xuaW1wb3J0IHsgcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrIH0gZnJvbSAnLi9zZWFyY2gtcmVzdWx0cy5qcyc7XG5cbmNvbnN0IGNoZWNrSW5EYXRlID0gbmV3IERhdGUoKTtcbmNvbnN0IGNoZWNrT3V0RGF0ZSA9IG5ldyBEYXRlKCk7XG5jaGVja091dERhdGUuc2V0RGF0ZShjaGVja0luRGF0ZS5nZXREYXRlKCkgKyAyKTtcblxuZnVuY3Rpb24gZm9ybUhhbmRsZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgY2hlY2tJbkRhdGVJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVjay1pbi1kYXRlJyk7XG4gIGNvbnN0IGNoZWNrT3V0RGF0ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrLW91dC1kYXRlJyk7XG4gIGNvbnN0IG1heFByaWNlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWF4LXByaWNlJyk7XG4gIGNvbnN0IHNlYXJjaERhdGEgPSB7XG4gICAgY2hlY2tJbkRhdGU6IGNoZWNrSW5EYXRlSW5wdXQudmFsdWUsXG4gICAgY2hlY2tPdXREYXRlOiBjaGVja091dERhdGVJbnB1dC52YWx1ZSxcbiAgICBtYXhQcmljZTogTnVtYmVyKG1heFByaWNlSW5wdXQudmFsdWUpXG4gIH07XG5cbiAgZ2V0VmFyaWFudHMoc2VhcmNoRGF0YSkudGhlbigoaG90ZWxzOiBIb3RlbFtdKSA9PiByZW5kZXJTZWFyY2hSZXN1bHRzQmxvY2soaG90ZWxzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hGb3JtQmxvY2soKTogdm9pZCB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZXMoKTtcblxuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLWZvcm0tYmxvY2snLFxuICAgIGBcbiAgICA8Zm9ybT5cbiAgICAgIDxmaWVsZHNldCBjbGFzcz1cInNlYXJjaC1maWxlZHNldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCI+0JPQvtGA0L7QtDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaXR5XCIgdHlwZT1cInRleHRcIiBkaXNhYmxlZCB2YWx1ZT1cItCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgZGlzYWJsZWQgdmFsdWU9XCI1OS45Mzg2LDMwLjMxNDFcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicHJvdmlkZXJzXCI+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiaG9teVwiIGNoZWNrZWQgLz4gSG9teTwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiZmxhdC1yZW50XCIgY2hlY2tlZCAvPiBGbGF0UmVudDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+LS0hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2staW4tZGF0ZVwiPtCU0LDRgtCwINC30LDQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1pbi1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7ZGF0ZS5hZGREYXlzKDEpfVwiIG1pbj1cIiR7ZGF0ZS5nZXRNaW5EYXRlKCl9XCIgbWF4PVwiJHtkYXRlLmdldE1heERhdGUoKX1cIiBuYW1lPVwiY2hlY2tpblwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1vdXQtZGF0ZVwiPtCU0LDRgtCwINCy0YvQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1vdXQtZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke2RhdGUuYWRkRGF5cygzKX1cIiBtaW49XCIke2RhdGUuYWRkRGF5cygxKX1cIiBtYXg9XCIke2RhdGUuZ2V0TWF4RGF0ZSgpfVwiIG5hbWU9XCJjaGVja291dFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYXgtcHJpY2VcIj7QnNCw0LrRgS4g0YbQtdC90LAg0YHRg9GC0L7QujwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJtYXgtcHJpY2VcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgbmFtZT1cInByaWNlXCIgY2xhc3M9XCJtYXgtcHJpY2VcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PjxidXR0b24+0J3QsNC50YLQuDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9mb3JtPlxuICAgIGBcbiAgKTtcbiAgY29uc3Qgc2VhcmNoRm9ybTogSFRNTEZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZvcm1IYW5kbGUpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRWYXJpYW50cyhkYXRhOiBTZWFyY2hGb3JtRGF0YSkge1xuICBjb25zdCB2YXJpYW50cyA9IFtdO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZWFyY2goZGF0YSk7XG4gIHJlc3VsdC5mb3JFYWNoKGhvdGVsID0+IHZhcmlhbnRzLnB1c2goaG90ZWwpKTtcblxuICBjb25zdCBzZGtIb3RlbHM6IEhvdGVsU2RrW10gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmbGF0LXJlbnQtZGInKSk7XG5cbiAgc2RrSG90ZWxzLmZvckVhY2goaG90ZWwgPT4ge1xuICAgIGNvbnN0IHsgaWQsIHRpdGxlLCBkZXRhaWxzLCBwaG90b3MsIHByaWNlIH0gPSBob3RlbDtcbiAgICBjb25zdCBmb3JtYXRlZEhvdGVsOiBIb3RlbCA9IHtcbiAgICAgIGlkLFxuICAgICAgbmFtZTogdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogZGV0YWlscyxcbiAgICAgIHByaWNlLFxuICAgICAgaW1hZ2U6IHBob3Rvc1swXSxcbiAgICAgIHJlbW90ZW5lc3M6IDBcbiAgICB9O1xuICAgIHZhcmlhbnRzLnB1c2goZm9ybWF0ZWRIb3RlbCk7XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYW50cztcbn0iXX0=