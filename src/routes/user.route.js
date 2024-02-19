import express from 'express'

const router = express.Router()

router.route('/profile').get((req, res) => {
  const time = new Date(req.user?.createdAt)
  res.render('profile', {
    user: req.user,
    createdTime: time.toLocaleDateString(),
  })
})

export default router
