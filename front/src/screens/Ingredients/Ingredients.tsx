import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'

import { ScreenContainer, IngredientCard } from '../../components'
import { routes } from '../../navigation'
import { getIngredients } from '../../api'
import { Header } from './styles'

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([])
  const history = useHistory()

  useEffect(() => {
    const loadIngredients = async () => {
      try {
        const response = await getIngredients()
        setIngredients(response.data.data)
      } catch (error) {
        console.error(error)
      }
    }

    loadIngredients()
  }, [])
  return (
    <ScreenContainer>
      <Header>
        <h1>My Ingredients</h1>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => history.push(routes.ADD_INGREDIENT)}
        >
          <AddIcon /> Add Ingredient
        </Button>
      </Header>
      <div>
        {ingredients.map(({ name, image }) => (
          <IngredientCard key={`${name}-${image}`} name={name} image={image} />
        ))}
      </div>
    </ScreenContainer>
  )
}

export default Ingredients
