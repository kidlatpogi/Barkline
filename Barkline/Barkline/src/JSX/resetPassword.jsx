
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Login-CreateAccount.css";
import { Link } from "react-router-dom";

function ResetPassword() {
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
              <h3 className="mb-4 text-uppercase text-center">Reset Password</h3>
              <form>
                {/* New Password */}
                <div className="mb-3">
                  <label className="form-label">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                  />
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                  />
                </div>

                {/* Reset Password Button */}
                <div className="d-grid mb-3">
                  <button className="btn custom-btn w-100" type="submit">
                    Reset Password
                  </button>
                </div>

                {/* Back to Login */}
                <div className="mb-3 text-start">
                  <Link to="/login" className="small text-decoration-none">
                    Back to Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;