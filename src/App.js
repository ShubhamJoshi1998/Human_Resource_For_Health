import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AppLayout from './components/AppLayout';
import Kpi from './components/KPI/kpi';
import Graph1 from './components/GrpahContainer/Graph1';
// import Dummy from './components/Dummy';

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
          <Route  path="/kpi" element= {<Kpi />}/>
          <Route  path="/graph1" element= {<Graph1 />}/>
          {/* <Route path="/detail/:id" element= {<Detail />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
