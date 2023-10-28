import "./Button.css";

function Button({ color = "", children, enabled, title, type, onClick }) {
    return (
        <button
            className={"theme-button " + color}
            onClick={onClick}
            title={title}
            enabled={enabled}
            type={type}
        >
            {children}
        </button>
    );
}

export default Button;
