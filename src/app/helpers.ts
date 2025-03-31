import { faker } from "@faker-js/faker";
import {
  Day,
  DayCant,
  days,
  Ensalada,
  GeneratedMenu,
  menu,
  Menu,
  MenuElement,
  WeekMenu,
} from "../utils";
import _uniq from "lodash/uniq";
import _intersection from "lodash/intersection";
import _differenceBy from "lodash/differenceBy";

const primaryGroups = [
  "pollos",
  "carnes",
  "pescados",
  "pastas",
  "rellenos",
  "sopas",
];

const filterItemFn = (day: Day) => (item: MenuElement) => {
  return (
    // Filter out inactive items
    item.activo !== false &&
    // Filter out items that are not available on the current day
    (item.diasOff ?? [])?.indexOf(day) === -1 &&
    // Filter out emergency items
    item.emergencia !== true
  );
};

const dayCants: Record<Day, DayCant> = {
  Lunes: {
    pollos: 2,
    carnes: 2,
    pescados: 0,
    pastas: 1,
    rellenos: 1,
    sopas: 1,
    economicos: 1,
    especiales: 1,
    ensaladas: 2,
    frescos: 3,
  },
  Martes: {
    pollos: 1,
    carnes: 2,
    pescados: 1,
    pastas: 1,
    rellenos: 1,
    sopas: 1,
    economicos: 1,
    especiales: 1,
    ensaladas: 2,
    frescos: 3,
  },
  Miércoles: {
    pollos: 2,
    carnes: 2,
    pescados: 1,
    pastas: 1,
    rellenos: 1,
    sopas: 1,
    economicos: 1,
    especiales: 1,
    ensaladas: 3,
    frescos: 3,
  },
  Jueves: {
    pollos: 1,
    carnes: 2,
    pescados: 0,
    pastas: 1,
    rellenos: 2,
    sopas: 0,
    economicos: 2,
    especiales: 1,
    ensaladas: 3,
    frescos: 3,
  },
  Viernes: {
    pollos: 2,
    carnes: 0,
    pescados: 1,
    pastas: 1,
    rellenos: 1,
    sopas: 1,
    economicos: 2,
    especiales: 0,
    ensaladas: 2,
    frescos: 2,
  },
  Sábado: {
    pollos: 1,
    carnes: 1,
    pescados: 1,
    pastas: 1,
    rellenos: 1,
    sopas: 1,
    economicos: 2,
    especiales: 0,
    ensaladas: 2,
    frescos: 2,
  },
  Domingo: {
    pollos: 2,
    carnes: 1,
    pescados: 0,
    pastas: 1,
    rellenos: 2,
    sopas: 0,
    economicos: 2,
    especiales: 0,
    ensaladas: 2,
    frescos: 2,
  },
};

