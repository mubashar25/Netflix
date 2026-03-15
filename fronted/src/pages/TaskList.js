import { useEffect, useState } from "react";

import { getTasks, deleteTask } from "../services/api";

import TaskCard from "../components/TaskCard";

export default function TaskList() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        All Tasks
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {tasks.map(task => (
          <TaskCard
            key={task._id}
            task={task}
            onDelete={handleDelete}
          />
        ))}

      </div>

    </div>

  );
}