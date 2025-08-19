
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/login.css";
import { Link } from "react-router-dom";

function ForgotPassword() {
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
              <h3 className="mb-4 text-uppercase text-center">Forgot Password</h3>
              <form onSubmit={e => {
                e.preventDefault();
                window.location.href = '/reset-password';
              }}>
                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                  />
                </div>

                {/* Forgot Password Button */}
                <div className="d-grid mb-3">
                  <button className="btn custom-btn w-100" type="submit">
                    Forgot Password
                  </button>
                </div>

                {/* Back to Login */}
                <div className="mb-3 text-start">
                  <Link to="/" className="small text-decoration-none">
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

export default ForgotPassword;
