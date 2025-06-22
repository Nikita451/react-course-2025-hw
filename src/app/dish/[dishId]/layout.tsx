import { ReactElement } from "react";
import RestaurantListWrapper from "../../restaurants/layout";

export default function DishDetailLayout({
  children,
}: {
  children: ReactElement;
}) {
  return <RestaurantListWrapper>{children}</RestaurantListWrapper>;
}
