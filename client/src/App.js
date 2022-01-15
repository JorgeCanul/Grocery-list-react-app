
import { Header } from "./components/Header";
import Groceries from "./components/Groceries";
import { useState, useEffect } from 'react';
import { AddTaskForm } from "./components/AddTaskForm";

function App() {
  const [ toggleForm, setToggleForm ] = useState(false)
  // useEffect(() => {
  //   const getTasks = async () => {
  //     const apiTaks = await fetchTasks();
  //     setTaks(apiTaks);
  //   }
  //   getTasks();
  // }, []);


  const [ tasks, setTaks ] = useState(
    [
        {
            id: 1,
            text: 'Costco Run',
            day: 'Tomorrow morning',
            reminder: true
        },
        {
            id: 2,
            text: 'Safeway Run',
            day: 'Tomorrow night',
            reminder: false
        },
        {
            id: 3,
            text: ' Run',
            day: 'Tomorrow ',
            reminder: true
        }
    ]
)

// Delete Task
const deleteTask = (id) => {
  // recreate the state by filtering the id we are passing and not showing it
  setTaks(tasks.filter((task) => task.id !== id));
}

// Toggle reminder
const toggleReminder = (id) => {
  setTaks(tasks.map((task) => task.id === id ? 
  {...task, reminder: !task.reminder} : task))
};

const addTask = (task) => {
  // "manually creating an ID"
  let id = Math.random() * 10000 + 1;
  // add id to our newTask get the new task from our form
  const newTask = {id, ...task};
  // set state spreading our previus tasks and adding our new task
  setTaks([ ...tasks, newTask]);
};

  return (
    <div className="container">
      <Header onForm={() => setToggleForm(!toggleForm)}
      btnColor={toggleForm}/>
      {toggleForm && <AddTaskForm onAdd={addTask}/>}
      <Groceries onDelete={deleteTask} 
        onToggle={toggleReminder}
      tasks={tasks}/>
    </div>
  );
}

export default App;
