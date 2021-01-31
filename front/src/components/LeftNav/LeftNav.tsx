import React from 'react'

import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks'
import { routes } from '../../navigation'
import ListIcon from '../../resources/icons/outlined-white/list.svg'
import GroceriesIcon from '../../resources/icons/outlined-white/groceries-basket.svg'
import {useStyles} from './styles'

export const LeftNav = () => {
  const { isAuthenticated } = useAuth()
  const classes = useStyles()

  if (!isAuthenticated) return null
  return (
    <div className={classes.leftNav}>
      <Link className={classes.navItem} to={routes.DASHBOARD}>
        <img src={ListIcon} alt="dashboard" />
        <p>Dashboard</p>
      </Link>
      <Link className={classes.navItem} to={routes.INGREDIENTS}>
        <img src={GroceriesIcon} alt="ingredients" />
        <p>My Ingredients</p>
      </Link>
    </div>
  )
}
