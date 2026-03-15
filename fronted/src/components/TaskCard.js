import { Link } from "react-router-dom";

export default function TaskCard({ task, onDelete }) {

  return (

    <div className="border p-4 rounded-lg shadow">

      <h2 className="text-lg font-semibold">
        {task.title}
      </h2>

      <p className="text-gray-500">
        {task.description}
      </p>

      <div className="flex gap-3 mt-3">

        <Link
          to={`/edit-task/${task._id}`}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Edit
        </Link>

        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>

      </div>

    </div>

  );
}