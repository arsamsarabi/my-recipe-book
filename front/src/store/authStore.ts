import { createGlobalState } from './helper'

export type tokenStoreType = {
  token?: string
  inFlight?: boolean
  error?: Error
}

const authStore = {
  useTokenStore: createGlobalState<tokenStoreType>({
    token: sessionStorage.getItem('token') || undefined
  }),
}

export default authStore
