const isLoggedIn = (req, res, next) => {
  const user = req?.user

  if (!user) {
    res.redirect('/auth/login')
  }
  next()
}

export { isLoggedIn }
