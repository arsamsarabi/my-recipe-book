
import { makeStyles} from '@material-ui/core/styles'
export const useStyles = makeStyles(() =>{
  return {
    header:{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 24,
    },
    title:{
      fontWeight: 'bold',
      size: '1.225rem'
    },
    ingredientWrapper: {
      width: '100%',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    }
  }
})

