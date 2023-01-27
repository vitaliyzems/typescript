import { SearchFormData } from './types.js';

function dateToUnixStamp(date: Date) {
  return date.getTime() / 1000;
}

function responseToJson(requestPromise: Promise<any>) {
  return requestPromise
    .then((response: { text: () => any; }) => {
      return response.text();
    })
    .then((response: string) => {
      return JSON.parse(response);
    });
}

export function search(data: SearchFormData) {
  const checkInDate = new Date(data.checkInDate);
  const checkOutDate = new Date(data.checkOutDate);

  let url = `http://localhost:3030/places?` +
    `checkInDate=${dateToUnixStamp(checkInDate)}&` +
    `checkOutDate=${dateToUnixStamp(checkOutDate)}&` +
    `coordinates=59.9386,30.3141`;

  if (data.maxPrice != null) {
    url += `&maxPrice=${data.maxPrice}`;
  }

  return responseToJson(fetch(url));
}

// function book(placeId, checkInDate, checkOutDate) {
//   return responseToJson(fetch(
//     `http://localhost:3030/places/${placeId}?` +
//     `checkInDate=${dateToUnixStamp(checkInDate)}&` +
//     `checkOutDate=${dateToUnixStamp(checkOutDate)}&`,
//     { method: 'PATCH' }
//   ));
// }
