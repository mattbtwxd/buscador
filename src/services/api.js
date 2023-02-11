import axios from 'axios'

// 91900040/json

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})

export default api
