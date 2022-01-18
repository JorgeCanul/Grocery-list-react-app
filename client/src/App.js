
import { Header } from "./components/Header";
import Groceries from "./components/Groceries";
import { useState, useEffect } from 'react';
import { AddTaskForm } from "./components/AddTaskForm";
import { deleteTask, getTasks } from "./actions/tasksActions";



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


// Delete Task
const deleteTask = (id) => {
  // recreate the state by filtering the id we are passing and not showing it
  setTasks(tasks.filter((task) => task._id !== id));
}

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
