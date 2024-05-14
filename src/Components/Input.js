import "./Input.css";

const Input = ({input, result}) => {
    return(
        <div className="Input-wrapper">
            <div className="result">
                <h1>{result}</h1>
            </div>
            <div className="input-text">
                <h3>{input}</h3>
            </div>
        </div>
    );
};

export default Input;