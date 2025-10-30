import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button } from 'primereact/button' 

function App() {

  const [counter, setCounter] = useState(0);
  const onClickHandle = () =>{
    setCounter(counter+1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button label={`Increment (${counter})`}  onClick={onClickHandle} style={{fontSize:"xxx-Large"}}/>
      </header>
    </div>
  );
}

export default App;
