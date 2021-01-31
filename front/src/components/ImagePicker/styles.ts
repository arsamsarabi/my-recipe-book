import { makeStyles} from '@material-ui/core/styles'
export const useStyles = makeStyles(() =>{
  return {
    leftNav:{
      width: 250,
      padding: 32,
      display: 'flex',
      flexDirection: 'column'
    },
    navItem:{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }
  }
})
