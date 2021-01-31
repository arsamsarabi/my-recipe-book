import { createGlobalState } from './helper'

export type tokenType = string | undefined

export type tokenStoreType = {
  token?: tokenType
  inFlight?: boolean
  error?: Error
}

const authStore = {
  useTokenStore: createGlobalState<tokenStoreType>({
    token: sessionStorage.getItem('token') || undefined
  }),
}

export default authStore
