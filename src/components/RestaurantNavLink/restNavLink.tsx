import type { FC } from "react";
import { NavLink } from "react-router";
import styles from "./restNavLink.style.module.scss";

interface Props {
  to: string;
  text: string;
}

export const RestaurantNavLink: FC<Props> = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? styles.active : "")}
    >
      {text}
    </NavLink>
  );
};
