
import { Link } from "react-router-dom";

function Signup() {
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
              <h3 className="mb-4 text-uppercase text-center">Signup</h3>
              
              <form>
                {/* Firt Name */}
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control" />
                </div>

                {/* Last Name */}
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control" />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" />
                </div>

                {/*Confirm Password */}
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" />
                </div>

                {/* Login Button */}
                <div className="d-grid mb-3">
                  <button className="btn custom-btn w-100">
                    Login
                  </button>
                </div>

                {/* Login */}
                <p className="mb-0 text-start">
                  Already have an account? <Link to="/" className="fw-bold text-decoration-none">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
