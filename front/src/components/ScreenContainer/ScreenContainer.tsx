import React, {ReactNode} from 'react'
import {useStyles} from './styles'


type ScreenContainerType = {
	children: ReactNode
}
export const ScreenContainer = ({children}: ScreenContainerType) =>{
  const classes= useStyles()
  return (
    <div className={classes.screenContainer}>
      {children}
    </div>
  )
}