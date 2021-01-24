import styled, { css } from 'styled-components'

export const HeaderWrapper = styled.header<WithTheme>(({ theme }) => {
  const { palette } = theme
  return css`
    height: 48px;
    background-color: ${palette.primary};
    color: ${palette.white};
    padding: 0 16px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1 {
      color: white;
    }
  `
})
