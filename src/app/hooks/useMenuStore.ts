import { Day, DayStatus, GeneratedMenu, WeekMenu, WeekStatus } from "@/utils";
import { create } from "zustand";

interface MenuState {
  weekMenu: WeekMenu | null;
  weekStatus: WeekStatus;
  view: "week" | "day";
  day: Day | null;
  setMenu: (menu: WeekMenu) => void;
  setWeekStatus: (status: WeekStatus) => void;
  loadMenu: () => void;
  saveMenu: (menu: WeekMenu) => void;
  changeDayMenu: (day: string, menu: GeneratedMenu) => void;
  changeDayStatus: (day: string, status: DayStatus) => void;
  clearMenu: () => void;
  resetMenu: () => void;
  setView: (view: "week" | "day") => void;
  toggleView: (day?: Day) => void;
}

const defaultWeekStatus: WeekStatus = {
  Lunes: {
    day: "Lunes",
    active: true,
    view: "menu",
  },
  Martes: {
    day: "Martes",
    active: true,
    view: "menu",
  },
  Miércoles: {
    day: "Miércoles",
    active: true,
    view: "menu",
  },
  Jueves: {
    day: "Jueves",
    active: true,
    view: "menu",
  },
  Viernes: {
    day: "Viernes",
    active: true,
    view: "menu",
  },
  Sábado: {
    day: "Sábado",
    active: true,
    view: "menu",
  },
  Domingo: {
    day: "Domingo",
    active: true,
    view: "menu",
  },
};

export const useMenuStore = create<MenuState>()((set) => ({
  weekMenu: null,
  weekStatus: defaultWeekStatus,
  view: "week",
  day: null,
  setMenu: (menu) => {
    set({ weekMenu: menu });
  },
  loadMenu: () => {
    const savedMenu = localStorage.getItem("menu");
    if (savedMenu) {
      set({ weekMenu: JSON.parse(savedMenu) });
    }
  },
  saveMenu: (menu) => {
    localStorage.setItem("menu", JSON.stringify(menu));
  },
  changeDayMenu: (day, menu) => {
    set((state) => ({
      weekMenu: {
        ...state.weekMenu,
        [day]: menu,
      },
    }));
  },
  clearMenu: () => set({ weekMenu: null }),
  resetMenu: () => {
    localStorage.removeItem("menu");
    set({ weekMenu: null });
  },
  setWeekStatus: (weekStatus) => {
    set({ weekStatus });
  },
  changeDayStatus: (day, weekStatus) => {
    set((state) => ({
      weekStatus: {
        ...state.weekStatus,
        [day]: weekStatus,
      },
    }));
  },
  setView: (view) => set({ view }),
  toggleView: (day) =>
    set((state) => ({
      view: state.view === "week" ? "day" : "week",
      day: state.view === "week" ? day : null,
    })),
}));

export default useMenuStore;
