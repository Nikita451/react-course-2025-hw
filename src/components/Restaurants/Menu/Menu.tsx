import { useContext, type FC } from "react";
import styles from "./menu.module.scss";
import Counter from "../../Counter";
import type { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { AuthContext } from "../../../context/AuthContext/authContext";
import { getMenuById } from "../../../redux/slices/menuSlice";

interface Props {
  id: string;
}

const MIN_COUNT: number = 0;
const MAX_COUNT: number = 5;

export const MenuView: FC<Props> = ({ id }) => {
  const {
    user: { isAuthorized },
  } = useContext(AuthContext);
  const menu = useSelector((state: RootState) => getMenuById(state, id));
  const { name } = menu;

  return (
    <div className={styles.menu}>
      <li>{name}</li>
      {isAuthorized && <Counter min={MIN_COUNT} max={MAX_COUNT} />}
    </div>
  );
};
