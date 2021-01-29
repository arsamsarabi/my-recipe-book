import { useState } from '@hookstate/core'
import {StateMethods, StateMethodsDestroy} from '@hookstate/core/dist'
import Instance = WebAssembly.Instance;

type stateType<T> = StateMethods<T> & StateMethodsDestroy

/*
type testType<S> =InstanceType<S>

// eslint-disable-next-line no-unused-vars
export const useGlobalState =<S> (store: S): [testType<S>] => {
  const state = useState(store)

  return [state.get()]
}

 */

/*

// eslint-disable-next-line no-unused-vars
export const useGlobalState =<T> (store: stateType<T>): [T, (newValue:T)=>void] => {
  const state = useState(store)

  return [state.get(), state.set]
}

 */