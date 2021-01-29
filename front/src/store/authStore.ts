import {createGlobalState} from './helper'

export type tokenType = string | undefined
export type tokenInFlightType = boolean

const authStore = {
  useTokenStore: createGlobalState<tokenType>(undefined),
  useTokenInFlightStore: createGlobalState<tokenInFlightType>(false),
}

export default authStore
