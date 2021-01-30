import React from 'react'

import { Wrapper } from './styles'
import { AppImage } from '../AppImage'

interface IngredientCardProps {
  name: string
  image?: string
}

export const IngredientCard = ({ name, image }: IngredientCardProps) => {
  return (
    <Wrapper>
      {image && <AppImage name={name} path={image} />}
      <h1>{name}</h1>
    </Wrapper>
  )
}
