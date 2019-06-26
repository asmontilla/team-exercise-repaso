import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/transfers" component={Transfers} />
          </BrowserRouter>
    </div>
  );
}

export default App;
