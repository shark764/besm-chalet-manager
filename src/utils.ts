export type MenuElement = {
  nombre: string;
  complementos?: string[];
  ensaladas?: Ensalada[];
  ensaladaEstricto?: Ensalada[];
  relacionado?: string[];
  relacionadoEstricto?: string[];
  precio?: number;
  activo?: boolean;
  emergencia?: boolean;
  diasOff?: Day[];
  requirements?: Requirement[];
};

type Requirement = {
  name: string;
  minQuantity?: number;
  maxQuantity?: number;
  symbol?: string;
  comment?: string;
  type?: "chicken" | "beef" | "pork" | "fish" | "vegetable" | "other";
  order?: number;
};

export const primaryGroups: Array<keyof GeneratedMenu> = [
  "pollos",
  "carnes",
  "pescados",
  "pastas",
  "rellenos",
  "sopas",
];

export const carnes: MenuElement[] = [
  {
    nombre: "Filete carne de res a la plancha",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: ["Chirimol", "Ensalada fresca"],
    ensaladaEstricto: ["Chirimol"],
    precio: 2.75,
    requirements: [
      {
        name: "Bistec al minuto",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        comment: "4 filetes por libra",
        type: "beef",
      },
      {
        name: "Choquezuela de res",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        comment: "4 filetes por libra",
        type: "beef",
      },
      {
        name: "Posta negra de res",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        comment: "4 filetes por libra",
        type: "beef",
      },
      {
        name: "Carne de res para asar",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        comment: "4 filetes por libra",
        type: "beef",
      },
      {
        name: "Arroz precocido",
        minQuantity: 2.5,
        symbol: "lb",
        type: "other",
      },
      { name: "Salsa inglesa", type: "other" },
      { name: "Salsa de soya", type: "other" },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Pimienta negra molida", type: "other" },
      { name: "Sal", type: "other" },
      { name: "Cebollín", type: "vegetable" },
      { name: "Cebolla", minQuantity: 4, type: "vegetable" },
      { name: "Pimiento morrón", type: "vegetable" },
      { name: "Pimiento verde", minQuantity: 4, type: "vegetable" },
      { name: "Mostaza", type: "other" },
      { name: "Limón", minQuantity: 10, type: "vegetable" },
      { name: "Vino blanco", type: "other" },
      { name: "Cilantro", type: "vegetable" },
      { name: "Ablandador de carne", type: "other" },
      { name: "Consomé de res", type: "other" },
    ],
  },
  {
    nombre: "Bistec encebollado",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: ["Chirimol", "Ensalada fresca"],
    ensaladaEstricto: ["Chirimol"],
    precio: 2.75,
    requirements: [
      {
        name: "Bistec al minuto",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        comment: "4 filetes por libra",
        type: "beef",
      },
      {
        name: "Choquezuela de res",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        comment: "4 filetes por libra",
        type: "beef",
      },
      {
        name: "Posta negra de res",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        comment: "4 filetes por libra",
        type: "beef",
      },
      {
        name: "Carne de res para asar",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        comment: "4 filetes por libra",
        type: "beef",
      },
      {
        name: "Arroz precocido",
        minQuantity: 2.5,
        symbol: "lb",
        type: "other",
      },
      { name: "Salsa inglesa", type: "other" },
      { name: "Salsa de soya", type: "other" },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Pimienta negra molida", type: "other" },
      { name: "Sal", type: "other" },
      { name: "Cebolla", minQuantity: 8, type: "vegetable" },
      { name: "Pimiento morrón", type: "vegetable" },
      { name: "Pimiento verde", minQuantity: 6, type: "vegetable" },
      { name: "Mostaza", type: "other" },
      { name: "Vino blanco", type: "other" },
      { name: "Cilantro", type: "vegetable" },
      { name: "Ablandador de carne", type: "other" },
      { name: "Consomé de res", type: "other" },
    ],
  },
  {
    nombre: "Plato de carne de res guisada",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: ["Chirimol", "Ensalada fresca", "Ensalada rusa"],
    precio: 2.75,
    requirements: [
      {
        name: "Carne de res para guisar",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        comment: "Cortada en trozos",
        type: "beef",
      },
      {
        name: "Gato de res",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        comment: "Cortada en trozos",
        type: "beef",
      },
      {
        name: "Arroz precocido",
        minQuantity: 2.5,
        symbol: "lb",
        type: "other",
      },
      { name: "Salsa inglesa", type: "other" },
      { name: "Salsa de soya", type: "other" },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Cebolla", minQuantity: 4, type: "vegetable" },
      { name: "Papa", minQuantity: 4, type: "vegetable" },
      { name: "Zanahoria", minQuantity: 4, type: "vegetable" },
      { name: "Pipián", minQuantity: 4, type: "vegetable" },
      { name: "Tomate", minQuantity: 6, type: "vegetable" },
      { name: "Guisquil", minQuantity: 2, type: "vegetable" },
      { name: "Pimiento morrón", type: "vegetable" },
      { name: "Pimiento verde", minQuantity: 4, type: "vegetable" },
      { name: "Vino blanco", type: "other" },
      { name: "Consomé de res", type: "other" },
      { name: "Salsa de tomate", type: "other" },
    ],
  },
  {
    nombre: "Plato de carne de res jalapeña",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: [
      "Chirimol",
      "Ensalada fresca",
      "Ensalada de repollo con chile jalapeño",
    ],
    precio: 2.75,
    requirements: [
      {
        name: "Carne de res adobada jalapeña",
        minQuantity: 5,
        maxQuantity: 10,
        symbol: "lb",
        type: "beef",
      },
      {
        name: "Arroz precocido",
        minQuantity: 2.5,
        symbol: "lb",
        type: "other",
      },
      { name: "Ablandador de carne", type: "other" },
    ],
  },
  {
    nombre: "Plato de carne de res deshilada",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: ["Chirimol", "Ensalada fresca"],
    precio: 2.75,
    requirements: [
      {
        name: "Carne de res para deshilar",
        minQuantity: 3,
        maxQuantity: 5,
        symbol: "lb",
        type: "beef",
      },
      {
        name: "Arroz precocido",
        minQuantity: 2.5,
        symbol: "lb",
        type: "other",
      },
      { name: "Salsa inglesa", type: "other" },
      { name: "Salsa de soya", type: "other" },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Cebolla", minQuantity: 4, type: "vegetable" },
      { name: "Papa", minQuantity: 4, type: "vegetable" },
      { name: "Zanahoria", minQuantity: 4, type: "vegetable" },
      { name: "Pipián", minQuantity: 4, type: "vegetable" },
      { name: "Tomate", minQuantity: 6, type: "vegetable" },
      { name: "Guisquil", minQuantity: 2, type: "vegetable" },
      { name: "Pimiento morrón", type: "vegetable" },
      { name: "Pimiento verde", minQuantity: 4, type: "vegetable" },
      { name: "Vino blanco", type: "other" },
      { name: "Consomé de res", type: "other" },
    ],
  },
  {
    nombre: "Plato de fajitas de res",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: ["Chirimol", "Ensalada fresca"],
    precio: 2.75,
    requirements: [
      {
        name: "Carne de res para fajitas",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        type: "beef",
      },
      {
        name: "Arroz precocido",
        minQuantity: 2.5,
        symbol: "lb",
        type: "other",
      },
      { name: "Salsa inglesa", type: "other" },
      { name: "Salsa de soya", type: "other" },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Cebolla", minQuantity: 4, type: "vegetable" },
      { name: "Papa", minQuantity: 4, type: "vegetable" },
      { name: "Zanahoria", minQuantity: 4, type: "vegetable" },
      { name: "Pipián", minQuantity: 4, type: "vegetable" },
      { name: "Tomate", minQuantity: 6, type: "vegetable" },
      { name: "Guisquil", minQuantity: 2, type: "vegetable" },
      { name: "Pimiento morrón", type: "vegetable" },
      { name: "Pimiento verde", minQuantity: 4, type: "vegetable" },
      { name: "Vino blanco", type: "other" },
      { name: "Consomé de res", type: "other" },
    ],
  },
  {
    nombre: "Chuleta de res",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: ["Chirimol", "Ensalada fresca"],
    precio: 2.75,
    requirements: [
      {
        name: "Chuleta de res",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        comment: "4 chuletas por libra",
        type: "beef",
      },
      {
        name: "Arroz precocido",
        minQuantity: 2.5,
        symbol: "lb",
        type: "other",
      },
      { name: "Salsa inglesa", type: "other" },
      { name: "Salsa de soya", type: "other" },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Cebolla", minQuantity: 4, type: "vegetable" },
      { name: "Tomate", minQuantity: 6, type: "vegetable" },
      { name: "Pimiento verde", minQuantity: 4, type: "vegetable" },
      { name: "Mostaza", type: "other" },
      { name: "Vino blanco", type: "other" },
      { name: "Cilantro", type: "vegetable" },
      { name: "Ablandador de carne", type: "other" },
      { name: "Consomé de res", type: "other" },
    ],
  },
  {
    nombre: "Hígado de res",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: ["Chirimol", "Ensalada fresca"],
    precio: 2.5,
    requirements: [
      {
        name: "Higado de res",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        comment: "3 filetes por libra",
        type: "beef",
      },
      {
        name: "Arroz precocido",
        minQuantity: 2.5,
        symbol: "lb",
        type: "other",
      },
      { name: "Salsa inglesa", type: "other" },
      { name: "Salsa de soya", type: "other" },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Cebolla", minQuantity: 4, type: "vegetable" },
      { name: "Tomate", minQuantity: 6, type: "vegetable" },
      { name: "Pimiento verde", minQuantity: 4, type: "vegetable" },
      { name: "Mostaza", type: "other" },
      { name: "Vino blanco", type: "other" },
      { name: "Ablandador de carne", type: "other" },
      { name: "Consomé de res", type: "other" },
    ],
  },
  {
    nombre: "Plato de albóndiga de res (2-3 albóndigas)",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: ["Chirimol", "Ensalada fresca"],
    precio: 2.75,
    requirements: [
      {
        name: "Carne molida de res",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        type: "beef",
      },
      {
        name: "Arroz precocido",
        minQuantity: 2.5,
        symbol: "lb",
        type: "other",
      },
      { name: "Salsa inglesa", type: "other" },
      { name: "Salsa de soya", type: "other" },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Cebolla", minQuantity: 4, type: "vegetable" },
      { name: "Tomate", minQuantity: 8, type: "vegetable" },
      { name: "Pimiento verde", minQuantity: 4, type: "vegetable" },
      { name: "Vino blanco", type: "other" },
      { name: "Cilantro", type: "vegetable" },
      { name: "Ablandador de carne", type: "other" },
      { name: "Consomé de res", type: "other" },
    ],
  },
  {
    nombre: "Croquetas de res (2-3 croquetas)",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: ["Chirimol", "Ensalada fresca"],
    ensaladaEstricto: ["Chirimol"],
    precio: 2.75,
    requirements: [
      {
        name: "Carne molida de res",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        type: "beef",
      },
      {
        name: "Arroz precocido",
        minQuantity: 2.5,
        symbol: "lb",
        type: "other",
      },
      { name: "Salsa inglesa", type: "other" },
      { name: "Salsa de soya", type: "other" },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Cebolla", minQuantity: 4, type: "vegetable" },
      { name: "Vino blanco", type: "other" },
      { name: "Ablandador de carne", type: "other" },
      { name: "Consomé de res", type: "other" },
    ],
  },
  {
    nombre: "Tortitas de res (2-3 tortitas)",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: ["Chirimol", "Ensalada fresca"],
    precio: 2.75,
    requirements: [
      {
        name: "Carne molida de res",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        type: "beef",
      },
      {
        name: "Arroz precocido",
        minQuantity: 2.5,
        symbol: "lb",
        type: "other",
      },
      { name: "Salsa inglesa", type: "other" },
      { name: "Salsa de soya", type: "other" },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Cebolla", minQuantity: 4, type: "vegetable" },
      { name: "Tomate", minQuantity: 8, type: "vegetable" },
      { name: "Pimiento verde", minQuantity: 4, type: "vegetable" },
      { name: "Cilantro", type: "vegetable" },
      { name: "Vino blanco", type: "other" },
      { name: "Ablandador de carne", type: "other" },
      { name: "Consomé de res", type: "other" },
    ],
  },
  {
    nombre: "Filete carne de cerdo a la plancha",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: ["Chirimol", "Ensalada fresca"],
    precio: 2.75,
    requirements: [
      {
        name: "Filete de cerdo",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        comment: "4 filetes por libra",
        type: "pork",
      },
      {
        name: "Arroz precocido",
        minQuantity: 2.5,
        symbol: "lb",
        type: "other",
      },
      { name: "Salsa inglesa", type: "other" },
      { name: "Salsa de soya", type: "other" },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Cebolla", minQuantity: 4, type: "vegetable" },
      { name: "Tomate", minQuantity: 6, type: "vegetable" },
      { name: "Pimiento verde", minQuantity: 4, type: "vegetable" },
      { name: "Mostaza", type: "other" },
      { name: "Vino blanco", type: "other" },
      { name: "Cilantro", type: "vegetable" },
      { name: "Ablandador de carne", type: "other" },
      { name: "Consomé de res", type: "other" },
    ],
  },
  {
    nombre: "Plato de carne de cerdo jalapeña",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: ["Chirimol", "Ensalada fresca"],
    precio: 2.75,
    requirements: [
      {
        name: "Carne de cerdo adobada jalapeña",
        minQuantity: 5,
        maxQuantity: 10,
        symbol: "lb",
        type: "pork",
      },
      {
        name: "Arroz precocido",
        minQuantity: 2.5,
        symbol: "lb",
        type: "other",
      },
      { name: "Ablandador de carne", type: "other" },
    ],
  },
  {
    nombre: "Costilla de cerdo en salsa",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: ["Chirimol", "Ensalada fresca"],
    precio: 2.75,
    requirements: [
      {
        name: "Costilla de cerdo ribblets",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        comment: "3 costillas por libra",
        type: "pork",
      },
      {
        name: "Arroz precocido",
        minQuantity: 2.5,
        symbol: "lb",
        type: "other",
      },
      { name: "Salsa inglesa", type: "other" },
      { name: "Salsa de soya", type: "other" },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Cebolla", minQuantity: 4, type: "vegetable" },
      { name: "Tomate", minQuantity: 6, type: "vegetable" },
      { name: "Pimiento verde", minQuantity: 4, type: "vegetable" },
      { name: "Vino blanco", type: "other" },
      { name: "Ablandador de carne", type: "other" },
      { name: "Consomé de res", type: "other" },
    ],
  },
  {
    nombre: "Costilla de cerdo ahumada",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: ["Chirimol", "Ensalada fresca", "Ensalada de papa"],
    precio: 2.75,
    requirements: [
      {
        name: "Costilla de cerdo ahumada",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        comment: "3 costillas por libra",
        type: "pork",
      },
      {
        name: "Arroz precocido",
        minQuantity: 2.5,
        symbol: "lb",
        type: "other",
      },
      { name: "Salsa inglesa", type: "other" },
      { name: "Salsa de soya", type: "other" },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Cebolla", minQuantity: 4, type: "vegetable" },
      { name: "Tomate", minQuantity: 6, type: "vegetable" },
      { name: "Pimiento verde", minQuantity: 4, type: "vegetable" },
      { name: "Vino blanco", type: "other" },
      { name: "Ablandador de carne", type: "other" },
      { name: "Consomé de res", type: "other" },
    ],
  },
  {
    nombre: "Costilla de cerdo a la barbacoa",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: [
      "Chirimol",
      "Ensalada fresca",
      "Ensalada de papa",
      "Ensalada rusa",
    ],
    precio: 2.75,
    requirements: [
      {
        name: "Costilla de cerdo ribblets",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        comment: "3 costillas por libra",
        type: "pork",
      },
      {
        name: "Arroz precocido",
        minQuantity: 2.5,
        symbol: "lb",
        type: "other",
      },
      { name: "Salsa inglesa", type: "other" },
      { name: "Salsa de soya", type: "other" },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Cebolla", minQuantity: 4, type: "vegetable" },
      { name: "Tomate", minQuantity: 6, type: "vegetable" },
      { name: "Pimiento verde", minQuantity: 4, type: "vegetable" },
      { name: "Vino blanco", type: "other" },
      { name: "Salsa barbacoa", type: "other" },
      { name: "Ablandador de carne", type: "other" },
      { name: "Consomé de res", type: "other" },
    ],
  },
  {
    nombre: "Chuleta de cerdo",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: ["Chirimol", "Ensalada fresca"],
    precio: 2.75,
    requirements: [
      {
        name: "Chuleta de cerdo",
        minQuantity: 5,
        maxQuantity: 8,
        symbol: "lb",
        comment: "3 chuletas por libra",
        type: "pork",
      },
      {
        name: "Arroz precocido",
        minQuantity: 2.5,
        symbol: "lb",
        type: "other",
      },
      { name: "Salsa inglesa", type: "other" },
      { name: "Salsa de soya", type: "other" },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Cebolla", minQuantity: 4, type: "vegetable" },
      { name: "Tomate", minQuantity: 6, type: "vegetable" },
      { name: "Pimiento verde", minQuantity: 4, type: "vegetable" },
      { name: "Mostaza", type: "other" },
      { name: "Vino blanco", type: "other" },
      { name: "Ablandador de carne", type: "other" },
      { name: "Consomé de res", type: "other" },
    ],
  },
];

