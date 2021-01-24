import axios from 'axios'

const DEV_ENDPOINT = 'http://localhost:4200/api'
const PROD_ENDPOINT = ''

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? DEV_ENDPOINT : PROD_ENDPOINT,
  headers: {},
})

export default axiosInstance
