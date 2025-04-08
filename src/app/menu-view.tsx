import React from "react";
import { Day, GeneratedMenu, MenuElement, primaryGroups } from "@/utils";
import MenuGroup from "./menu-group";
import MenuExtras from "./menu-extras";

interface MenuViewProps {
  day: Day;
  dayMenu?: GeneratedMenu;
  onGenerateItem?: (
    day: Day,
    group: keyof GeneratedMenu,
    prevItem?: MenuElement
  ) => void;
}

const MenuView = ({ day, dayMenu, onGenerateItem }: MenuViewProps) => {
  return (
    <>
      {primaryGroups.map((group) => {
        const items = dayMenu?.[group] ?? [];

        const onRefreshGroupItem = (item: MenuElement) => {
          onGenerateItem?.(day, group, item);
        };

        return (
          <MenuGroup
            key={group}
            items={items}
            onRefreshItem={onRefreshGroupItem}
          />
        );
      })}

      <MenuGroup items={dayMenu?.economicos ?? []} title="Platos económicos" />
      <MenuGroup items={dayMenu?.especiales ?? []} title="Platos especiales" />

      <MenuExtras items={dayMenu?.ensaladas ?? []} title="Ensaladas" />

      <MenuExtras items={dayMenu?.frescos ?? []} title="Frescos" />
    </>
  );
};

export default MenuView;
