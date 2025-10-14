"use client";

import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    { text: "Tarea 1", completed: false },
    { text: "Tarea 2", completed: false }
  ]);
  const [currentTask, setCurrentTask] = useState("");
  const [isAscending, setIsAscending] = useState(true);

  const addButtonHandler = () => {
    if (currentTask.trim() === "") { //Reto 1
      alert("No se pueden agregar tareas vacías 🥀🥀🥀")
    }
    else if (tasks.find(task => task.text === currentTask)) { //Reto 2
      alert("No se pueden agregar tareas duplicadas 💀💀💀")
    }
    else {
      setTasks([...tasks, { text: currentTask, completed: false }]);
      setCurrentTask("");
    }
  };

  //Reto 3 y 4, tachar y eliminar
  const handleTaskClick = (index) => {
    if (tasks[index].completed) {
      // Si ya está tachada, eliminarla
      setTasks(tasks.filter((_, i) => i !== index));
    } else {
      // Si no está tachada, tacharla
      const newTasks = [...tasks];
      newTasks[index].completed = true;
      setTasks(newTasks);
    }
  };

  //Reto 5: Ordenar
  const sortTasks = () => {
    const sorted = [...tasks].sort((a, b) => {
      return isAscending 
        ? a.text.localeCompare(b.text)
        : b.text.localeCompare(a.text);
    });
    setTasks(sorted);
    setIsAscending(!isAscending);
  };

  // Reto 6: Eliminar todas las tareas
  const clearAll = () => {
    setTasks([]);
  };


  // Reto 1: Hacer que no se pueda agregar una tarea vacía 
  // Reto 2: Hacer que no se pueda agregar una tarea repetida
  // Reto 3: Hacer que al dar click en una tarea, aparezca tachada (clase tailwind "line-through")
  // Reto 4: Hacer que al dar click en una tarea tachada, desaparezca la tarea
  // Reto 5: Poner un botón que organice las tareas alfabéticamente
  // Reto 6: Poner un botón que elimine todas las tareas
  // Reto 7: Hacer que las tareas se ordenen en orden inverso al volver a presionar el botón de organizar

  return (
    <section className="bg-red-100 p-4 max-w-2xl mx-auto my-10">
      <div className="my-2 flex gap-2">
        <input
          className="bg-gray-100 border border-red-400 rounded-lg p-2"
          type="text"
          value={currentTask}
          onChange={(e) => {
            setCurrentTask(e.target.value);
          }}
        />
        <button
          className="bg-red-500 text-white rounded-lg px-4 py-2"
          onClick={addButtonHandler}
        >
          Agregar
        </button>
        <button 
          className="bg-red-500 text-white rounded-lg px-4 py-2"
          onClick={sortTasks}
        >
          Ordenar
        </button>
        <button 
          className="bg-red-500 text-white rounded-lg px-4 py-2"
          onClick={clearAll}
        >
          Eliminar Todas
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`bg-red-200 rounded-lg px-2 py-1 cursor-pointer ${
              task.completed ? "line-through" : ""
            }`}
            onClick={() => handleTaskClick(index)}
          >
            {task.text}
          </div>
        ))}
      </div>
    </section>
  );
}