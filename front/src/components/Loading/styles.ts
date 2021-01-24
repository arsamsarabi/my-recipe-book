import styled, { css } from 'styled-components'

export const LoadingWrapper = styled.div<WithTheme>(() => {
  return css`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `
})
