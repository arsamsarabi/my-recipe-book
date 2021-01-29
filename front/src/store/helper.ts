import { useState, createState } from '@hookstate/core'

export const createGlobalState = <T>(defaultValue: T) => {
  const store = createState<T>(defaultValue)
  // eslint-disable-next-line no-unused-vars
  return (): [T, (newValue: T) => void] => {
    const state = useState(store)
    return [state.get(), state.set]
  }
}
