import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';

function App() {
  const [warri,setWari] = useState(false)
  return (
    <div>
      <h1>Workshop HOOKS</h1>
      <button onClick={()=> setWari(!warri)}>{warri ? "Hide" : "Show"}</button>
      {
        warri && <Counter/>
      }
      
    </div>
  );
}

export default App;
