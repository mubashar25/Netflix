import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import AddTask from "./pages/AddTask";
import TaskList from "./pages/TaskList";
import EditTask from "./pages/EditTask";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/tasks" element={<TaskList />} />

        <Route path="/add-task" element={<AddTask />} />

        <Route path="/edit-task/:id" element={<EditTask />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;