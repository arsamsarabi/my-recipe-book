import { useState, createState } from '@hookstate/core'

export const createGlobalState = <T>(defaultValue: T) => {
  const store = createState<T>(defaultValue)
  return (): [T, (newValue: T) => void] => {
    const state = useState(store)
    return [state.value, state.set]
  }
}
