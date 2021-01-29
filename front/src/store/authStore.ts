import { createState } from '@hookstate/core'

export type tokenType = string | undefined

const authStore = {
  tokenStore: createState<tokenType>(undefined),
}

export default authStore
