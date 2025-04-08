"use client";

import {
  dayCants,
  generateItem,
  generateDayMenu,
  generateWeekMenu,
} from "./helpers";
import { Day, DayStatus, GeneratedMenu, menu, MenuElement } from "@/utils";
import useMenuStore from "./hooks/useMenuStore";

export const useMenu = () => {
  const weekMenu = useMenuStore((state) => state.weekMenu);
  const setMenu = useMenuStore((state) => state.setMenu);
  const changeDayMenu = useMenuStore((state) => state.changeDayMenu);
  const saveMenu = useMenuStore((state) => state.saveMenu);
  const changeDayStatus = useMenuStore((state) => state.changeDayStatus);

  const onGenerateMenu = () => {
    setMenu(generateWeekMenu());
  };

  const onGenerateDayMenu = (day: string) => {
    changeDayMenu(
      day,
      generateDayMenu({ day, dayCant: dayCants[day], filteredMenu: menu })
    );
  };

  const onChangeDayStatus = (day: string, status: DayStatus) => {
    changeDayStatus(day, status);
  };

  const onGenerateItem = (
    day: Day,
    group: keyof GeneratedMenu,
    prevItem?: MenuElement
  ) => {
    const item = generateItem(day, group, prevItem);
    const dayMenu = weekMenu?.[day];
    const updatedDayMenu = {
      ...dayMenu,
      [group]: dayMenu?.[group]?.map((groupItem) => {
        if (groupItem.nombre === prevItem?.nombre) {
          return item;
        }
        return groupItem;
      }),
    };
    changeDayMenu(day, updatedDayMenu);
  };

  const onSaveMenu = () => {
    if (!weekMenu) {
      console.error("No menu to save");
      return;
    }
    saveMenu(weekMenu);
  };

  return {
    onGenerateItem,
    onGenerateMenu,
    onGenerateDayMenu,
    onSaveMenu,
    onChangeDayStatus,
  };
};

export default useMenu;
