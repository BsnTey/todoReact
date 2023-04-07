const Form = () => {
  return (
    <div className="card-body">
      <form id="form">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="taskInput"
            placeholder="Текст задачи"
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            Что делаем, сколько времени тратим, какой результат получаем.
          </small>
        </div>
        <button type="submit" className="btn btn-primary  btn-lg active">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default Form;
