import {createGlobalState} from './helper'

export type tokenType = string | undefined

export type tokenStoreType = {
  token?: tokenType,
  inFlight?: boolean,
  error?: any
}

const authStore = {
  useTokenStore: createGlobalState<tokenStoreType>({}),
}

export default authStore