export const sopas: MenuElement[] = [
  {
    nombre: "Sopa de pollo",
    complementos: ["2 tortillas", "fresco"],
    precio: 2.75,
    requirements: [
      {
        name: "Pollo",
        minQuantity: 5,
        maxQuantity: 6,
        symbol: "lb",
        type: "chicken",
      },
      { name: "Arroz blanco", minQuantity: 2.5, symbol: "lb", type: "other" },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Tomate", minQuantity: 6, type: "vegetable" },
      { name: "Papa", minQuantity: 4, type: "vegetable" },
      { name: "Zanahoria", minQuantity: 4, type: "vegetable" },
      { name: "Pipián", minQuantity: 4, type: "vegetable" },
      { name: "Guisquil", minQuantity: 2, type: "vegetable" },
      { name: "Olor para sopa", minQuantity: 1, type: "vegetable" },
      { name: "Sopas magggie de pollo", minQuantity: 2, type: "other" },
    ],
  },
  {
    nombre: "Sopa de res",
    complementos: ["2 tortillas", "fresco"],
    precio: 2.75,
    diasOff: ["Viernes"],
    requirements: [
      {
        name: "Carne de res para guisar",
        minQuantity: 5,
        maxQuantity: 6,
        symbol: "lb",
        comment: "Cortada en trozos",
        type: "beef",
      },
      {
        name: "Gato de res",
        minQuantity: 5,
        maxQuantity: 6,
        symbol: "lb",
        comment: "Cortada en trozos",
        type: "beef",
      },
      {
        name: "Posta de res",
        minQuantity: 5,
        maxQuantity: 6,
        symbol: "lb",
        type: "beef",
      },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Tomate", minQuantity: 6, type: "vegetable" },
      { name: "Papa", minQuantity: 4, type: "vegetable" },
      { name: "Zanahoria", minQuantity: 4, type: "vegetable" },
      { name: "Pipián", minQuantity: 4, type: "vegetable" },
      { name: "Guisquil", minQuantity: 2, type: "vegetable" },
      { name: "Elote", minQuantity: 4, maxQuantity: 5, type: "vegetable" },
      { name: "Yuca", minQuantity: 4, maxQuantity: 5, type: "vegetable" },
      { name: "Repollo", minQuantity: 1, maxQuantity: 5, type: "vegetable" },
      { name: "Olor para sopa", minQuantity: 1, type: "vegetable" },
      { name: "Sopas magggie de carne", minQuantity: 2, type: "other" },
    ],
  },
  {
    nombre: "Sopa de hueso de res",
    complementos: ["2 tortillas", "fresco"],
    precio: 2.75,
    diasOff: ["Viernes"],
    requirements: [
      {
        name: "Hueso de yugo de res",
        minQuantity: 5,
        maxQuantity: 6,
        symbol: "lb",
        comment: "Cortada en trozos",
        type: "beef",
      },
      {
        name: "Hueso corriente de res",
        minQuantity: 1,
        maxQuantity: 2,
        symbol: "lb",
        comment: "Cortada en trozos",
        type: "beef",
      },
      {
        name: "Posta de res",
        minQuantity: 5,
        maxQuantity: 6,
        symbol: "lb",
        type: "beef",
      },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Tomate", minQuantity: 6, type: "vegetable" },
      { name: "Papa", minQuantity: 4, type: "vegetable" },
      { name: "Zanahoria", minQuantity: 4, type: "vegetable" },
      { name: "Pipián", minQuantity: 4, type: "vegetable" },
      { name: "Guisquil", minQuantity: 2, type: "vegetable" },
      { name: "Elote", minQuantity: 4, maxQuantity: 5, type: "vegetable" },
      { name: "Yuca", minQuantity: 4, maxQuantity: 5, type: "vegetable" },
      { name: "Repollo", minQuantity: 1, maxQuantity: 5, type: "vegetable" },
      { name: "Olor para sopa", minQuantity: 1, type: "vegetable" },
      { name: "Sopas magggie de carne", minQuantity: 2, type: "other" },
    ],
  },
  {
    nombre: "Sopa de costilla de res",
    complementos: ["2 tortillas", "fresco"],
    precio: 2.75,
    diasOff: ["Viernes"],
    requirements: [
      {
        name: "Costilla de res",
        minQuantity: 5,
        maxQuantity: 6,
        symbol: "lb",
        comment: "Cortada en trozos",
        type: "beef",
      },
      {
        name: "Hueso corriente de res",
        minQuantity: 1,
        maxQuantity: 2,
        symbol: "lb",
        comment: "Cortada en trozos",
        type: "beef",
      },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Tomate", minQuantity: 6, type: "vegetable" },
      { name: "Papa", minQuantity: 4, type: "vegetable" },
      { name: "Zanahoria", minQuantity: 4, type: "vegetable" },
      { name: "Pipián", minQuantity: 4, type: "vegetable" },
      { name: "Guisquil", minQuantity: 2, type: "vegetable" },
      { name: "Elote", minQuantity: 4, maxQuantity: 5, type: "vegetable" },
      { name: "Yuca", minQuantity: 4, maxQuantity: 5, type: "vegetable" },
      { name: "Repollo", minQuantity: 1, maxQuantity: 5, type: "vegetable" },
      { name: "Olor para sopa", minQuantity: 1, type: "vegetable" },
      { name: "Sopas magggie de costilla", minQuantity: 2, type: "other" },
    ],
  },
  {
    nombre: "Sopa de frijoles blancos",
    complementos: ["2 tortillas", "fresco"],
    precio: 2.75,
    requirements: [
      {
        name: "Frijoles blancos",
        minQuantity: 3,
        maxQuantity: 5,
        symbol: "lb",
        type: "vegetable",
      },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Papa", minQuantity: 4, type: "vegetable" },
      { name: "Zanahoria", minQuantity: 4, type: "vegetable" },
      { name: "Pipián", minQuantity: 4, type: "vegetable" },
      { name: "Guisquil", minQuantity: 2, type: "vegetable" },
      { name: "Olor para sopa", minQuantity: 1, type: "vegetable" },
      { name: "Sopas magggie de carne", minQuantity: 2, type: "other" },
    ],
  },
  {
    nombre: "Sopa de frijoles rojos",
    complementos: ["2 tortillas", "fresco"],
    precio: 2.75,
    requirements: [
      {
        name: "Frijoles rojos",
        minQuantity: 3,
        maxQuantity: 5,
        symbol: "lb",
        type: "vegetable",
      },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Papa", minQuantity: 4, type: "vegetable" },
      { name: "Zanahoria", minQuantity: 4, type: "vegetable" },
      { name: "Pipián", minQuantity: 4, type: "vegetable" },
      { name: "Guisquil", minQuantity: 2, type: "vegetable" },
      { name: "Olor para sopa", minQuantity: 1, type: "vegetable" },
      { name: "Sopas magggie de carne", minQuantity: 2, type: "other" },
    ],
  },
  {
    nombre: "Sopa de pescado",
    complementos: ["2 tortillas", "fresco"],
    precio: 2.75,
    activo: false,
    requirements: [
      {
        name: "Pescado",
        minQuantity: 5,
        maxQuantity: 6,
        symbol: "lb",
        type: "fish",
      },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Tomate", minQuantity: 6, type: "vegetable" },
      { name: "Zanahoria", minQuantity: 4, type: "vegetable" },
      { name: "Pipián", minQuantity: 4, type: "vegetable" },
      { name: "Guisquil", minQuantity: 2, type: "vegetable" },
      { name: "Olor para sopa", minQuantity: 1, type: "vegetable" },
      { name: "Huevo", minQuantity: 10, type: "other" },
      { name: "Consomé de camarón", type: "other" },
    ],
  },
  {
    nombre: "Sopa de tortilla",
    complementos: ["2 tortillas", "fresco"],
    precio: 2.75,
    requirements: [
      {
        name: "Tortilla de maíz",
        minQuantity: 5,
        maxQuantity: 6,
        symbol: "lb",
        type: "other",
      },
      { name: "Ajo", minQuantity: 1, type: "vegetable" },
      { name: "Sal", type: "other" },
      { name: "Tomate", minQuantity: 10, type: "vegetable" },
      { name: "Olor para sopa", minQuantity: 1, type: "vegetable" },
      { name: "Sopas magggie de tortilla", minQuantity: 2, type: "other" },
      { name: "Quesillo", minQuantity: 1, symbol: "lb", type: "other" },
      { name: "Queso fresco", minQuantity: 1, symbol: "lb", type: "other" },
      { name: "Aserrín de queso", minQuantity: 1, symbol: "lb", type: "other" },
      { name: "Crema", type: "other" },
      { name: "Aguacate", type: "vegetable" },
      { name: "Cilantro", type: "vegetable" },
      { name: "Cebolla", type: "vegetable" },
      { name: "Chile jalapeño", type: "vegetable" },
    ],
  },
  {
    nombre: "Sopa de chipilín",
    complementos: ["2 tortillas", "fresco"],
    precio: 2.75,
  },
  {
    nombre: "Sopa de mora",
    complementos: ["2 tortillas", "fresco"],
    precio: 2.75,
  },
  {
    nombre: "Sopa de espinaca",
    complementos: ["2 tortillas", "fresco"],
    precio: 2.75,
  },
  {
    nombre: "Sopa de gallina",
    complementos: ["2 tortillas", "fresco"],
    precio: 3.5,
    activo: false,
  },
  {
    nombre: "Sopa de patas",
    complementos: ["2 tortillas", "fresco"],
    precio: 3.5,
    activo: false,
    diasOff: ["Viernes"],
  },
];

