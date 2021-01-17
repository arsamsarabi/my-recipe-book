import pick from 'lodash/pick'

import Ingredient, { IngredientInterface } from '../../db/models/Ingredient'

const addIngredient = async (requestData: IngredientInterface) => {
  const ingredient = new Ingredient(pick(requestData, ['name', 'image']))
  await ingredient.save()
  return ingredient
}

const removeIngredient = async (id: string) => {
  const result = await Ingredient.findByIdAndRemove(id)
  return result
}

const updateIngredient = async (
  id: string,
  ingredient: Partial<IngredientInterface>
) => {
  const result = await Ingredient.findByIdAndUpdate(id, ingredient, {
    new: true,
  })
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
