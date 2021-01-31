import { Schema, Model, model, Document } from 'mongoose'

export interface IngredientInterface {
  name: string
  image?: any
  userId: string
}

export interface IngrediendDocument extends IngredientInterface, Document {}

export interface IngredientModel extends Model<IngrediendDocument> {}

export const ingredientSchema: Schema<
  IngrediendDocument,
  IngredientModel
> = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
      trim: true,
    },
    calories: {
      type: Number,
      required: false,
    },
    image: {
      type: String,
      required: false,
      tring: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Ingredient = model<IngrediendDocument, IngredientModel>(
  'Ingredient',
  ingredientSchema
)

export default Ingredient
