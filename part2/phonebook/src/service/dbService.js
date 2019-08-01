import axios from 'axios'




const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl)

const create = (newObj) => {
    return axios.post(baseUrl, newObj)
}

export default {getAll, create}