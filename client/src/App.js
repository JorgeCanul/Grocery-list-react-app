import { Header } from "./components/Header";
import Groceries from "./components/Groceries";
import { useState, useEffect } from 'react';
import { AddTaskForm } from "./components/AddTaskForm";

function App() {
  const [ toggleForm, setToggleForm ] = useState(false);
  const [ tasks, setTasks ] = useState([])

  useEffect(() => {
      fetch('/api/task/tasks')
      .then(res => {
         return res.json();
      })
      .then(tasks => {
        setTasks([...tasks]);
      })
      .catch(() => console.log('Error getting tasks'));
  }, [tasks]);


// Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task._id === id ? 
  {...task, reminder: !task.reminder} : task))
};

  return (
    <div className="container">
      <Header onForm={() => setToggleForm(!toggleForm)}
      btnColor={toggleForm}/>
      {toggleForm && <AddTaskForm />}
      <Groceries  
        onToggle={toggleReminder}
      tasks={tasks}/>
    </div>
  );
}

export default App;
