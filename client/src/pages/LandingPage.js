import { useHistory } from "react-router"

export default function LandingPage() {
  const history = useHistory()
  function login() {
    history.push('/login')
  }
  function register() {
    history.push('/register')
  }
  return (
    <div className="container">
      <h1 className="text-center">Landing Page</h1>
      <h2 className="text-center">Welcome to DFlow</h2>
      <div className="row">
        <div className="col-md-4 offset-md-2 text-center">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Already have Account ?</h5>
              <button className="btn btn-primary card-link" type="button" onClick={login}>
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Dont have account ?</h5>
              <button className="btn btn-primary card-link" type="button" onClick={register}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}