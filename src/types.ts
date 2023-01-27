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
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  remoteness: number;
}

export type FavoriteHotel = Pick<Hotel, 'id' | 'name' | 'image'>;

export interface FavoriteItems {
  [key: number]: FavoriteHotel;
}