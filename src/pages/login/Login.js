import { Link } from "react-router-dom";
import Navbar from "../../features/navbar/Navbar";
import "./Login.css";
const Login = () => {
  return (
    <div>
      <Navbar/>
      <div id="container">
        <h1 id="heading">Login Account</h1>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <br />
          <Link to="/signup">Create New Account</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
