import { MenuElement } from "@/utils";
import React from "react";
import MenuItem from "./menu-item";
import styles from "./page.module.css";

interface MenuGroupProps {
  title?: string;
  items: MenuElement[];
}

const MenuGroup = ({ title, items }: MenuGroupProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <>
      {title && <h3 className={styles.group}>{title}</h3>}
      <ul>
        {items.map((item) => (
          <MenuItem key={item.nombre} item={item} />
        ))}
      </ul>
    </>
  );
};

export default MenuGroup;
