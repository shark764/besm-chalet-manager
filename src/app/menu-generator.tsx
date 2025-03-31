"use client";

import { days } from "@/utils";
import styles from "./page.module.css";
import useMenu from "./useMenu";
import MenuGroup from "./menu-group";
import MenuExtras from "./menu-extras";

export const MenuGenerator = () => {
  const { generatedMenu, onGenerateMenu, onSaveMenu, onGenerateDayMenu } =
    useMenu();

  return (
    <div className={styles.container}>
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
      </div>

      <h1>Menu</h1>
      <div className={styles.cards}>
        {days.map((dia) => {
          const changeDayMenu = () => {
            onGenerateDayMenu(dia);
          };

          return (
            <div key={dia} className={styles.card}>
              <div className={styles.cardHeader}>
                <h2 className={styles.day}>{dia}</h2>

                <button
                  type="button"
                  className={styles.primary}
                  onClick={changeDayMenu}
                >
                  Cambiar menú
                </button>
              </div>

              <MenuGroup items={generatedMenu?.[dia]?.pollos ?? []} />
              <MenuGroup items={generatedMenu?.[dia]?.carnes ?? []} />
              <MenuGroup items={generatedMenu?.[dia]?.pescados ?? []} />
              <MenuGroup items={generatedMenu?.[dia]?.pastas ?? []} />
              <MenuGroup items={generatedMenu?.[dia]?.rellenos ?? []} />
              <MenuGroup items={generatedMenu?.[dia]?.sopas ?? []} />

              <MenuGroup
                items={generatedMenu?.[dia]?.economicos ?? []}
                title="Platos económicos"
              />
              <MenuGroup
                items={generatedMenu?.[dia]?.especiales ?? []}
                title="Platos especiales"
              />

              <MenuExtras
                items={generatedMenu?.[dia]?.ensaladas ?? []}
                title="Ensaladas"
              />

              <MenuExtras
                items={generatedMenu?.[dia]?.frescos ?? []}
                title="Frescos"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuGenerator;
