import { makeStyles} from '@material-ui/core/styles'
export const useStyles = makeStyles(() =>{
  return {
    form:{
      display: 'flex',
      flexDirection: 'column'
    },
    formWrapper: {
      width: 600
    }
  }
})
