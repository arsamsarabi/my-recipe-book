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

/*

&:not(:last-of-type) {
    margin-bottom: 8px;
  }

  img {
    width: 30px;
    margin-right: 8px;
  }

  p {
    color: ${palette.white};
    transition: 0.2s all linear;

  &:hover {
      color: ${palette.primary.light};
    }
  }
 */