export const pollos: MenuElement[] = [
  {
    nombre: "Pollo dorado",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: ["Ensalada de papa", "Ensalada de coditos"],
    precio: 2.75,
  },
  {
    nombre: "Pollo empanizado",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: [
      "Ensalada de papa",
      "Ensalada de coditos",
      "Ensalada de repollo (tipo campero)",
    ],
    precio: 2.75,
  },
  {
    nombre: "Pollo encebollado",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: [
      "Ensalada de papa",
      "Ensalada de coditos",
      "Ensalada de repollo con zanahoria y remolacha",
    ],
    precio: 2.75,
  },
  {
    nombre: "Pollo guisado",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: [
      "Ensalada de repollo con chile jalapeño",
      "Ensalada de repollo con zanahoria y remolacha",
    ],
    precio: 2.75,
  },
  {
    nombre: "Pierna de pollo",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    precio: 2.35,
    activo: false,
  },
  {
    nombre: "Pollo empanizado (Tipo campero)",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: [
      "Ensalada de repollo (tipo campero)",
      "Ensalada de papa",
      "Ensalada de coditos",
    ],
    precio: 2.75,
  },
  {
    nombre: "Ala de pollo grande (2-3 alas)",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    precio: 2.75,
  },
  {
    nombre: "Ala de pollo grande (picante) (2-3 alas)",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: ["Ensalada de repollo con chile jalapeño"],
    precio: 2.75,
    emergencia: true,
  },
  {
    nombre: "Ala de pollo grande (crispy) (2-3 alas)",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: [
      "Ensalada de repollo (tipo campero)",
      "Ensalada de papa",
      "Ensalada de coditos",
    ],
    precio: 2.75,
    emergencia: true,
  },
  {
    nombre:
      "Alitas empanizada (picante, barbacoa, ranchera, crispy) (3-4 alitas)",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: [
      "Ensalada de repollo (tipo campero)",
      "Ensalada de papa",
      "Ensalada de coditos",
      "Ensalada de tornillos",
    ],
    precio: 2.75,
    emergencia: true,
  },
  {
    nombre: "Pechuga",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: [
      "Ensalada de repollo con zanahoria y remolacha",
      "Ensalada fresca",
      "Ensalada de pepino",
    ],
    precio: 2.75,
  },
  {
    nombre: "Filete de pechuga a la plancha",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: [
      "Ensalada de repollo con zanahoria y remolacha",
      "Ensalada fresca",
      "Ensalada de pepino",
    ],
    precio: 2.75,
  },
  {
    nombre: "Pechuga en crema con hongos",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: [
      "Ensalada de repollo con zanahoria y remolacha",
      "Ensalada fresca",
      "Ensalada de pepino",
    ],
    precio: 2.75,
  },
  {
    nombre: "Milanesa de pechuga empanizada",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: [
      "Ensalada de repollo con zanahoria y remolacha",
      "Ensalada fresca",
      "Ensalada de pepino",
      "Ensalada de repollo (tipo campero)",
      "Ensalada de papa",
      "Ensalada rusa",
    ],
    precio: 2.75,
    emergencia: true,
  },
  {
    nombre: "Tortitas de pollo (2-3 tortitas)",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    precio: 2.75,
  },
  {
    nombre: "Plato de pollo en salsa picante",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: ["Ensalada de repollo con chile jalapeño"],
    precio: 2.75,
    activo: false,
  },
  {
    nombre: "Plato de gallina asada",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: [
      "Ensalada de repollo con chile jalapeño",
      "Ensalada de repollo con zanahoria y remolacha",
      "Ensalada fresca",
      "Ensalada de pepino",
      "Chirimol",
    ],
    precio: 3.0,
    activo: false,
  },
];

