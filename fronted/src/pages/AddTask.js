import { useState } from "react";

import { createTask } from "../services/api";

export default function AddTask() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    await createTask({
      title,
      description
    });

    setTitle("");
    setDescription("");
  };

  return (

    <div className="p-6 max-w-lg mx-auto">

      <h1 className="text-2xl font-bold mb-6">
        Add Task
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Task title"
          className="border p-2 w-full rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="border p-2 w-full rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          className="bg-green-500 text-white px-6 py-2 rounded"
        >
          Add Task
        </button>

      </form>

    </div>

  );
}