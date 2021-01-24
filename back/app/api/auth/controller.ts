import bcrypt from 'bcrypt'
import pick from 'lodash/pick'

import User, { UserInterface } from '../../db/models/User'

const registerUser = async (requestData: UserInterface) => {
  const user = new User(
    pick(requestData, ['firstName', 'lastName', 'email', 'password', 'avatar'])
  )

  const salt = await bcrypt.genSalt(12)
  user.password = await bcrypt.hash(user.password, salt)

  await user.save()
  return user
}

const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email: email })
  if (!user) throw new Error('Invalid email or password.')

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) throw new Error('Invalid email or password.')

  return user
}

export default {
  loginUser,
  registerUser,
}
