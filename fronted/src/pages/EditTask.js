import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { updateTask, getTasks } from "../services/api";

export default function EditTask() {

  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    loadTask();
  }, []);

  const loadTask = async () => {

    const res = await getTasks();

    const task = res.data.find(t => t._id === id);

    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await updateTask(id, {
      title,
      description
    });
  };

  return (

    <div className="p-6 max-w-lg mx-auto">

      <h1 className="text-2xl font-bold mb-6">
        Edit Task
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          className="border p-2 w-full rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="border p-2 w-full rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Update Task
        </button>

      </form>

    </div>

  );
}