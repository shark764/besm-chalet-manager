import styles from "./page.module.css";
import useMenuStore from "./hooks/useMenuStore";
import MenuView from "./menu-view";
import RequirementsView from "./requirements-view";

export const ViewDay = () => {
  const day = useMenuStore((state) => state.day);
  const weekMenu = useMenuStore((state) => state.weekMenu);
  const toggleView = useMenuStore((state) => state.toggleView);
  const dayMenu = day ? weekMenu?.[day] : undefined;

  const onToggleView = () => {
    toggleView();
  };

  return (
    <>
      {!!day && (
        <>
          <div className={styles.buttons}>
            <button
              type="button"
              className={styles.secondary}
              onClick={onToggleView}
            >
              Volver a menú de la semana
            </button>
          </div>

          <div className={`${styles.cards} ${styles.dayView}`}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h2 className={styles.day}>{day}</h2>
              </div>
              <MenuView day={day} dayMenu={dayMenu} />
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h2>Requerimientos</h2>
              </div>
              <RequirementsView day={day} dayMenu={dayMenu} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ViewDay;
