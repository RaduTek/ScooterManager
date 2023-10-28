import "./ProgressBar.css";

function ProgressBar({
    indeterminate = false,
    min = 0,
    max = 100,
    value = 50,
    color = "blue",
    className = "",
    style,
}) {
    return (
        <div
            className={
                "progress-bar " +
                (indeterminate ? "indeterminate" : "") +
                " " +
                color +
                " " +
                className
            }
            style={style}
        >
            <div
                className="progress-bar-fill"
                style={{
                    width: indeterminate
                        ? "100%"
                        : ((value - min) / (max - min)) * 100 + "%",
                }}
            ></div>
        </div>
    );
}

export default ProgressBar;
