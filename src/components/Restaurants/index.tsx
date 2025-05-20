import { memo } from "react";
import type { Restaurant } from "../../data/types";
import Menu from "./Menu";
import Review from "./Review";
import styles from "./style.module.scss";

interface Props {
  restaurants: Restaurant[];
}

function Restaurant({ restaurants }: Props) {
  return (
    <>
      {restaurants.map(({ name, id, menu, reviews }) => (
        <div className={styles.restaurant} key={id}>
          <h2>{name}</h2>
          <Menu menu={menu} />
          <Review reviews={reviews} />
        </div>
      ))}
    </>
  );
}

export default memo(Restaurant);
