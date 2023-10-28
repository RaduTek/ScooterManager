import "./TextBox.css";

function TextBox({
    type = "text",
    className = "",
    placeholder = "",
    required = false,
    value = "",
    min,
    max,
    onChange,
    onClick,
}) {
    return (
        <input
            type={type}
            className={"theme-textbox " + className}
            value={value}
            onChange={onChange}
            onClick={onClick}
            placeholder={placeholder}
            required={required}
            min={min}
            max={max}
        />
    );
}

export default TextBox;
