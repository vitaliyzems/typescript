import { SearchFormData, Hotel } from './types.js';

function dateToUnixStamp(date: Date): number {
  return date.getTime() / 1000;
}

async function responseToJson(requestPromise: Promise<Response>): Promise<Hotel[]> {
  const response: Response = await requestPromise;
  const json: string = await response.text();
  const hotels: Hotel[] = JSON.parse(json);
  return hotels;
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
