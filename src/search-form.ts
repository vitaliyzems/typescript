import { Dates } from './dateFormat.js';
import { renderBlock } from './lib.js';
import { Hotel, HotelSdk, SearchFormData } from './types.js';
import { search } from './fetch.js';
import { renderSearchResultsBlock } from './search-results.js';

const checkInDate = new Date();
const checkOutDate = new Date();
checkOutDate.setDate(checkInDate.getDate() + 2);

function formHandle(event: Event): void {
  event.preventDefault();
  const checkInDateInput: HTMLInputElement | null = document.querySelector('#check-in-date');
  const checkOutDateInput: HTMLInputElement | null = document.querySelector('#check-out-date');
  const maxPriceInput: HTMLInputElement | null = document.querySelector('#max-price');
  const searchData = {
    checkInDate: checkInDateInput ? checkInDateInput.value : '',
    checkOutDate: checkOutDateInput ? checkOutDateInput.value : '',
    maxPrice: Number(maxPriceInput ? maxPriceInput.value : 0)
  };

  getVariants(searchData).then((hotels: Hotel[]) => renderSearchResultsBlock(hotels));
}

export function renderSearchFormBlock(): void {
  const date = new Dates();

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
    `
  );
  const searchForm: HTMLFormElement | null = document.querySelector('form');
  if (!searchForm) {
    return;
  }
  searchForm.addEventListener('submit', formHandle);
}

async function getVariants(data: SearchFormData) {
  const variants: Hotel[] = [];
  const result = await search(data);
  result.forEach(hotel => variants.push(hotel));

  const sdkHotels: HotelSdk[] = JSON.parse(localStorage.getItem('flat-rent-db') ?? '[]');

  sdkHotels.forEach(hotel => {
    const { id, title, details, photos, price } = hotel;
    const formatedHotel: Hotel = {
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
}