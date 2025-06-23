import React from "react";
import { RestaurantReviewsContainer } from "../../../../components/Restaurants/Review/restaurantReviewsContainer";

interface Props {
  params: {
    restaurantId: string;
  };
  children: React.JSX.Element;
}

const RestReviewPage = async ({ params }: Props) => {
  const { restaurantId } = await params;
  if (!restaurantId) {
    return null;
  }

  return <RestaurantReviewsContainer id={restaurantId} />;
};

export default RestReviewPage;
