import omit from 'lodash/omit'

import Ingredient, {
  IngredientInterface,
  IngrediendDocument,
} from '../../db/models/Ingredient'

const addIngredient = async (requestData: Partial<IngredientInterface>) => {
  const ingredient = new Ingredient(requestData)
  await ingredient.save()
  return ingredient
}

const removeIngredient = async (id: string) => {
  const result = await Ingredient.findByIdAndRemove(id)
  return result
}

const updateIngredient = async (ingredient: Partial<IngrediendDocument>) => {
  const result = await Ingredient.findByIdAndUpdate(
    ingredient._id,
    omit(ingredient, ['_id', 'creator']),
    {
      new: true,
    }
  )

  return result
}

const getIngredients = async (userId: string) =>
  await Ingredient.find({ userId })

export default {
  addIngredient,
  removeIngredient,
  updateIngredient,
  getIngredients,
}
