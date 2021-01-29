import { useState } from '@hookstate/core'
import {StateMethods, StateMethodsDestroy} from '@hookstate/core/dist'

export const useGlobalState =<T> (store:  StateMethods<T> & StateMethodsDestroy): [T,(newValue:T)=>void] => {
  const state = useState(store)

  // @ts-ignore
  return [state.get(), store.set]
}