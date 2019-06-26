import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Form from './Components/Form';
import ProductList from './Components/ProductList';


function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Route exact path="/ProductList" component={ProductList} />
            <Route exact path="/" component={Form} />
          </BrowserRouter>
    </div>
  );
}

export default App;
