import { useState } from '@hookstate/core'
import {StateMethods, StateMethodsDestroy} from '@hookstate/core/dist'

export const useGlobalState =<T> (store:  StateMethods<T> & StateMethodsDestroy): [T,typeof store.set] => {
  const state = useState(store)

  return [state.get(), store.set]
}