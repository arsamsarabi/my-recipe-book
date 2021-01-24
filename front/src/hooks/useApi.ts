import { useState, useEffect } from 'react'

const INITIAL_STATE = {
  data: null,
  error: null,
  loading: true,
}

export const useApi = (apiCall: () => Promise<any>) => {
  const [state, setState] = useState(INITIAL_STATE)

  useEffect(() => {
    let cancelled = false
    if (state.data || state.error) setState(INITIAL_STATE)

    async function call() {
      try {
        const {
          data: { data, ok },
        } = await apiCall()

        if (ok && !cancelled) {
          setState({
            data,
            error: null,
            loading: false,
          })
        }
      } catch (error) {
        console.error(error)
        setState({
          data: null,
          error,
          loading: false,
        })
      }
    }

    call()

    return () => {
      cancelled = true
    }
  }, [])

  return { loading: state.loading, data: state.data, error: state.error }
}
