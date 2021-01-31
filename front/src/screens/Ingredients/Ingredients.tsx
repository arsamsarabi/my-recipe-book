import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'

import { ScreenContainer, IngredientCard } from '../../components'
import { routesEnum } from '../../navigation'
import { getIngredients } from '../../api'
import { useStyles } from './styles'

const Ingredients = () => {
  const classes = useStyles()
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
      <div className={classes.header}>
        <h1>My Ingredients</h1>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => history.push(routesEnum.ADD_INGREDIENT)}
        >
          <AddIcon /> Add Ingredient
        </Button>
      </div>
      <div className={classes.ingredientWrapper}>
        {ingredients.map(({ name, image }) => (
          <IngredientCard key={`${name}-${image}`} name={name} image={image} />
        ))}
      </div>
    </ScreenContainer>
  )
}

export default Ingredients
