import React from 'react'
import Button from '@material-ui/core/Button'
import { useAuth } from '../../hooks'
import ListIcon from '../../resources/icons/outlined-white/list.svg'
import GroceriesIcon from '../../resources/icons/outlined-white/groceries-basket.svg'
import {useStyles} from './styles'
import { useHistory } from 'react-router-dom'
import {routesEnum} from '../../navigation'

export const LeftNav = () => {
  const history = useHistory()
  const { isAuthenticated } = useAuth()
  const classes = useStyles()


  if (!isAuthenticated) return null
  return (
    <div className={classes.leftNav}>
      <Button
        color="secondary"
        startIcon={ <img className={classes.image} src={ListIcon} alt="dashboard" />}
        onClick={()=>history.push(routesEnum.DASHBOARD)}
      >
        Dashboard
      </Button>
      <Button
        color="secondary"
        startIcon={ <img className={classes.image} src={GroceriesIcon} alt="ingredients" />}
        onClick={()=>history.push(routesEnum.INGREDIENTS)}
      >
        My Ingredients
      </Button>
    </div>
  )
}
