import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <code className={styles.footer}>
        Avec TaskFlow tu as éliminé X tâches.
      </code>
    </footer>
  );
};
