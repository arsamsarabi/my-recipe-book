import { makeStyles } from '@material-ui/core/styles'
import {
  Theme as AugmentedTheme,
} from '@material-ui/core/styles'
import {darken, lighten} from 'polished'

export const useStyles = makeStyles((theme: AugmentedTheme) =>{

  const borderColor = theme.palette.type === 'dark'? lighten(0.1,theme.palette.background.paper) : darken(0.1,theme.palette.background.paper)

  return {
    backgroundImage: {
      backgroundColor: theme.palette.background.default,
    },
    image:{
      width: 150,
      height: 150,
      borderRadius: '50%',
      objectFit: 'cover',
      border: `1px solid ${borderColor}`
    }
  }
})