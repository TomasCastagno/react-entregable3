import Location from './components/Location'
import { useState } from 'react';
import './App.css'
import logo from './images/logo.png'

function App() {

  const [boxSearch, setBoxSearch] = useState(false);

  return (
    <div 
    className="App">
      <img src={logo} alt="logo" className='logo' />
     <Location boxSearch={boxSearch} setBoxSearch={setBoxSearch}/>
     <footer>by Walter Tomás Castagno</footer>
    </div>
  )
}

export default App
