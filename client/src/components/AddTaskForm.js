import { useState } from "react"

export const AddTaskForm = ({ onAdd }) => {
    const [ text, setText ] = useState('');
    const [ day, setDay ] = useState('');
    const [ reminder, setReminder ] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please add task');
            return
        }

        onAdd({text, day, reminder});
        setText('');
        setDay('');
        setReminder(false);
    };
    return (
        <form className="add-form" action=""
        onSubmit={onSubmit}>
           <div className="form-control"  >
               <label htmlFor="">Task</label>
               <input type="text" placeholder="Add Task" 
               value={text} onChange={(e) => setText(e.target.value)}/>
           </div>
           <div className="form-control"  >
               <label htmlFor="">Day</label>
               <input type="text" placeholder="Add Day" 
               value={day} onChange={(e) => setDay(e.target.value)}/>
           </div>
           <div className="form-control form-control-check"  >
               <label htmlFor="">Reminder</label>
               <input type="checkbox"
               checked={reminder}
               value={text} 
               onChange={(e) => setReminder(e.currentTarget.checked)}/>
           </div>
           <input className="btn btn-block" type="submit" value='Save Task'/>
        </form>
    )
}
