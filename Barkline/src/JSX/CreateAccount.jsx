import CreateAccountForm from "./components/Form/CreateAccountForm";

function CreateAccount() {
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
        <CreateAccountForm/>
      </div>
    </div>
  );
}

export default CreateAccount;
