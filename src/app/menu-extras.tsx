import React from "react";
import styles from "./page.module.css";
import { MenuElement } from "@/utils";

interface MenuExtrasProps {
  title?: string;
  items: MenuElement[];
}

const MenuExtras = ({ title, items }: MenuExtrasProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <>
      {title && <h3 className={`${styles.group} ${styles.extra}`}>{title}</h3>}
      <ul>
        {items?.map((item) => (
          <li key={item.nombre}>
            <p>{item.nombre}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuExtras;
