import User from '../../db/models/User'

const getMe = async (userId: string) => {
  const result = await User.findById(userId)
  return result
}

export default {
  getMe,
}