const generateDayMenu = ({
  day,
  dayCant,
  filteredMenu,
}: {
  day: Day;
  dayCant: DayCant;
  filteredMenu: Menu;
}) => {
  const strictEconomics: string[] = [];
  const economics: string[] = [];
  const strictSpecials: string[] = [];
  const specials: string[] = [];
  const salads: Ensalada[] = [];
  const strictSalads: Ensalada[] = [];
  const filteredEconomicos = filteredMenu.economicos.filter(filterItemFn(day));
  const filteredEspeciales = filteredMenu.especiales.filter(filterItemFn(day));
  const filteredSalads = filteredMenu.ensaladas.filter(filterItemFn(day));

  const dayMenu: GeneratedMenu = primaryGroups
    .map((primaryGroup) => {
      const title = primaryGroup as keyof GeneratedMenu;
      const cant = dayCant[title];
      const group = filteredMenu[title].filter(filterItemFn(day));
      return { group, cant, title };
    })
    .reduce((accDayMenu, menuGroup) => {
      const { group, cant, title } = menuGroup;
      const items = faker.helpers.arrayElements(group, cant);

      // Fill "economicos" and "especiales" groups
      const itemsKey = items.map((item) => item.nombre);

      filteredEconomicos.forEach((economico) => {
        if (
          _intersection(economico.relacionadoEstricto ?? [], itemsKey).length
        ) {
          strictEconomics.push(economico.nombre);
        }
        if (_intersection(economico.relacionado ?? [], itemsKey).length) {
          economics.push(economico.nombre);
        }
      });
      filteredEspeciales.forEach((especial) => {
        if (
          _intersection(especial.relacionadoEstricto ?? [], itemsKey).length
        ) {
          strictSpecials.push(especial.nombre);
        }
        if (_intersection(especial.relacionado ?? [], itemsKey).length) {
          specials.push(especial.nombre);
        }
      });

      // Fill "ensaladas" group
      items.forEach((item) => {
        (item.ensaladaEstricto ?? []).forEach((ensalada) => {
          strictSalads.push(ensalada);
        });
        (item.ensaladas ?? []).forEach((ensalada) => {
          salads.push(ensalada);
        });
      });

      accDayMenu[title] = items;

      return accDayMenu;
    }, {} as GeneratedMenu);

  dayMenu.economicos = _uniq(
    faker.helpers
      .arrayElements(_uniq(strictEconomics), dayCant.economicos)
      .concat(
        faker.helpers.arrayElements(
          _uniq(economics),
          dayCant.economicos - strictEconomics.length
        )
      )
  )
    .map((item) => {
      return filteredEconomicos.find((economico) => {
        return economico.nombre === item;
      });
    })
    .filter((item) => !!item);
  dayMenu.especiales = _uniq(
    faker.helpers
      .arrayElements(_uniq(strictSpecials), dayCant.especiales)
      .concat(
        faker.helpers.arrayElements(
          _uniq(specials),
          dayCant.especiales - strictSpecials.length
        )
      )
  )
    .map((item) => {
      return filteredEspeciales.find((especial) => {
        return especial.nombre === item;
      });
    })
    .filter((item) => !!item);

  const countedStrictSalad = faker.helpers.arrayElements(
    _uniq(strictSalads),
    dayCant.ensaladas
  );
  dayMenu.ensaladas = _uniq(
    countedStrictSalad.concat(
      faker.helpers.arrayElements(
        _uniq(salads),
        dayCant.ensaladas - countedStrictSalad.length
      )
    )
  )
    .map((ensalada) => {
      return filteredSalads.find((item) => item.nombre === ensalada);
    })
    .filter((item) => !!item);

  dayMenu.frescos = faker.helpers.arrayElements(
    filteredMenu.frescos.filter(filterItemFn(day)),
    dayCant.frescos
  );

  return dayMenu;
};

const generateWeekMenu = (): WeekMenu => {
  let filteredMenu: Menu = { ...menu };

  const weekMenu: WeekMenu = days.reduce((accWeek, day) => {
    const dayCant = dayCants[day];
    const dayMenu = generateDayMenu({ day, dayCant, filteredMenu });

    if (day === "Jueves") {
      filteredMenu = { ...menu };
    } else {
      filteredMenu = {
        ...filteredMenu,
        pollos: _differenceBy(
          filteredMenu.pollos,
          dayMenu.pollos ?? [],
          "nombre"
        ),
        carnes: _differenceBy(
          filteredMenu.carnes,
          dayMenu.carnes ?? [],
          "nombre"
        ),
        pescados: _differenceBy(
          filteredMenu.pescados,
          dayMenu.pescados ?? [],
          "nombre"
        ),
        pastas: _differenceBy(
          filteredMenu.pastas,
          dayMenu.pastas ?? [],
          "nombre"
        ),
        rellenos: _differenceBy(
          filteredMenu.rellenos,
          dayMenu.rellenos ?? [],
          "nombre"
        ),
        sopas: _differenceBy(filteredMenu.sopas, dayMenu.sopas ?? [], "nombre"),
      };
    }

    accWeek[day] = dayMenu;
    return accWeek;
  }, {} as WeekMenu);
  return weekMenu;
};

export {
  generateDayMenu,
  generateWeekMenu,
  dayCants,
  filterItemFn,
  primaryGroups,
  menu,
};
