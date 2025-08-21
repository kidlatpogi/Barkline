import CreateAccountForm from "./components/Form/CreateAccountForm";
import '../CSS/Login-CreateAccount.css';

function CreateAccount() {
  return (
    <div className="container-fluid vh-100 login-page">
      <div className="row h-100">
        
        {/* LEFT SIDE*/}
        <div className="col-md-6 d-none d-md-block p-0 login-bg"></div>

        {/* RIGHT SIDE FORM */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <CreateAccountForm />
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;