import styled, { css } from 'styled-components'

export const Header = styled.div(({ theme: { fonts } }) => {
  return css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    h1 {
      font-weight: ${fonts.weight.bold};
      font-size: 1.225rem;
    }
  `
})
