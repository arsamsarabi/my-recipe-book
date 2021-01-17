import User from '../../db/models/User'

const getMe = async (userId: string) => await User.findById(userId)

export default {
  getMe,
}
