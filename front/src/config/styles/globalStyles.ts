import { createGlobalStyle, css } from 'styled-components'

import { ThemeType } from './theme'
import { resetCss } from './resetCss'

interface GlobalStylesProps {
  theme: ThemeType
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>(
  ({ theme: { palette, fonts } }) => {
    return css`
      ${resetCss};

      body {
        color: ${palette.white};
        background-color: ${palette.black};
        font-family: ${fonts.family.primary};
        font-size: ${fonts.size.base};
        font-weight: 300;
      }

      #root {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: ${fonts.family.heading};
      }
    `
  }
)
