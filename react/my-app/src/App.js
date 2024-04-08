import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {

    console.log(process.env.REACT_APP_BACKEND_URL)
    fetch(process.env.REACT_APP_BACKEND_URL)
      .then(response => response.text())
      .then(str => {
        console.log(str);
        setData(str)
      })
      .catch(error=>console.error(error));

  }, []);
 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
               {data ? <pre>Data Fetch from web api is : {data}</pre> : 'Loading...'}
    
      </header>
    </div>
  );
}

export default App;
