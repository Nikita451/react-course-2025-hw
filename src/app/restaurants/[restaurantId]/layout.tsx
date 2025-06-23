import type { FC } from "react";
import { RestaurantView } from "../../../components/Restaurants/Restaurant";
import React from "react";

interface Props {
  params: {
    restaurantId: string;
  };
  children: React.JSX.Element;
}
const LayoutRestaurant: FC<Props> = async ({ params, children }) => {
  const { restaurantId } = await params;
  if (!restaurantId) {
    return null;
  }
  return <RestaurantView id={restaurantId}>{children}</RestaurantView>;
};

export default LayoutRestaurant;
