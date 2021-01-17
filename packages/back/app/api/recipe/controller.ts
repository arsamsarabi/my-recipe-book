import Recipe, { RecipeInterface } from '../../db/models/Recipe'

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

const updateRecipe = async (id: string, recipe: Partial<RecipeInterface>) => {
  const result = await Recipe.findByIdAndUpdate(id, recipe, {
    new: true,
  })

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
