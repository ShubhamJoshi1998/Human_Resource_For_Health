import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AppLayout from './components/AppLayout';
import Dummy from './components/Dummy';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={"4BI.gif"} className="App-logo" alt="logo" />
        <p>
          <b>
            Human Resource For Health
          </b>
        </p>
      </header> */}

      <Router>
      <Routes>
          <Route exact path="/" element= {<AppLayout />}/>
          <Route  path="/dummy" element= {<Dummy />}/>
          {/* <Route path="/detail/:id" element= {<Detail />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
