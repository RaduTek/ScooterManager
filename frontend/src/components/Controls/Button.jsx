import "./Button.css";

function Button({ color = "", children, onClick }) {
    return (
        <button className={"theme-button " + color} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
