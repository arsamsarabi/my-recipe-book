import { Schema, Model, model, Document, Types } from 'mongoose'

export interface IngredientAmount {
  ingredient: string
  amount: string
}

export interface RecipeInterface {
  title: string
  ingredients: Array<IngredientAmount>
  books: Array<string>
  steps?: string
  tags?: Array<string>
  difficulty?: number
  prepTime?: number
  cookTime?: number
  serves?: number
  image?: string
  description?: string
}

export interface RecipeDocument extends RecipeInterface, Document {
  ingredients: Types.Array<IngredientAmount>
  books: Types.Array<string>
  tags: Types.Array<string>
  totalTime: number
  creator: string
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
        ingredient: String,
        amount: String,
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
    prepTime: {
      type: Number,
      required: false,
      default: 0,
    },
    cookTime: {
      type: Number,
      required: false,
      default: 0,
    },
    serves: Number,
    creator: {
      type: String,
      required: false,
    },
    image: String,
    description: String,
  },
  {
    timestamps: true,
  }
)

recipeSchema.virtual('totalTime').get(function (this: RecipeDocument) {
  const prep = this.prepTime ? this.prepTime : 0
  const cook = this.cookTime ? this.cookTime : 0
  return prep + cook
})

const Recipe = model<RecipeDocument, RecipeModel>('Recipe', recipeSchema)

export default Recipe