export const economicos: MenuElement[] = [
  {
    nombre: "Plato de pollo (pieza pequeña)",
    complementos: [
      "pollo (pieza pequeña)",
      "media porción de arroz",
      "media porción de ensalada",
      "2 tortillas",
      "fresco",
    ],
    relacionado: [
      "Pollo dorado",
      "Pollo empanizado",
      "Pollo encebollado",
      "Pollo guisado",
      "Pierna de pollo",
    ],
    relacionadoEstricto: [
      "Pollo dorado",
      "Pollo empanizado",
      "Pollo encebollado",
      "Pollo guisado",
      "Pierna de pollo",
    ],
    precio: 2.0,
  },
  {
    nombre: "Plato de carne (porción pequeña 3-4oz)",
    complementos: [
      "carne (porción pequeña 3-4oz)",
      "media porción de arroz",
      "media porción de ensalada",
      "2 tortillas",
      "fresco",
    ],
    relacionado: ["Filete carne de res a la plancha", "Bistec encebollado"],
    relacionadoEstricto: [
      "Filete carne de res a la plancha",
      "Bistec encebollado",
    ],
    precio: 2.0,
  },
  {
    nombre: "Media sopa de pollo",
    complementos: ["pollo", "2 tortillas", "fresco"],
    relacionado: ["Sopa de pollo"],
    relacionadoEstricto: ["Sopa de pollo"],
    precio: 2.0,
  },
  {
    nombre: "Media sopa de res",
    complementos: ["res", "2 tortillas", "fresco"],
    relacionado: [
      "Sopa de res",
      "Sopa de hueso de res",
      "Sopa de costilla de res",
    ],
    relacionadoEstricto: [
      "Sopa de res",
      "Sopa de hueso de res",
      "Sopa de costilla de res",
    ],
    precio: 2.0,
  },
  {
    nombre: "Plato de vegetales cocidos",
    complementos: [
      "vegetales cocidos",
      "requesón",
      "1 huevo duro",
      "2 tortillas",
      "fresco",
    ],
    precio: 1.65,
  },
];

