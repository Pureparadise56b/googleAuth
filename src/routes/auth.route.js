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
      res.send('login with google')
    }
  )

router
  .route('/google/callback')
  .get(passport.authenticate('google'), (req, res) => {
    res.redirect('/user/profile')
  })

router.route('/logout').get((req, res) => {
  req.logout((error) => error && console.error('logout error: ', error))
  res.redirect('/auth/login')
})

export default router
