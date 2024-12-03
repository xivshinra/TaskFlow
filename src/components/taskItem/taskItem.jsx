// IMPORTS
import styles from "./TaskItem.module.css";

// COMPONENT
export const TaskItem = () => {
  return (
    <li className={`${styles.container} ${styles.default}`}>
      <div className={styles.item}>
        <div className={`${styles.id} ${styles.idDefault}`}>1</div>
        <div className={styles.contentDefault}>
          Finir d'apprendre React avec 'Remove Monkey'
        </div>
      </div>
      <button className="button-primary">x</button>
    </li>
  );
};