export const especiales: MenuElement[] = [
  {
    nombre: "Plato combinado de chow mein con porción de pollo",
    complementos: [
      "porción de pollo",
      "arroz",
      "ensalada",
      "2 tortillas",
      "fresco",
    ],
    relacionado: [
      "Porción de chow mein mixto",
      "Pollito dorado",
      "Pollo empanizado",
      "Pollo encebollado",
    ],
    relacionadoEstricto: ["Porción de chow mein mixto", "Pollito dorado"],
    precio: 3.5,
  },
  {
    nombre: "Plato de carne a la plancha con chorizo mediano",
    complementos: [
      "chorizo mediano",
      "arroz",
      "ensalada",
      "2 tortillas",
      "fresco",
    ],
    relacionado: ["Filete carne de res a la plancha", "Bistec encebollado"],
    relacionadoEstricto: [
      "Filete carne de res a la plancha",
      "Bistec encebollado",
    ],
    precio: 3.0,
  },
  {
    nombre: "Plato de carne a la plancha con chorizo",
    complementos: [
      "chorizo",
      "arroz",
      "ensalada",
      "chirimol",
      "cebollín",
      "2 tortillas",
      "fresco",
    ],
    relacionado: ["Filete carne de res a la plancha", "Bistec encebollado"],
    relacionadoEstricto: [
      "Filete carne de res a la plancha",
      "Bistec encebollado",
    ],
    precio: 3.5,
  },
  {
    nombre: "Plato de pescado frito",
    complementos: ["arroz", "ensalada", "cuajada", "2 tortillas", "fresco"],
    relacionado: ["Pescado frito"],
    relacionadoEstricto: ["Pescado frito"],
    precio: 3.0,
  },
  {
    nombre: "Media sopa de gallina",
    complementos: [
      "gallina asada",
      "arroz",
      "ensalada",
      "2 tortillas",
      "fresco",
    ],
    relacionado: ["Plato de gallina asada", "Sopa de gallina"],
    relacionadoEstricto: ["Plato de gallina asada", "Sopa de gallina"],
    precio: 4.25,
  },
];

