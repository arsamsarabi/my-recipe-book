import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const LEFTNAV_WIDTH = '250px'

export const Wrapper = styled.nav(() => {
  return css`
    min-width: ${LEFTNAV_WIDTH};
    max-width: ${LEFTNAV_WIDTH};
    padding: 32px;
    display: flex;
    flex-direction: column;
  `
})

export const NavItem = styled(Link)(({ theme: { palette } }) => {
  return css`
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &:not(:last-of-type) {
      margin-bottom: 8px;
    }

    img {
      width: 30px;
      margin-right: 8px;
    }

    p {
      color: ${palette.white};
      transition: 0.2s all linear;

      &:hover {
        color: ${palette.primary.light};
      }
    }
  `
})
