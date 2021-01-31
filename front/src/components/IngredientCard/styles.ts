import {makeStyles, Theme} from '@material-ui/core/styles'
export const useStyles = makeStyles((theme: Theme) =>{
  return {
    wrapper:{
      width: 200,
      height: 250,
      padding: '16px 0',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.default,
      justifyContent: 'space-between',
      alignItems: 'center',
      overflow:'hidden',
      borderRadius: 15
    },
    title:{
      color: theme.palette.primary.contrastText
    }

  }
})