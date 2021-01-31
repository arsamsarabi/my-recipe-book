import React from 'react'

import { useStyles } from './styles'
import { AppImage } from '../AppImage'
import {If} from '../If'

interface IngredientCardProps {
  name: string
  image?: string
}

export const IngredientCard = ({ name, image }: IngredientCardProps) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <If condition={!!image}>
        <AppImage name={name} path={image} />
      </If>
      <h1 className={classes.title}>{name}</h1>
    </div>
  )
}
