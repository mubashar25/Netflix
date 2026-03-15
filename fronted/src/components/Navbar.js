import { Link } from "react-router-dom";

export default function Navbar() {

  return (

    <div className="bg-gray-900 text-white p-4 flex justify-between">

      <h1 className="font-bold text-xl">
        Task Manager
      </h1>

      <div className="space-x-4">

        <Link to="/">Dashboard</Link>

        <Link to="/tasks">Tasks</Link>

        <Link to="/add-task">Add Task</Link>

      </div>

    </div>

  );
}