export const rellenos: MenuElement[] = [
  {
    nombre: "Relleno de papa",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    precio: 2.35,
  },
  {
    nombre: "Relleno de guisquil",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    precio: 2.35,
  },
  {
    nombre: "Relleno de ejote",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    precio: 2.35,
  },
  {
    nombre: "Relleno de coliflor",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    precio: 2.35,
  },
  {
    nombre: "Relleno de pacaya",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    precio: 2.35,
  },
  {
    nombre: "Relleno de brócoli",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    precio: 2.35,
  },
  {
    nombre: "Chile relleno",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    precio: 2.35,
  },
  {
    nombre: "Plato de chilaquilas",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    precio: 2.25,
  },
];

export const pastas: MenuElement[] = [
  {
    nombre: "Plato de spaghetti en salsa",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    precio: 2.25,
  },
  {
    nombre: "Plato de spaghetti con pollo",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    precio: 2.75,
  },
  {
    nombre: "Plato de spaghetti con camarones",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    precio: 2.75,
  },
  {
    nombre: "Plato de spaghetti con carne",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    precio: 2.75,
    diasOff: ["Viernes"],
  },
  {
    nombre: "Plato de spaghetti con albondigas de res",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    precio: 2.75,
    diasOff: ["Viernes"],
  },
  {
    nombre: "Plato de chow mein mixto",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: [
      "Ensalada de repollo con zanahoria y remolacha",
      "Ensalada de repollo con chile jalapeño",
      "Ensalada fresca",
    ],
    precio: 2.75,
  },
  {
    nombre: "Canelones de pollo (2-3 canelones)",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    precio: 2.75,
  },
  {
    nombre: "Plato de lasaña",
    complementos: ["lasaña", "arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: [
      "Ensalada de repollo con zanahoria y remolacha",
      "Ensalada de repollo con chile jalapeño",
      "Ensalada fresca",
    ],
    precio: 2.75,
  },
];

