import { Link } from "react-router-dom";

function ForgotPasswordText() {
    return(
        <div className="mb-3 text-start">
            <Link to="/forgot-password" className="small text-decoration-none">
            Forgot Password?
            </Link>
        </div>
    );
}

export default ForgotPasswordText