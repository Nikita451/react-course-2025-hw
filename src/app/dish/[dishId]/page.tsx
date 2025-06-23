import { ReactElement } from "react";
import { DishDetailView } from "../../../components/Restaurants/Dish/DishDetailView";

interface Props {
  params: {
    dishId: string;
  };
  children: ReactElement;
}

const RestDishPage = async ({ params }: Props) => {
  const { dishId } = await params;
  if (!dishId) {
    return null;
  }

  return <DishDetailView id={dishId} />;
};

export default RestDishPage;
