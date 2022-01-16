import { FaTimes } from 'react-icons/fa'

const Grocerie = ({ tasks, onDelete, onToggle }) => {
    return (
        <div className={`task ${tasks.reminder? 'reminder' : ''}`} 
        onDoubleClick={() => onToggle(tasks._id)}>
          <h3>{tasks.text} 
          < FaTimes style={{color: 'red', cursor: 'pointer'}}
          onClick={() => onDelete(tasks._id)}
          />
          </h3>
          <p>{tasks.day}</p> 
        </div>
    )
}

export default Grocerie
 