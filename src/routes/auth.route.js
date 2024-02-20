import express from 'express'
import passport from 'passport'

const router = express.Router()

router.route('/login').get((req, res) => {
  res.render('login')
})

router
  .route('/google')
  .get(
    passport.authenticate('google', { scope: ['profile', 'email'] }),
    (req, res) => {
      res.send('Error in login process')
    }
  )

router
  .route('/google/callback')
  .get(passport.authenticate('google'), (req, res) => {
    res.cookie('access_token', req.user?.accessToken, {
      expires: new Date(Date.now() + 60 * 60 * 24 * 2 * 1000),
      httpOnly: true,
      secure: true,
    })
    res.redirect('/user/profile')
  })

router.route('/logout').get((req, res) => {
  req.logout((error) => error && console.error('logout error: ', error))
  res.clearCookie('access_token')
  res.redirect('/auth/login')
})

export default router
