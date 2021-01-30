import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const Wrapper = styled.header(({ theme: { palette, fonts } }) => {
  return css`
    width: 200px;
    height: 250px;
    padding: 16px 0;
    background-color: ${palette.black};
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 1px solid ${rgba(palette.snow, 0.8)};
    }

    h1 {
      font-family: ${fonts.family.heading};
      font-weight: ${fonts.weight.bold};
      font-size: 1.125rem;
      color: ${palette.white};
    }
  `
})
