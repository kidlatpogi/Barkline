import { Link } from "react-router-dom";

function UserSessionTextReroute(props) {
    return(
        <p className="mb-0 text-start">
            {props.initialText}
            <Link to={props.route} className="fw-bold text-decoration-none">
                {props.buttonText}
            </Link>
        </p>
    );
}

export default UserSessionTextReroute