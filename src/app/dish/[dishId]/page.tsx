import { ReactElement } from "react";
import { DishDetailView } from "../../../components/Restaurants/Dish/DishDetailView";

interface Props {
  params: {
    dishId: string;
  };
  children: ReactElement;
}

const RestReviewPage = async ({ params }: Props) => {
  const { dishId } = await params;
  if (!dishId) {
    return null;
  }

  return <DishDetailView id={dishId} />;
};

export default RestReviewPage;
