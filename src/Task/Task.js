import cross from '../img/cross.svg';
import tick from '../img/tick.svg';

const Task = (props) => {
  const { text, done } = props.data;
  const cssDone = done ? 'task-title task-title--done' : 'task-title';
  return (
    <li className="list-group-item d-flex justify-content-between task-item">
      <span className={cssDone}>{text}</span>
      <div className="task-item__buttons">
        <button type="button" data-action="done" className="btn-action">
          <img src={tick} alt="Done" width="18" height="18" />
        </button>
        <button type="button" data-action="delete" className="btn-action">
          <img src={cross} alt="Done" width="18" height="18" />
        </button>
      </div>
    </li>
  );
};

export default Task;
