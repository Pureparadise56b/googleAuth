import express from 'express'
import path from 'path'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import {} from './passport/index.passport.js'
import passport from 'passport'
import { isLoggedIn } from './middlewares/auth.middleware.js'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.resolve('./src/views')))
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_KEY,
  })
)

app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use('/auth', authRouter)
app.use('/user', isLoggedIn, userRouter)

// TODO: take the accessToken and set it into the cookie and create a middleware that check the access token in cookies and varify the users

export { app }
