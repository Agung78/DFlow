import { useState } from "react"
import { useHistory } from 'react-router-dom'

export default function ResetPassword() {
  const [password, setPassword] = useState()
  const history = useHistory()
  function handleChange(e) {
    setPassword(e.target.value)
  }
  async function resetPassword() {
    try {
      const response = await fetch('http://localhost:3001/api/v1/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: localStorage.getItem('forgot-email'), password })
      })
      const data = await response.json()
      localStorage.removeItem('forgot-email')
      history.push('/login')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="container">
      <h1 className="text-center">Reset Password Page</h1>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">New Password</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter new password"
                name="email" onChange={(e) => handleChange(e)} />
              <small id="emailHelp" className="form-text text-muted">We'll never share your password with anyone else.</small>
            </div>
            <button type="button" className="btn btn-primary" onClick={resetPassword}>Reset Password</button>
          </form>
        </div>
      </div>
    </div>
  )
}