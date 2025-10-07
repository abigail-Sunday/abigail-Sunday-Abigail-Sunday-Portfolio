import { useState } from "react";

function App() {
  // Counter State
  const [count, setCount] = useState(0);

  // To-do List State
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  // Delete Task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px", fontFamily: "Arial" }}>
      {/* Counter App */}
      <h1>🚀 Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Add</button>
      <button onClick={() => setCount(count - 1)}>➖ Subtract</button>
      <button onClick={() => setCount(0)}>🔄 Reset</button>

      <hr style={{ margin: "30px 0" }} />

      {/* To-do List */}
      <h1>📝 To-do List</h1>
      <input
        type="text"
        value={task}
        placeholder="Enter a task..."
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "8px", width: "200px", marginRight: "10px" }}
      />
      <button onClick={addTask}>Add Task</button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              background: "#f4f4f4",
              padding: "8px",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "300px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {t}
            <button
              onClick={() => deleteTask(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
