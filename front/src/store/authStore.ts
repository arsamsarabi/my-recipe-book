import { createState } from '@hookstate/core'

export type tokenType = string | undefined
export type tokenInFlightType = boolean

const authStore = {
  tokenStore: createState<tokenType>(undefined),
  tokenInFlightStore: createState<tokenInFlightType>(false),
}

export default authStore
