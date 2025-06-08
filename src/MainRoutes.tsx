import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { RestaurantList } from "./components/Restaurants";
import { HomePage } from "./pages/HomePage/homePage";
import { RestaurantPage } from "./pages/RestaurantPage/restaurantPage";
import { RestaurantDishPage } from "./pages/RestaurantDishPage/dishPage";
import { RestaurantReviewPage } from "./pages/RestaurantReviewPage/reviePage";
import { RestaurantDishDetailPage } from "./pages/RestaurantDishDetailPage/detailPage";
import { RestaurantSelectPage } from "./components/Restaurants/RestaurantSelectPage/restaurantSelectPage";

export function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dish/:dishId" element={<RestaurantDishDetailPage />} />
          <Route path="restaurants" element={<RestaurantList />}>
            <Route index element={<RestaurantSelectPage />} />
            <Route path=":restaurantId" element={<RestaurantPage />}>
              <Route index element={<RestaurantDishPage />} />
              <Route path="dishes" element={<RestaurantDishPage />} />
              <Route path="reviews" element={<RestaurantReviewPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
