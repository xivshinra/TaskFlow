// IMPORTS
import { useState } from "react";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";
import { Footer } from "./footer/footer";

// COMPONENT
export const TaskContainer = () => {
  const [tasksList, setTasksList] = useState([
    // {
    //   id: 1,
    //   title: "Manger des pommes !",
    //   completed: false,
    // },
    // {
    //   id: 2,
    //   title: "Apprendre react avec Remote Monkey.",
    //   completed: false,
    // },
    // {
    //   id: 3,
    //   title: "Sortir le chien",
    //   completed: false,
    // },
  ]);
  console.log("tasksList :>> ", tasksList);

  const addTask = (title) => {
    const newTask = {
      id: tasksList.length + 1,
      title: title,
      completed: false,
    };
    setTasksList([...tasksList, newTask]);
  };

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList />
      <Footer />
    </main>
  );
};
