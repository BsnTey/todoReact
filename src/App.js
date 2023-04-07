import { useState } from "react";

import "./App.css";
import Tasks from "./Tasks/Tasks";
import Form from "./Form/Form";

const App = () => {
  const [taskList, setTaskList] = useState([]);

  let taskListLength = taskList.length;

  const handleAddTask = (taskText) => {
    const task = {
      id: taskListLength + 1,
      text: taskText,
      done: false,
    };
    setTaskList([...taskList, task]);
  };

  const onDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const onDone = (id) => {
    setTaskList(
      taskList.filter((task) => {
        if (task.id === id) {
          task.done = !task.done;
        }
        return task;
      })
    );
  };

  return (
    <div className="App">
      <div className="container">
        <div className="display-4 mb-2">ToDo приложение</div>
        <div className="h4 mb-5">список задач на сегодня</div>
        <Tasks taskList={taskList} onDelete={onDelete} onDone={onDone} />
        <div className="card bg-light">
          <div className="card-header">Добавить новую задачу</div>
          <Form handleAddTask={handleAddTask} />
        </div>
      </div>
    </div>
  );
};

export default App;
