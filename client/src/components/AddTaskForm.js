import { useState } from "react";
import { creatTask } from "../actions/tasksActions";


export const AddTaskForm = () => {
    const [ text, setText ] = useState('');
    const [ day, setDay ] = useState('');
    const [ reminder, setReminder ] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please add task');
            return
        }

        creatTask({text, day, reminder});
        setText('');
        setDay('');
        setReminder(false);
    };
    return (
        <form className="add-form" action=""
        onSubmit={onSubmit}>
           <div className="form-control"  >
               <label htmlFor="">Store</label>
               <input type="text" placeholder="Store" 
               value={text} onChange={(e) => setText(e.target.value)}/>
           </div>
           <div className="form-control"  >
               <label htmlFor="">Item</label>
               <input type="text" placeholder="Add Item" 
               value={day} onChange={(e) => setDay(e.target.value)}/>
           </div>
           <div className="form-control form-control-check"  >
               <label htmlFor="">Reminder</label>
               <input type="checkbox"
               checked={reminder}
               value={text} 
               onChange={(e) => setReminder(e.currentTarget.checked)}/>
           </div>
           <input className="btn btn-block" type="submit" value='Save List'/>
        </form>
    )
}
