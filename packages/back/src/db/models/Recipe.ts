import { Schema, Model, model, Document, Types } from 'mongoose'

export interface IngredientAmount {
  ingredient: string
  amount: string
}

export interface RecipeInterface {
  title: string
  ingredients: Array<IngredientAmount>
  books: Array<string>
  steps: string
  tags: Array<string>
  difficulty: number
  prepTime: number
  cookTime: number
  serves: number
}

export interface RecipeDocument extends RecipeInterface, Document {
  ingredients: Types.Array<IngredientAmount>
  books: Types.Array<string>
  tags: Types.Array<string>
  totalTime: number
}

export interface RecipeModel extends Model<RecipeDocument> {}

const recipeSchema: Schema<RecipeDocument, RecipeModel> = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 255,
    },
    ingredients: [
      {
        type: {
          ingredient: String,
          amount: String,
        },
        required: true,
      },
    ],
    books: [
      {
        type: String,
        required: true,
      },
    ],
    steps: String,
    tags: [
      {
        type: String,
        required: false,
      },
    ],
    difficulty: Number,
    prepTime: Number,
    cookTime: Number,
    serves: Number,
  },
  {
    timestamps: true,
  }
)

recipeSchema.virtual('totalTime').get(function (this: RecipeDocument) {
  return this.prepTime + this.cookTime
})

const Recipe = model<RecipeDocument, RecipeModel>('Recipe', recipeSchema)

export default Recipe