export const pescados: MenuElement[] = [
  {
    nombre: "Pescado frito",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: [
      "Ensalada de repollo con zanahoria y remolacha",
      "Ensalada de repollo con chile jalapeño",
      "Ensalada fresca",
    ],
    precio: 2.75,
  },
  {
    nombre: "Lonja empanizada",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: [
      "Ensalada de repollo con zanahoria y remolacha",
      "Ensalada de repollo con chile jalapeño",
      "Ensalada fresca",
    ],
    precio: 2.75,
  },
  {
    nombre: "Tortas de pescado",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: [
      "Ensalada de repollo con zanahoria y remolacha",
      "Ensalada de repollo con chile jalapeño",
      "Ensalada fresca",
      "Ensalada de pepino",
    ],
    precio: 2.75,
    activo: false,
  },
  {
    nombre: "Pescado envuelto en huevo",
    complementos: ["arroz", "ensalada", "2 tortillas", "fresco"],
    ensaladas: [
      "Ensalada de repollo con zanahoria y remolacha",
      "Ensalada de repollo con chile jalapeño",
      "Ensalada fresca",
    ],
    precio: 2.75,
    activo: false,
  },
];

export const ensaladas: MenuElement[] = [
  { nombre: "Ensalada de repollo con zanahoria y remolacha" },
  { nombre: "Ensalada de repollo con chile jalapeño" },
  { nombre: "Ensalada de repollo (tipo campero)" },
  { nombre: "Ensalada fresca" },
  { nombre: "Ensalada de pepino" },
  { nombre: "Ensalada de papa" },
  { nombre: "Ensalada rusa" },
  { nombre: "Ensalada de coditos" },
  { nombre: "Ensalada de tornillos", activo: false },
  { nombre: "Ensalada tipo escabeche" },
  { nombre: "Chirimol" },
];

