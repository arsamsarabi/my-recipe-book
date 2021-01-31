import styled, { css } from 'styled-components'

export const HEADER_HEIGHT = '63px'

export const HeaderWrapper = styled.header(({ theme: { palette } }) => {
  return css`
    height: ${HEADER_HEIGHT};
    background-color: ${palette.black};
    color: ${palette.white};
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${palette.white};

    h1 {
      color: white;
      font-size: 1.75rem;
    }
  `
})
