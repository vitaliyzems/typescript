export interface ToastMessage {
  text: string;
  type: string;
}

export interface ToastAction {
  name: string;
  handler: () => void;
}

export interface User {
  userName: string;
  avatarUrl: string;
}

export interface SearchFormData {
  checkInDate: string;
  checkOutDate: string;
  maxPrice: number;
}

export interface Hotel {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  remoteness: number;
}

export interface HotelSdk {
  id: string;
  title: string;
  details: string;
  photos: string[];
  coordinates: number[];
  bookedDates: [];
  price: number;
}

export type FavoriteHotel = Pick<Hotel, 'id' | 'name' | 'image'>;

export interface FavoriteItems {
  [key: number]: FavoriteHotel;
}

export type FavoritesCaption = number | string;