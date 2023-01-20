import { myDate } from './dateFormat.js';
import { renderBlock } from './lib.js';
import { SearchFormData } from './types.js';

function formHandle(event: Event) {
  event.preventDefault();
  const city: HTMLInputElement = document.querySelector('#city');
  const checkInDate: HTMLInputElement = document.querySelector('#check-in-date');
  const checkOutDate: HTMLInputElement = document.querySelector('#check-out-date');
  const maxPrice: HTMLInputElement = document.querySelector('#max-price');
  const searchData = {
    city: city.value,
    checkInDate: checkInDate.value,
    checkOutDate: checkOutDate.value,
    maxPrice: Number(maxPrice.value)
  };
  searchVariants(searchData);
}

function searchVariants(data: SearchFormData) {
  console.log(data);
}

export function renderSearchFormBlock(
) {
  renderBlock(
    'search-form-block',
    `
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
    `
  );
  const searchForm = document.querySelector('form');
  searchForm.addEventListener('submit', formHandle);
}
