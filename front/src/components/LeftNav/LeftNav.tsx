import React from 'react'

import { useAuth } from '../../hooks'
import { routes } from '../../navigation'
import { Wrapper, NavItem } from './styles'
import ListIcon from '../../resources/icons/outlined-white/list.svg'
import GroceriesIcon from '../../resources/icons/outlined-white/groceries-basket.svg'

export const LeftNav = () => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) return null
  return (
    <Wrapper>
      <NavItem to={routes.DASHBOARD}>
        <img src={ListIcon} alt="dashboard" />
        <p>Dashboard</p>
      </NavItem>
      <NavItem to={routes.INGREDIENTS}>
        <img src={GroceriesIcon} alt="ingredients" />
        <p>My Ingredients</p>
      </NavItem>
    </Wrapper>
  )
}
