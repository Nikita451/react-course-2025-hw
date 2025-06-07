export interface Restaurant {
  id: string;
  name: string;
  dishes: Dish[];
  reviews: Review[];
}

export interface Dish {
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

export interface RestaurantNormalized {
  id: string;
  name: string;
  dishes: string[];
  reviews: string[];
}

export interface ReviewNormalized {
  id: string;
  userId: string;
  text: string;
  rating: number;
}

export interface User {
  id: string;
  name: string;
}
