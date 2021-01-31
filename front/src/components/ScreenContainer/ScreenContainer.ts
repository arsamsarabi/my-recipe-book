import styled, { css } from 'styled-components'
import { lighten } from 'polished'

import { HEADER_HEIGHT } from '../Header/styles'
import { LEFTNAV_WIDTH } from '../LeftNav/styles'

export const ScreenContainer = styled.section(({ theme: { palette } }) => {
  return css`
    width: calc(100vw - ${LEFTNAV_WIDTH} - 24px);
    height: calc(100vh - ${HEADER_HEIGHT} - 32px);
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 32px;
    margin: 16px 0;
    background-color: ${lighten(0.035, palette.black)};
    border-radius: 15px;
  `
})
