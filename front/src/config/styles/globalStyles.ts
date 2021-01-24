import { createGlobalStyle, css } from 'styled-components'

import { resetCss } from './resetCss'

interface GlobalStyles {
  theme: ThemeType
}

export const GlobalStyles = createGlobalStyle<GlobalStyles>(({ theme }) => {
  const { palette, typography } = theme
  return css`
    ${resetCss};

    body {
      color: ${palette.primary};
      font-family: ${typography.fontFamily.primary};
      font-size: 18px;
      font-weight: ${typography.fontWeight.normal};
    }

    #root {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }
  `
})
