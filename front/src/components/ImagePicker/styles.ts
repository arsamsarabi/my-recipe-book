import styled, { css } from 'styled-components'
import MuiTextField from '@material-ui/core/TextField'
import { darken } from 'polished'

export const TextField = styled(MuiTextField)(() => {
  return css`
    width: 1px;
    height: 1px;
    opacity: 0;
    position: absolute;
    overflow: hidden;
    z-index: -1;
  `
})

export const Picker = styled.label(({ theme }) => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 50px;
    border-radius: 5px;
    background-color: ${theme.palette.yellow};
    color: ${theme.palette.black};
    margin-bottom: 16px;
    font-size: 1.125rem;
    transition: 0.2s position linear;
    box-shadow: 0 4px 2px -2px ${darken(0.2, theme.palette.yellow)};

    &:hover {
      cursor: pointer;
      position: relative;
      top: 4px;
      box-shadow: none;
    }
  `
})

export const Image = styled.img(() => {
  return css`
    width: 250px;
    height: 250px;
    border-radius: 5px;
  `
})

export const NoImage = styled.div(({ theme }) => {
  return css`
    width: 250px;
    height: 250px;
    border: 2px dashed ${theme.palette.primary.light};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 1.25rem;
    }
  `
})
