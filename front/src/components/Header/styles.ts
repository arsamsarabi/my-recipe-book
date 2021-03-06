import {Theme, makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>{
  return {
    header: {
      height: 64,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.primary.contrastText,
      padding: '0 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title:{
      fontSize: '1.75rem'
    }
  }
}
)
