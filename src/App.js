import { useState } from 'react';

import './App.css';
import Tasks from './Tasks/Tasks';
import Form from './Form/Form';

const App = () => {
  let lists = [
    {
      id: 1,
      text: 'one',
      done: false,
    },
    {
      id: 2,
      text: 'two',
      done: false,
    },
    {
      id: 3,
      text: 'three',
      done: false,
    },
  ];

  const [taskList, setTaskList] = useState(lists);

  return (
    <div className="App">
      <div className="container">
        <div className="display-4 mb-2">ToDo приложение</div>
        <div className="h4 mb-5">список задач на сегодня</div>
        <Tasks taskList={taskList} />
        <div className="card bg-light">
          <div className="card-header">Добавить новую задачу</div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
