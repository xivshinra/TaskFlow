// IMPORTS
import { useState } from "react";
import styles from "./TaskInput.module.css";

// COMPONENT
export const TaskInput = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleInputChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    addTask(taskTitle);
    setTaskTitle("");
    console.log("pouet");
  };

  return (
    <div className={` box ${styles.element}`}>
      <h2 className={styles.title}>🎯 Ajoute ta prochaine tâche.</h2>
      <form
        className={styles.container}
        onSubmit={handleAddTask}
      >
        <input
          type="text"
          className={styles.input}
          placeholder="Indiquez un titre de tâche explicite."
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="button-primary"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
};