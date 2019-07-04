import React, {Component} from 'react';
import { BrowserRouter, Switch, Redirect} from 'react-router-dom';
import Login from './screens/Login';
import ProductList from './screens/ProductList';
import Route from './components/Route';
import {Provider} from 'react-redux';
import store from './redux/reducers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact isPrivate path="/ProductList" component={ProductList}/>
              <Route exact path="/" component={Login}/>
              <Redirect to="/"/>
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
