import React from "react";
import { MenuElement } from "@/utils";
import styles from "./page.module.css";

type MenuItemProps = {
  item: MenuElement;
};

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <li key={item.nombre}>
      <h3>{item.nombre}</h3>
      <p>{item.complementos?.join(", ")}</p>
      <p className={styles.price}>${item.precio?.toFixed(2)}</p>
    </li>
  );
};

export default MenuItem;
