import { useState, useEffect, useCallback } from 'react'

const INITIAL_STATE = {
  data: null,
  error: null,
  loading: true,
}

export const useApi = (apiCall: () => Promise<any>) => {
  const [state, setState] = useState(INITIAL_STATE)

  const call = useCallback(async () => {
    try {
      const {
        data: { data },
      } = await apiCall()

      setState({
        data,
        error: null,
        loading: false,
      })
    } catch (error) {
      setState({
        data: null,
        error,
        loading: false,
      })
    }
  }, [])

  useEffect(() => {
    call()
  }, [call])

  return { loading: state.loading, data: state.data, error: state.error }
}
