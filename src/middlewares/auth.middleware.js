import { User } from '../models/user.model.js'

const isLoggedIn = async (req, res, next) => {
  const token = req.cookies?.access_token
  if (!token) return res.redirect('/auth/login')
  const user = await User.findOne({ accessToken: token }).select(
    '-password -accessToken'
  )

  if (!user) return res.redirect('/auth/login')
  req.user = user
  next()
}

export { isLoggedIn }
