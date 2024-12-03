// IMPORTS
import styles from "./Header.module.css";
import reactLogo from "../../assets/react.svg";

// COMPONENT
export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <img
          src={reactLogo}
          alt="logo"
          width={50}
          height={50}
        />
        <div>
          <h1>TaskFlow</h1>
          <div className="color-gray">
            <code>Eliminez le chaos, suivez le flux!</code>
          </div>
        </div>
      </div>
      <code className="color-primary">v.1.0</code>
    </div>
  );
};
