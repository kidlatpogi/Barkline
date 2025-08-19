
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* LEFT SIDE IMAGE */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="https://national-u.edu.ph/wp-content/uploads/2021/04/banner-nu-dasma.jpg"
            alt="NU Building"
            className="img-fluid vh-100 w-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          {/* Card */}
          <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
            <div className="card-body">
              <h3 className="mb-4 text-uppercase text-center">Login</h3>
              <form>
                {/* Email */}

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        window.location.href = '/signup';
                      }
                    }}
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" />
                </div>

                {/* Login Button */}
                <div className="d-grid mb-3">
                  <button className="btn custom-btn w-100">
                    Login
                  </button>
                </div>

                {/* Forgot Password */}
                <div className="mb-3 text-start">
                  <Link to="/forgot-password" className="small text-decoration-none">
                    Forgot Password?
                  </Link>
                </div>

                {/* Signup */}
                <p className="mb-0 text-start">
                  New User? <Link to="/signup" className="fw-bold text-decoration-none">Signup</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
