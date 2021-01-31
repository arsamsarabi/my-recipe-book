import styled, { css } from 'styled-components'

import { WithTheme } from '../../config/styles/theme'

type BackgroundImageProps = WithTheme & {
  url: string
}

export const BackgroundImage = styled.figure<BackgroundImageProps>(
  ({ theme: { palette }, url }) => {
    return css`
      width: 100%;
      height: 100%;
      background: ${palette.black};
      background-image: url(${url});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `
  }
)
