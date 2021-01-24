import Joi from '@hapi/joi'

const loginSchema = Joi.object({
  email: Joi.string().min(6).max(255).required(),
  password: Joi.string().min(6).max(1024).required(),
})

const validateLogin = (user: any) => loginSchema.validate(user)

const registerSchema = Joi.object({
  firstName: Joi.string().min(3).max(50).required(),
  lastName: Joi.string().min(3).max(50).required(),
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(255).required(),
  avatar: Joi.string(),
})

const validateRegister = (user: any) => registerSchema.validate(user)

export default { validateLogin, validateRegister }
