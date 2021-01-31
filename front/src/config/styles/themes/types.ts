import {PaletteOptions, SimplePaletteColorOptions} from '@material-ui/core/styles/createPalette'

export type PaletteType = PaletteOptions & {
	primary: SimplePaletteColorOptions
	secondary: SimplePaletteColorOptions
	danger: SimplePaletteColorOptions
	success: SimplePaletteColorOptions
	black: string
	white: string
	snow: string
}
