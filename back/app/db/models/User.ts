import { Schema, Model, model, Document, Types } from 'mongoose'
import jwt from 'jsonwebtoken'
import config from 'config'

export interface UserInterface {
  firstName: string
  lastName?: string
  password: string
  email: string
  friends: Array<string>
  books: Array<string>
  avatar?: string
}
export interface UserDocument extends UserInterface, Document {
  friends: Types.Array<string>
  books: Types.Array<string>
  fullName: string
  generateAuthToken(): string
  createdAt: string
  updatedAt: string
}

export interface UserModel extends Model<UserDocument> {
  generateAuthToken(): string
}

const userSchema: Schema<UserDocument, UserModel> = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
      trim: true,
    },
    lastName: {
      type: String,
      required: false,
      minlength: 0,
      maxlength: 50,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 1024,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 6,
      maxlength: 255,
      trim: true,
    },
    friends: [
      {
        type: String,
      },
    ],
    books: [
      {
        type: String,
      },
    ],
    avatar: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

userSchema.virtual('fullName').get(function (this: UserDocument) {
  const first = this.firstName
  const last = this.lastName || ''
  return `${first} ${last}`.trim()
})

userSchema.methods.generateAuthToken = function () {
  const userDataToSign = {
    _id: this._id,
    fullName: this.fullName,
    email: this.email,
    avatar: this.avatar,
  }
  const token = jwt.sign(userDataToSign, config.get('jwtPrivateKey'), {
    expiresIn: '7d',
  })
  return token
}

const User = model<UserDocument, UserModel>('User', userSchema)

export default User
