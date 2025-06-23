"use client";
import type { FC } from "react";
import styles from "./restNavLink.style.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

interface Props {
  to: string;
  text: string;
}

const RestaurantNavLink: FC<Props> = ({ to, text }) => {
  const pathname = usePathname();
  const link = `/restaurants/${to}`;
  return (
    <Link
      className={classNames({
        [styles.active]: link === pathname,
      })}
      href={link}
    >
      {text}
    </Link>
  );
};

export default RestaurantNavLink;
