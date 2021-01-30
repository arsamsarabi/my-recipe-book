export type FontsType = {
  family: {
    primary: string
    heading: string
  }
  weight: {
    light: number
    medium: number
    bold: number
  }
  size: {
    base: string
  }
}

export const fonts: FontsType = {
  family: {
    primary: '"Roboto", sans-serif',
    heading: '"Montserrat", sans-serif',
  },
  weight: {
    light: 300,
    medium: 500,
    bold: 700,
  },
  size: {
    base: '18px',
  },
}
