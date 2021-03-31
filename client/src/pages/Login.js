import { useState } from "react"

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState(null)
  function handleChange(e) {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }
  async function formSubmit() {
    try {
      const response = await fetch('http://localhost:3001/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      })
      const data = await response.json()
      if (data.msg) {
        setErr(data.msg)
      } else {
        console.log(data, 'ini token')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="container">
      <h1 className="text-center">Login Page</h1>
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
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password" onChange={(e) => handleChange(e)} />
            </div>
            <button type="button" className="btn btn-primary" onClick={formSubmit}>Submit</button>
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