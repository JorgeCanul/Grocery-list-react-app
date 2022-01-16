import axios from 'axios';

export const creatTask = (tasks) => {
    axios.post('/api/task/tasks', tasks)
    .then(res => {
      return  res.json()
    })
    .then(res => {
        return res.json(res)
    })
    .catch(() => console.log('Error Creating'))
}

export const deleteTask = (id) => {
  axios.delete(`/api/task/tasks/${id}`)
  .then(res => {
    return res.json();
  })
  .then(res => {
    return res.json(res)
  })
  
  .catch(() => console.log('Problem deleting'));

};
// export const getTasks = () => {
//     axios.get('/api/task/tasks')
//     .then(res => {
//         return res.json();
//     })
//     .then(res => {
//         return res.json(res)
//     })
//     .catch(() => console.log('Error getting tasks'));
    
// }