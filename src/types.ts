export interface User {
  userName: string;
  avatarUrl: string;
}

export interface SearchFormData {
  city: string;
  checkInDate: string;
  checkOutDate: string;
  maxPrice: number;
}