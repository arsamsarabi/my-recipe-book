import styled, { css } from 'styled-components'
import MuiTextField from '@material-ui/core/TextField'

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
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.black};
    margin-bottom: 16px;
    font-size: 1.125rem;
    transition: 0.2s position linear;
    margin-top: 16px;

    &:hover {
      cursor: pointer;
    }
  `
})

type ImageProps = {
  url: string
}

export const Image = styled.div<ImageProps>(({ url }) => {
  return css`
    width: 250px;
    height: 250px;
    background-image: url(${url});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    margin-bottom: 16px;
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
    margin-bottom: 16px;
    p {
      font-size: 1.25rem;
    }
  `
})
