import { Day, MenuElement } from "@/utils";
import React from "react";
import MenuItem from "./menu-item";
import styles from "./page.module.css";

interface MenuGroupProps {
  title?: string;
  group?: string;
  day?: Day;
  items: MenuElement[];
  onRefreshItem?: (item: MenuElement) => void;
}

const MenuGroup = ({ title, items, onRefreshItem }: MenuGroupProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <>
      {title && <h3 className={styles.group}>{title}</h3>}
      <ul>
        {items.map((item) => (
          <MenuItem key={item.nombre} item={item} onRefresh={onRefreshItem} />
        ))}
      </ul>
    </>
  );
};

export default MenuGroup;
