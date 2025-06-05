import { type FC } from "react";
import { MenuView } from "./Menu";

export interface Props {
  ids: string[];
}

export const RestaurantMenu: FC<Props> = ({ ids }) => {
  if (!ids.length) {
    return <div>Меню данного ресторана в процессе подготовки</div>;
  }

  return (
    <>
      <h3>Меню</h3>
      <ul>
        {ids.map((id) => (
          <MenuView key={id} id={id} />
        ))}
      </ul>
    </>
  );
};
