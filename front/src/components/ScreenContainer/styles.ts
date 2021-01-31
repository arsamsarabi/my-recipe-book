import {Theme, makeStyles} from '@material-ui/core/styles'
import {lighten} from 'polished'

export const useStyles = makeStyles((theme: Theme) =>{
  return {
    screenContainer:{
      display: 'flex',
      flexDirection: 'column',
      overflowX: 'hidden',
      overflowY: 'auto',
      padding: 32,
      margin: '16px 0',
      backgroundColor: lighten(0.035, theme.palette.background.default),
      borderRadius: 15
    }
  }
})
