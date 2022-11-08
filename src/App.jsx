import Location from './components/Location'
import { useState } from 'react';
import './App.css'

function App() {

  const [boxSearch, setBoxSearch] = useState(false);

  return (
    <div 
    className="App">
     <Location boxSearch={boxSearch} setBoxSearch={setBoxSearch}/>
     <footer>by Walter Tomás Castagno</footer>
    </div>
  )
}

export default App
