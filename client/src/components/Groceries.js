import Grocerie from '../Groceri'

const Groceries = ({tasks, onDelete, onToggle}) => {
    let items
    if(tasks.length > 0) {
        items = tasks.map(tasks => (
            <Grocerie key={tasks._id} onDelete={onDelete}
            onToggle={onToggle} tasks={tasks}/>
        ))
    }
    return (
        <>
        { items }
        </>
    )
}



export default Groceries
