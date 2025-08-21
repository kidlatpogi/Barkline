import TextInput from "../TextInput";
import UserSessionButton from "../Button/UserSessionButton";
import ForgotPasswordText from "../Text/ForgotPasswordText";
import UserSessionTextReroute from "../Text/UserSessionTextReroute";

function LoginForm() {
    return(
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
            <div className="card-body">
              <h3 className="mb-4 text-uppercase text-center">Login</h3>
              <form>
                <TextInput label="Email" type="email" route="/home"/>
                <TextInput label="Password" type="password" route="/home"/>
                <UserSessionButton title="Login" route="/home"/>
                <ForgotPasswordText route="/forgot-password" />
                <UserSessionTextReroute initialText="New User? " buttonText="Create Account" route="/create-account"/>
              </form>
            </div>
          </div>
        </div>
    );
}

export default LoginForm