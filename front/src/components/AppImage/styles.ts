import { makeStyles, createStyles } from '@material-ui/core/styles'
import {
  Theme as AugmentedTheme,
} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    backgroundImage: {
      backgroundColor: theme.palette.background.default,
    },
  }),
)
