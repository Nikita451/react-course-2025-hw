import { RestaurantDishesContainer } from "../../../components/Restaurants/Dish/RestaurantDishContainer";
import React from "react";

interface Props {
  params: {
    restaurantId: string;
  };
  children: React.JSX.Element;
}

const DishesByRestId = async ({ params }: Props) => {
  const { restaurantId } = await params;
  if (!restaurantId) {
    return null;
  }

  return <RestaurantDishesContainer id={restaurantId} />;
};

export default DishesByRestId;
