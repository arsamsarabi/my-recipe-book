import { makeStyles, Theme} from '@material-ui/core/styles'
import {darken, lighten} from 'polished'

export const useStyles = makeStyles((theme: Theme) =>{
  const bgColor = theme.palette.type === 'dark'? lighten(0.1,theme.palette.background.paper) : darken(0.1,theme.palette.background.paper)
  return {
    screenContainer:{
      display: 'flex',
      flexDirection: 'column',
      overflowX: 'hidden',
      overflowY: 'auto',
      margin: 32,
      padding:32,
      borderRadius: 15,
      backgroundColor: bgColor
    }
  }
})
