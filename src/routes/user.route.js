import express from 'express'

const router = express.Router()

router.route('/profile').get((req, res) => {
  res.render('profile')
})

export default router
