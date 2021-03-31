const User = require('../models/postUser')
const { generateToken, verifyToken } = require('../helper/jwt')
const { nodeMailer, forgotPassword } = require('../helper/nodemailer')

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
        password: req.body.password,
        activated: false
      })
      const savedPost = await post.save()
      const token = await generateToken(savedPost)
      nodeMailer(req.body.email, token)
      res.json(token)
    } catch (error) {
      res.json({ msg: error })
    }
  }

  static async login(req, res) {
    try {
      const posts = await User.findOne({ email: req.body.email })
      if (posts !== null && posts.activated === 'true' && req.body.password === posts.password) {
        const token = await generateToken(posts)
        res.json(token)
      } else {
        res.json({ msg: 'Email/Password is wrong or not activated yet' })
      }
    } catch (error) {
      res.json(error)
    }
  }

  static async verifyEmail(req, res) {
    try {
      const data = await verifyToken(req.params.token)
      const query = { email: data.payload.email };
      const user = await User.findOneAndUpdate(query, { activated: "true" })
      return res.send('verification')
    } catch (error) {
      res.json({ msg: error })
    }
  }

  static async forgotPassword(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email })
      if (user !== null) {
        forgotPassword(req.body.email)
        res.json('Forgot Password')
      } else {
        res.json({ msg: 'Email not registered yet!' })
      }
    } catch (error) {
      res.json({ msg: error })
    }
  }

  static async resetPassword(req, res) {
    try {
      const query = { email: req.body.email };
      const user = await User.findOneAndUpdate(query, { password: req.body.password })
      return res.send('reset password')
    } catch (error) {
      res.json({ msg: error })
    }
  }

  static async profile(req, res) {
    try {
      const profile = await User.findOne({ email: req.body.email })
      res.json(profile)
    } catch (error) {
      res.json({ msg: error })
    }
  }
}
module.exports = Controller