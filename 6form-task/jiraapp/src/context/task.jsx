import { createContext } from "react";
import axios from "axios";
import { useState } from "react";

const TasksContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  // TASK OLUŞTURMA
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    }); // veri ekledik.
    console.log(response);

    const createdTasks = [...tasks, response.data];
    // eskileri kopyalar yeni elemanla beraber yeni dizi oluşturur. (spread operatörün faydası.)
    setTasks(createdTasks); // güncelleyelim
  };

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };

  // SİLME
  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`); // idsi verilen objeyi sil
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id; // taskın idsi gönderilen id'ye eşit değilse
    });

    setTasks(afterDeletingTasks);
  };

  //GÜNCELLEME
  const editTaskById = async (id, updatedtitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updatedtitle,
      taskDesc: updatedTaskDesc,
    }); //idsi verilen objeyi güncelle
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        //id'de bir değişiklik var mı
        return { id: id, title: updatedtitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const sharedValuesAndMethods = {
    // değişken ve metodları objede tuttuk context içine geçmek için
    tasks,
    createTask,
    fetchTasks,
    editTaskById,
    deleteTaskById,
  };
  return (
    <TasksContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TasksContext.Provider>
  );
}
export { Provider }; // fonksiyonu import ettik
export default TasksContext;
