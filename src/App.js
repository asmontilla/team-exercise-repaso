import React, {Component} from 'react';
import { BrowserRouter, Switch, Redirect} from 'react-router-dom';
import Form from './Components/Form';
import ProductList from './Components/ProductList';
import Route from './Components/Route';

class App extends Component {
  state={isLogged: false}
  setIsLogged = isLogged => this.setState({isLogged})
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact isPrivate isLogged={this.state.isLogged} path="/ProductList" component={ProductList} />
              <Route exact isLogged={this.state.isLogged} path="/" component={Form} />
              <Redirect to="/"/>
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;