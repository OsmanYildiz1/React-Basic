import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskCreate({ task, taskformUpdate, onUpdate }) {
  const { createTask } = useContext(TasksContext);

  const [title, setTitle] = useState(task ? task.title : ""); // düzenleye basıldıysa title'a task.title'ı ata yoksa boş string gönder.
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value); // metin değiştiğinde güncelleme
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // buttonun onclick veya formun onSubmit özelliğindeki refreshi engellemek için
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc); // update true ise güncelle false ise oluştur.
    } else {
      createTask(title, taskDesc);
    }

    setTitle(""); // butona tıklandıktan sonra title ve task alanı boşaltılsın
    setTaskDesc("");
  };

  return (
    <div>
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Lütfen Taskı Düzenleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlığı Düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Taskı Düzenleyiniz!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button
              className="task-button update-button"
              onClick={handleSubmit}
            >
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Giriniz!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button className="task-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}{" "}
    </div>
  );
}

export default TaskCreate;
