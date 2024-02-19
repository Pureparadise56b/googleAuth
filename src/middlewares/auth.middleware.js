import { User } from '../models/user.model.js'

const isLoggedIn = (req, res, next) => {
  const user = req?.user
  if (!user) return res.redirect('/auth/login')
  next()
}

export { isLoggedIn }
