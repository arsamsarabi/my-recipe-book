import { useState } from '@hookstate/core'

// eslint-disable-next-line no-unused-vars
// @ts-ignore
export const useGlobalState =<S> (store: S): typeof store.value => {
  const state = useState(store)

  return state.get()
}