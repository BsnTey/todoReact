import Task from "../Task/Task";
import leaf from "../img/leaf.svg";

const Tasks = ({ taskList, onDelete, onDone }) => {
  return (
    <div className="card mb-4">
      {taskList.length !== 0 ? null : <EmptyList />}
      <ul className="list-group list-group-flush">
        {taskList.map((el) => {
          return <Task data={el} key={el.id} onDelete={onDelete} onDone={onDone} />;
        })}
      </ul>
    </div>
  );
};

const EmptyList = () => {
  return (
    <div className="list-group-item empty-list">
      <img src={leaf} alt="Empty" width="48" className="mt-3" />
      <div className="empty-list__title">Список дел пуст</div>
    </div>
  );
};

export default Tasks;
