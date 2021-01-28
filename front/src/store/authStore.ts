import { createState } from '@hookstate/core'


export type tokenType = string | undefined | Promise<string>

const authStore = {
  tokenStore: createState<tokenType>(undefined)
}

export default authStore