export const futuros: MenuElement[] = [
  { nombre: "Plato de chorizo (chorizo de tusa)" },
];

export type Ensalada =
  | "Ensalada de repollo con zanahoria y remolacha"
  | "Ensalada de repollo con chile jalapeño"
  | "Ensalada de repollo (tipo campero)"
  | "Ensalada fresca"
  | "Ensalada de pepino"
  | "Ensalada de papa"
  | "Ensalada rusa"
  | "Ensalada de coditos"
  | "Ensalada de tornillos"
  | "Ensalada tipo escabeche"
  | "Chirimol";

export const frescos: MenuElement[] = [
  { nombre: "Mango" },
  { nombre: "Jocote" },
  { nombre: "Mandarina" },
  { nombre: "Guayaba" },
  { nombre: "Limonada" },
  { nombre: "Limonada con fresa", activo: false },
  { nombre: "Limonada con hierbabuena", activo: false },
  { nombre: "Piña" },
  { nombre: "Arrayán" },
  { nombre: "Melón" },
  { nombre: "Sandía" },
  { nombre: "Jamaica" },
  { nombre: "Tamarindo" },
  { nombre: "Maracuyá" },
  { nombre: "Cebada" },
  { nombre: "Horchata" },
  { nombre: "Mamey", activo: false },
  { nombre: "Chan", activo: false },
  { nombre: "Marañón", activo: false },
];

export type Fresco =
  | "Mango"
  | "Jocote"
  | "Mandarina"
  | "Guayaba"
  | "Limonada"
  | "Limonada con fresa"
  | "Limonada con hierbabuena"
  | "Piña"
  | "Arrayán"
  | "Melón"
  | "Sandía"
  | "Jamaica"
  | "Tamarindo"
  | "Maracuyá"
  | "Cebada"
  | "Horchata"
  | "Mamey"
  | "Chan"
  | "Marañón";

export type Menu = {
  carnes: MenuElement[];
  sopas: MenuElement[];
  pollos: MenuElement[];
  economicos: MenuElement[];
  especiales: MenuElement[];
  rellenos: MenuElement[];
  pastas: MenuElement[];
  pescados: MenuElement[];
  ensaladas: MenuElement[];
  frescos: MenuElement[];
  futuros: MenuElement[];
};

export type GeneratedMenu = {
  pollos?: MenuElement[];
  carnes?: MenuElement[];
  pescados?: MenuElement[];
  rellenos?: MenuElement[];
  pastas?: MenuElement[];
  sopas?: MenuElement[];
  economicos?: MenuElement[];
  especiales?: MenuElement[];
  ensaladas?: MenuElement[];
  frescos?: MenuElement[];
};

export const days = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

export type Day = (typeof days)[number];

export type DayCant = {
  pollos: number;
  carnes: number;
  pescados: number;
  pastas: number;
  rellenos: number;
  sopas: number;
  economicos: number;
  especiales: number;
  ensaladas: number;
  frescos: number;
};

export type WeekMenu = Record<Day, GeneratedMenu>;

export interface DayStatus {
  day: Day;
  active: boolean;
  view: "menu" | "requirement";
}

export type WeekStatus = Record<Day, DayStatus>;

export const menu: Menu = {
  carnes,
  sopas,
  pollos,
  economicos,
  especiales,
  rellenos,
  pastas,
  pescados,
  ensaladas,
  frescos,
  futuros,
};
