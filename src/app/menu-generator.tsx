"use client";

import styles from "./page.module.css";
import useMenuStore from "./hooks/useMenuStore";
import ViewDay from "./view-day";
import ViewWeek from "./view-week";
import { useEffect } from "react";

export const MenuGenerator = () => {
  const view = useMenuStore((state) => state.view);
  const day = useMenuStore((state) => state.day);
  const loadMenu = useMenuStore((state) => state.loadMenu);

  useEffect(() => {
    loadMenu();
  }, [loadMenu]);

  return (
    <div className={styles.container}>
      {view === "day" && !!day && <ViewDay />}

      {view === "week" && <ViewWeek />}
    </div>
  );
};

export default MenuGenerator;
