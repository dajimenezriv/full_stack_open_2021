import axios from "axios"

const baseUrl = '/api/persons'
//const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
    .then(res => res.data)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
    .then(res => res.data)
}

const update = (id, object) => {
  return axios.put(`${baseUrl}/${id}`, object)
    .then(res => res.data)
}

const remove = id => {
  return axios.delete(`${baseUrl}/${id}`)
    .then(res => res.data)
}

const exported = { getAll, create, update, remove }
export default exported
