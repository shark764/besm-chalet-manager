import React from "react";
import styles from "./page.module.css";
import RefreshIcon from "@/icons/refresh";
import RequirementsIcon from "@/icons/requirements";
import { Day, DayStatus, GeneratedMenu, MenuElement } from "@/utils";
import MenuListIcon from "@/icons/menu-list";
import MenuView from "./menu-view";
import RequirementsView from "./requirements-view";
import useMenuStore from "./hooks/useMenuStore";

interface MenuDayProps {
  day: Day;
  dayMenu?: GeneratedMenu;
  onGenerateDayMenu: (day: Day) => void;
  onGenerateItem: (
    day: Day,
    group: keyof GeneratedMenu,
    prevItem?: MenuElement
  ) => void;
  dayStatus?: DayStatus;
  onChangeDayView?: (view: "menu" | "requirement") => void;
}

const MenuDay = ({
  day,
  dayMenu,
  onGenerateDayMenu,
  onGenerateItem,
  dayStatus,
  onChangeDayView,
}: MenuDayProps) => {
  const toggleView = useMenuStore((state) => state.toggleView);

  const changeDayMenu = () => {
    onGenerateDayMenu(day);
  };

  const onViewChange = () => {
    onChangeDayView?.(dayStatus?.view === "menu" ? "requirement" : "menu");
  };

  const onToggleView = () => {
    toggleView(day);
  };

  return (
    <div key={day} className={styles.card} onDoubleClick={onToggleView}>
      <div className={styles.cardHeader}>
        <h2 className={styles.day}>{day}</h2>

        <div className={styles.cardHeaderButtons}>
          <button
            type="button"
            className={`${styles.buttonIcon} ${styles.buttonControl}`}
            onClick={onViewChange}
            title={
              dayStatus?.view === "menu" ? "Menu List" : "Requirements List"
            }
          >
            {dayStatus?.view === "menu" ? (
              <MenuListIcon />
            ) : (
              <RequirementsIcon />
            )}
          </button>

          <button
            type="button"
            className={`${styles.buttonIcon} ${styles.buttonControl}`}
            onClick={changeDayMenu}
            title="Refresh"
          >
            <RefreshIcon />
          </button>
        </div>
      </div>

      {dayStatus?.view === "menu" ? (
        <MenuView day={day} dayMenu={dayMenu} onGenerateItem={onGenerateItem} />
      ) : (
        <RequirementsView day={day} dayMenu={dayMenu} />
      )}
    </div>
  );
};

export default MenuDay;
