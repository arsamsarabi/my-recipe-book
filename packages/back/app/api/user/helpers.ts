import { UserDocument } from '../../db/models/User'

export const createUserReturnObject = (
  user: UserDocument
): Partial<UserDocument> => {
  const result: Partial<UserDocument> = {}
  result.friends = user.friends
  result.books = user.books
  result._id = user._id
  result.firstName = user.firstName
  result.lastName = user.lastName
  result.email = user.email
  result.avatar = user.avatar
  result.createdAt = user.createdAt
  result.updatedAt = user.updatedAt

  return result
}
