import TextInput from "../TextInput";
import UserSessionButton from "../Button/UserSessionButton";
import UserSessionTextReroute from "../Text/UserSessionTextReroute";

function CreateAccountForm() {
    return(
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
            <div className="card-body">
              <h3 className="mb-4 text-uppercase text-center">Create Account</h3>
              <form>
                <TextInput label="First Name" type="text" route="/home"/>
                <TextInput label="Last Name" type="text" route="/home"/>
                <TextInput label="Email" type="email" route="/home"/>
                <TextInput label="Password" type="password" route="/home"/>
                <TextInput label="Confirm Password" type="password" route="/home"/>
                <UserSessionButton title="Create Account" route="/home"/>
                <UserSessionTextReroute initialText="Already have an account? " buttonText="Login" route="/"/>
              </form>
            </div>
          </div>
        </div>
    );
}

export default CreateAccountForm