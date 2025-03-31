"use client";

import { useEffect, useState } from "react";
import { dayCants, generateDayMenu, generateWeekMenu } from "./helpers";
import { menu, WeekMenu } from "@/utils";

export const useMenu = () => {
  const [generatedMenu, setGeneratedMenu] = useState<WeekMenu | null>(null);

  useEffect(() => {
    const savedMenu = localStorage.getItem("menu");
    if (savedMenu) {
      setGeneratedMenu(JSON.parse(savedMenu));
    }

    return () => {
      console.log("Bye!");
    };
  }, []);

  const onGenerateMenu = () => {
    setGeneratedMenu(generateWeekMenu());
  };

  const onGenerateDayMenu = (day: string) => {
    setGeneratedMenu((prevMenu) => ({
      ...prevMenu,
      [day]: generateDayMenu({
        day,
        dayCant: dayCants[day],
        filteredMenu: menu,
      }),
    }));
  };

  const onSaveMenu = () => {
    console.log("Saved");
    localStorage.setItem("menu", JSON.stringify(generatedMenu));
  };

  return { generatedMenu, onGenerateMenu, onGenerateDayMenu, onSaveMenu };
};

export default useMenu;
