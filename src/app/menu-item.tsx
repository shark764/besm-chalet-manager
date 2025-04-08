import React from "react";
import { MenuElement } from "@/utils";
import styles from "./page.module.css";
import RefreshIcon from "@/icons/refresh";

type MenuItemProps = {
  item: MenuElement;
  group?: string;
  onRefresh?: (item: MenuElement) => void;
};

const MenuItem = ({ item, onRefresh }: MenuItemProps) => {
  const handleRefresh = () => {
    onRefresh?.(item);
  };

  return (
    <li key={item.nombre}>
      <div className={styles.itemHeader}>
        <h3>{item.nombre}</h3>
        <button
          type="button"
          className={styles.buttonIcon}
          onClick={handleRefresh}
          title="Refresh"
        >
          <RefreshIcon />
        </button>
      </div>
      <p>{item.complementos?.join(", ")}</p>
      <p className={styles.price}>${item.precio?.toFixed(2)}</p>
    </li>
  );
};

export default MenuItem;
