import Grocerie from '../Groceri'

const Groceries = ({tasks, onDelete, onToggle}) => {
console.log(tasks)
    return (
        <>
         {tasks.map(tasks => (
             <Grocerie key={tasks.id} onDelete={onDelete}
             onToggle={onToggle} tasks={tasks}/>
         ))} 
        </>
    )
}



export default Groceries
