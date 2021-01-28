import { useState } from '@hookstate/core'
export const useGlobalState = (state: any) => {
  const store = useState(state)
  return [store.promised? {promised: true}: store.get(), store.set]
}
