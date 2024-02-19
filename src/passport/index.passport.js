import passport from 'passport'
import { User } from '../models/user.model.js'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(function (id, done) {
  User.findById(id)
    .then((user) => {
      done(null, user)
    })
    .catch((error) => {
      done(error, null)
    })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_REDIRECT_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ email: profile._json.email }).then((user) => {
        if (user) {
          done(null, user)
        } else {
          User.create({
            username: profile._json.name,
            email: profile._json.email,
            password: profile._json.sub,
            profile: profile._json.picture,
            accessToken,
          })
            .then((user) => {
              done(null, user)
            })
            .catch((error) => console.error(error))
        }
      })
    }
  )
)
