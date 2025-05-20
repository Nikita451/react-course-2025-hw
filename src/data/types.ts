export interface Restaurant {
  id: string;
  name: string;
  menu: Menu[];
  reviews: Review[];
}

export interface Menu {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}

export interface Review {
  id: string;
  user: string;
  text: string;
  rating: number;
}
