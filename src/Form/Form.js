import { useState, useRef } from "react";

const Form = ({ handleAddTask }) => {
  const [textForm, setTextForm] = useState();
  const inputRef = useRef(null);

  const handleValue = (e) => {
    setTextForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask(textForm);
    setTextForm("");
    inputRef.current.focus();
  };

  return (
    <div className="card-body">
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input value={textForm} onChange={handleValue} ref={inputRef} type="text" className="form-control" id="taskInput" placeholder="Текст задачи" required />
          <small id="emailHelp" className="form-text text-muted">
            Что делаем, сколько времени тратим, какой результат получаем.
          </small>
        </div>
        <button type="submit" className="btn btn-primary btn-lg active">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default Form;
