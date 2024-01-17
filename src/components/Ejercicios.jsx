/* 1 . Crear una aplicación web con un componente que muestre en pantalla el mensaje
“Hello World”. */

/* import React from 'react'

const Ejercicios = () => {
  return (
    <div>
        <h1>Hello World!</h1>
    </div>
  )
}

export default Ejercicios */

/* 2. Modificar el component <h1>Hola Mundo</h1>e anterior y enviar mediante props el valor “My friend” */

/* import React from 'react'

const Ejercicios = (props) => {
  return (
    <div>
        <h1>{props.children}</h1>
    </div>
  )
}

export default Ejercicios */

/* 3. Modificar el programa anterior agregando al componente un state con la clave msj:
“(from changed state)”, además agregar un botón al presionar este botón (onClick), */

/* import React, { useState } from 'react';
import Button from './Button';

const Ejercicios = ({ children }) => {
  const [msj, setMsj] = useState("(from changed state)!");

  const handleClick = () => {
    setMsj("(from changed state)!");
    alert('from changed state!');
  }

  return (
    <div>
      <h1> Hello {children} {msj}</h1>
      <button onClick={handleClick}> Click Me  </button>
    </div>
  );
}

export default Ejercicios; */

/* 4. Crear una aplicación web que muestre una lista de tareas, al ingresar una tarea
en el input y presionar enter, esta tarea se debe mostrar en una lista. */

/* import React, { useState } from 'react';

function Tarea() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div className="App">
      <h1>Bienvenido</h1>
      <h2>Ingresa tus tareass</h2>
      <input
        type="text"
        placeholder="Ingrese una tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tarea; */

/* 5. Modifica el programa anterior para que las tareas se puedan almacenar en el
localstorage. */

/* import React, { useState, useEffect } from "react";

function readTasksFromLocalStorage() {
  const tasks = localStorage.getItem("tasks") || [];
  return JSON.parse(tasks);
}

function saveTasksToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function Tarea() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    // Leer las tareas del localStorage
    const tasks = readTasksFromLocalStorage();
    setTasks(tasks);
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && newTask.trim() !== "") {
      // Agregar la nueva tarea al arreglo de tareas
      const newTasks = [...tasks, newTask];
      // Guardar las tareas en el localStorage
      saveTasksToLocalStorage(newTasks);
      // Actualizar el estado con las nuevas tareas
      setTasks(newTasks);
      // Limpiar la entrada de texto
      setNewTask("");
    }
  };

  const handleTaskClick = (task) => {
    // Eliminar la tarea del arreglo de tareas
    const newTasks = tasks.filter((t) => t !== task);
    setTasks(newTasks);
    // Guardar las tareas en el localStorage
    saveTasksToLocalStorage(newTasks);
  };

  return (
    <div className="App">
      <h1>Bienvenido</h1>
      <h2>Ingresa tus tareas</h2>
      <input
        type="text"
        placeholder="Ingrese una tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              type="button"
              className="close"
              onClick={() => handleTaskClick(task)}
              style={{ fontSize: "12px", marginLeft: "5px" }}
            >
              Emilinar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tarea; */

/* 6.Crear un proyecto de react que muestre un formulario con un input y un button
que permite guardar un color en el localstorage */

import React, { useState, useEffect } from "react";

function readColorsFromLocalStorage() {
  const colors = localStorage.getItem("colors") || "[]";
  return JSON.parse(colors);
}

function saveColorsToLocalStorage(colors) {
  localStorage.setItem("colors", JSON.stringify(colors));
}

function ColorForm() {
  const [colors, setColors] = useState([]);
  const [newColor, setNewColor] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    // Leer los colores del localStorage
    const storedColors = readColorsFromLocalStorage();
    setColors(storedColors);
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && newColor.trim() !== "") {
      // Agregar el nuevo color al arreglo de colores
      const newColors = [...colors, newColor];
      // Guardar los colores en el localStorage
      saveColorsToLocalStorage(newColors);
      // Actualizar el estado con los nuevos colores
      setColors(newColors);
      // Limpiar la entrada de texto
      setNewColor("");
    }
  };

  const handleColorClick = (color) => {
    // Establecer el color seleccionado
    setSelectedColor(color);
  };

  const handleDeleteColor = (color) => {
    // Eliminar el color del arreglo de colores
    const newColors = colors.filter((c) => c !== color);
    // Guardar los colores en el localStorage
    saveColorsToLocalStorage(newColors);
    // Actualizar el estado con los nuevos colores
    setColors(newColors);
    // Limpiar el color seleccionado si era el color que se eliminó
    if (selectedColor === color) {
      setSelectedColor(null);
    }
  };

  return (
    <div className="App">
      <h1>Administrar colores</h1>
      <input
        type="text"
        placeholder="Ingrese un color (ej. Blue)"
        value={newColor}
        onChange={(e) => setNewColor(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <ul>
        {colors.map((color, index) => (
          <li
            key={index}
            style={{ display: "flex", alignItems: "center" }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: color,
                marginRight: "10px",
              }}
              onClick={() => handleColorClick(color)}
            ></div>
            {color}
            <button
              type="button"
              onClick={() => handleDeleteColor(color)}
              style={{ marginLeft: "auto", backgroundColor: "red", marginTop: "0.5rem"}}
            >
              Borrar
            </button>
          </li>
        ))}
      </ul>
      {selectedColor && (
        {/* <div style={{ marginTop: "10px" }}>
          Color seleccionado:{" "}
          <span style={{ color: selectedColor }}>{selectedColor}</span>
        </div> */}
      )}
    </div>
  );
}

export default ColorForm;



