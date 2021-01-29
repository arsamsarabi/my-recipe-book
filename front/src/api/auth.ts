import axios from './axios'

export type loginCredentialsType = {
  email: string
  password: string
}

type postLoginResponse = {
  data?:{
    data: string
  }
}

export const postLogin = async ({
  email,
  password,
}: loginCredentialsType): Promise<postLoginResponse> => {
  return axios.post('/auth/login', { email, password })
}
