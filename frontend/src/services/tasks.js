import axios from 'axios'

const tasks = axios.create({
    baseURL:'http://localhost:3000/tasks'
})

export default tasks