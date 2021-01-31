import { makeStyles} from '@material-ui/core/styles'
export const useStyles = makeStyles(() =>{
  return {
    leftNav:{
      display: 'flex',
      flexDirection: 'column'
    },
    image:{
      width: 32,
      height: 32
    }
  }
})