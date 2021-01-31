import axios from 'axios'

const DEV_ENDPOINT = 'http://localhost:4200/api'
const PROD_ENDPOINT = ''

const authHeader =
  process.env.NODE_ENV === 'development' ? 'x-dev-auth-header' : 'x-auth-header'

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? DEV_ENDPOINT : PROD_ENDPOINT,
  headers: {
    [`${authHeader}`]: sessionStorage.getItem('token'),
  },
})

export default axiosInstance
