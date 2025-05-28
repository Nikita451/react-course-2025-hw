import { type FC } from "react";
import type { Menu } from "../../../data/types";
import Counter from "../../Counter";
import styles from "./menu.module.scss";

export interface Props {
  menu: Menu[];
}

const MIN_COUNT: number = 0;
const MAX_COUNT: number = 5;

export const RestaurantMenu: FC<Props> = ({ menu }) => {
  if (!menu.length) {
    return <div>Меню данного ресторана в процессе подготовки</div>;
  }
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map(({ name, id }) => (
          <div key={id} className={styles.menu}>
            <li>{name}</li>
            <Counter min={MIN_COUNT} max={MAX_COUNT} />
          </div>
        ))}
      </ul>
    </>
  );
};
