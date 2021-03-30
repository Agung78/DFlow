const User = require('../models/postUser')

class Controller {
  static async landingPage(req, res) {
    try {
      const post = new User({
        email: req.body.email,
        password: req.body.password
      })
      const savedPost = await post.save()
      res.json(savedPost)
    } catch (error) {
      res.json({ msg: error })
    }
  }
  static async find(req, res) {
    try {
      const posts = await User.find()
      res.json(posts)
    } catch (error) {
      res.json({ msg: error })
    }
  }

  static async register(req, res) {
    try {
      const post = new User({
        email: req.body.email,
        password: req.body.password
      })
      const savedPost = await post.save()
      res.json(savedPost)
    } catch (error) {
      res.json({ msg: error })
    }
  }
  static async login(req, res) {
    try {
      const posts = await User.findOne({ email: req.body.email })
      res.json(posts)
    } catch (error) {
      res.json({ msg: error })
    }
  }
  static verifyEmail(req, res) {
    // console.log(req.params)
    return res.send(req.params)
  }
  static forgotPassword(req, res) {
    return res.send('ini forgotPassword')
  }
  static resetPassword(req, res) {
    return res.send('ini resetPassword')
  }
  static profile(req, res) {
    return res.send('ini profile')
  }
}
module.exports = Controller