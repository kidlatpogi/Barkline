function TextInput(props) {
    return(
        <div className="mb-3 ">
            <label className="form-label">{props.label}</label>
            <input
                type={props.type}
                className="form-control"
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                    e.preventDefault();
                    window.location.href = props.route;
                    }
                }}
            />
        </div>
    );
}

export default TextInput