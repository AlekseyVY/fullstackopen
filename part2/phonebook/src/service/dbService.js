import axios from 'axios'




const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl)

const create = (newObj) => {
    return axios.post(baseUrl, newObj)
}

const update = (id, setNumber, setName) => {
    axios.put(`${baseUrl}/${id}`, {
        name: setName,
        number: setNumber
    })
}

const deleteContact = (id) => {
    console.log(id)
    axios.delete(`${baseUrl}/${id}`)
    }

export default {getAll, create, deleteContact, update}