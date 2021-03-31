import { useState } from "react"

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [err, setErr] = useState('')
  function handleChange(e) {
    setEmail(e.target.value)
  }
  async function forgotPassword() {
    try {
      const response = await fetch('http://localhost:3001/api/v1/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      })
      const data = await response.json()
      if (data.msg) {
        setErr(data.msg)
      } else {
        setErr('Succesfull send reset password to your email')
        localStorage.setItem('forgot-email', email)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="container">
      <h1 className="text-center">Forgot Password Page</h1>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email" onChange={(e) => handleChange(e)} />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <button type="button" className="btn btn-primary" onClick={forgotPassword}>Forgot Password</button>
          </form>
          {
            err ? <p>{err}</p>
              :
              <p></p>
          }
        </div>
      </div>
    </div>
  )
}