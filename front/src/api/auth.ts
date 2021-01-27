import axios from './axios'

export type loginCredentialsType = {
  email: string,
  password: string
}
export const postLogin = async ({email, password}: loginCredentialsType): Promise<any> => {
  return axios.post('/auth/login', { email, password })
}
