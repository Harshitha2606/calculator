import "./Button.css";

const Button = ({symbol, handleClick}) => {
    return <div className="button-wrapper" onClick={()=> handleClick(symbol)}>{symbol}</div>;
};

export default Button;