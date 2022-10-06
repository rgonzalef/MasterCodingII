import axios from 'axios'

const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1'

const getItems = (data) => axios.post(`${BASE_URL}/item`, data)

export {
  getItems
}
