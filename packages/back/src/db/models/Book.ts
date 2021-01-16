import { Schema, Model, model, Document, Types } from 'mongoose'

export interface BookInterface {
  title: string
  image?: string
  recipes: Array<string>
  users: Array<string>
}

export interface BookDocument extends BookInterface, Document {
  recipes: Types.Array<string>
  users: Types.Array<string>
}

export interface BookModel extends Model<BookDocument> {}

const bookSchema: Schema<BookDocument, BookModel> = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 255,
    },
    image: {
      type: String,
      required: false,
      tring: true,
    },
    recipes: [
      {
        type: String,
        required: false,
      },
    ],
    users: [
      {
        type: String,
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Book = model<BookDocument, BookModel>('Book', bookSchema)

export default Book
