import { createGlobalState } from './helper'

export enum themeEnum {
  DARK_THEME = 'darkTheme',
  LIGHT_THEME = 'lightTheme'
}

export type themeStoreType  =  themeEnum

const themeStore = {
  useTheme: createGlobalState<themeStoreType>( themeEnum.DARK_THEME),
}

export default themeStore
