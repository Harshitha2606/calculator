import { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Input from './Components/Input';

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const addtoInput = (val) => {
    setInput((input) => [...input, val]);
  }

  const reset = () => {
    setInput("");
    setResult("");
  }

  const resultCal = () => {
   const val = input.join("");
    setResult(eval(val));
  }

  return (
    <div className="App">
      <div className="calc-wrapper">
        <h1>Calculator</h1>
        <Input input={input} result={result}/>
        <div className="row">
          <Button symbol="7" handleClick={addtoInput}/>
          <Button symbol="8" handleClick={addtoInput}/>
          <Button symbol="9" handleClick={addtoInput}/>
          <Button symbol="/" handleClick={addtoInput}/>
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addtoInput}/>
          <Button symbol="5" handleClick={addtoInput}/>
          <Button symbol="6" handleClick={addtoInput}/>
          <Button symbol="*" handleClick={addtoInput}/>
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addtoInput}/>
          <Button symbol="2" handleClick={addtoInput}/>
          <Button symbol="3" handleClick={addtoInput}/>
          <Button symbol="+" handleClick={addtoInput}/>
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addtoInput}/>
          <Button symbol="." handleClick={addtoInput}/>
          <Button symbol="=" handleClick={resultCal}/>
          <Button symbol="-" handleClick={addtoInput}/>
        </div>
        <Button symbol="Clear" handleClick={reset}/>
      </div>
    </div>
  );
}

export default App;
