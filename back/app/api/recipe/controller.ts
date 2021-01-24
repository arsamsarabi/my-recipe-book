import omit from 'lodash/omit'

import Recipe, { RecipeInterface, RecipeDocument } from '../../db/models/Recipe'

const addRecipe = async (userId: string, requestData: RecipeInterface) => {
  const recipe = new Recipe({
    ...requestData,
    creator: userId,
  })
  await recipe.save()
  return recipe
}

const removeRecipe = async (id: string) => {
  const result = await Recipe.findByIdAndRemove(id)
  return result
}

const updateRecipe = async (recipe: Partial<RecipeDocument>) => {
  const result = await Recipe.findByIdAndUpdate(
    recipe._id,
    omit(recipe, ['_id', 'creator']),
    {
      new: true,
    }
  )

  return result
}

const getRecipes = async (userId: string) =>
  await Recipe.find({ creator: userId })

export default {
  addRecipe,
  removeRecipe,
  updateRecipe,
  getRecipes,
}
