import { memo } from "react";
import type { Menu } from "../../../data/types";

export interface Props {
  menu: Menu[];
}

function Menu({ menu }: Props) {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default memo(Menu);
