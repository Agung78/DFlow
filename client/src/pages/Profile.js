import { useEffect, useState } from "react"
import { useLocation, useHistory } from 'react-router-dom'

export default function Profile() {
  const [user, setUser] = useState({})
  const location = useLocation()
  const history = useHistory()
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch('http://localhost:3001/api/v1/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: localStorage.getItem('email') })
        })
        const data = await response.json()
        setUser(data)
        console.log(data, 'ini data')
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  }, [location.key])
  function signOut() {
    localStorage.clear()
    history.push('/index')
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <button className="btn btn-danger" type="button" onClick={signOut}>SignOut</button>
              <h5 className="card-title">Your Account</h5>
              <h6 className="card-subtitle mb-2 text-muted">Id User</h6>
              <p className="card-text">{user._id}</p>
              <h6 className="card-subtitle mb-2 text-muted">Email</h6>
              <p className="card-text">{user.email}</p>
              <h6 className="card-subtitle mb-2 text-muted">Status Activated</h6>
              <p className="card-text">{user.activated}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}