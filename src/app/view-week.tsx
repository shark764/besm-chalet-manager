import React from "react";
import { days } from "@/utils";
import styles from "./page.module.css";
import useMenu from "./useMenu";
import MenuDay from "./menu-day";
import useMenuStore from "./hooks/useMenuStore";

export const ViewWeek = () => {
  const weekMenu = useMenuStore((state) => state.weekMenu);
  const weekStatus = useMenuStore((state) => state.weekStatus);
  const clearMenu = useMenuStore((state) => state.clearMenu);

  const {
    onGenerateItem,
    onGenerateMenu,
    onGenerateDayMenu,
    onSaveMenu,

    onChangeDayStatus,
  } = useMenu();

  return (
    <>
      <div className={styles.buttons}>
        <button
          type="button"
          className={styles.primary}
          onClick={onGenerateMenu}
        >
          Generar nuevo menú
        </button>

        <button type="button" className={styles.secondary} onClick={onSaveMenu}>
          Guardar menú
        </button>

        <button type="button" className={styles.secondary} onClick={clearMenu}>
          Limpiar menú
        </button>
      </div>

      <h1>Menu</h1>
      <div className={styles.cards}>
        {days.map((day) => {
          const dayMenu = weekMenu?.[day];
          const dayStatus = weekStatus?.[day];

          const changeDayMenu = () => {
            onGenerateDayMenu(day);
          };

          const onChangeDayView = (view: "menu" | "requirement") => {
            onChangeDayStatus(day, {
              ...dayStatus,
              view,
            });
          };

          return (
            <MenuDay
              key={day}
              day={day}
              dayMenu={dayMenu}
              dayStatus={dayStatus}
              onGenerateDayMenu={changeDayMenu}
              onGenerateItem={onGenerateItem}
              onChangeDayView={onChangeDayView}
            />
          );
        })}
      </div>
    </>
  );
};

export default ViewWeek;
