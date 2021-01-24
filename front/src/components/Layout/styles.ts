import styled, { css } from 'styled-components'

export const LayoutWrapper = styled.section<WithTheme>(() => {
  return css`
    width: 100vw;
    background-color: 'hotpink';
    overflow-y: auto;
    height: calc(100vh - 48);
  `
})

export const Main = styled.main<WithTheme>(() => {
  return css``
})
