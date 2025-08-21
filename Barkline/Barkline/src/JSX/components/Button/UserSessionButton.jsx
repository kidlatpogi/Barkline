import { useNavigate } from "react-router-dom";

function UserSessionButton(props) {
    const navigate = useNavigate();

    return (
        <div className="d-grid mb-3">
            <button
                className="btn custom-btn w-100"
                onClick={e => {
                    e.preventDefault();
                    navigate(props.route);
                }}
            >
                {props.title}
            </button>
        </div>
    );
}

export default UserSessionButton;