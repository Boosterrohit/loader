// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './Loader';
import { useState } from 'react';
// import Loader from './Loader';

function App() {
  const [showLoader, setShowLoader] =useState  (false);
const onShowLoader = () => {
  setShowLoader(true);
  setTimeout(() => {
    setShowLoader(false);
  }, 5 * 1000)
}
 
  return (
    <div className="App">

<h1>Rohit Kumar Sah</h1>
{
  showLoader && <Loader/>
}
<button onClick={() => onShowLoader()}>Rohit</button>
     </div>
     
  );
}

export default App;
