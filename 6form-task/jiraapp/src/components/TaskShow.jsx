import { useState } from "react";
import TaskCreate from "./TaskCreate";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskShow({ task }) {
  const { deleteTaskById, editTaskById } = useContext(TasksContext);

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    // onDelete(task.id);
    deleteTaskById(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit); // show editi true yaptık
  };

  const handleSubmit = (id, updatedtitle, updatedTaskDesc) => {
    setShowEdit(false);
    editTaskById(id, updatedtitle, updatedTaskDesc);
  };

  console.log(task);
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        //showEdit false iken basılacaklar
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="task-edit" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
