import React from 'react'

import { AddIngredientForm, ScreenContainer } from '../../components'
import { Wrapper } from './styles'

const AddIngredient = () => {
  return (
    <ScreenContainer>
      <Wrapper>
        <AddIngredientForm />
      </Wrapper>
    </ScreenContainer>
  )
}

export default AddIngredient
