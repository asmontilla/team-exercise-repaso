import React, {Component} from 'react';
import { BrowserRouter, Switch, Redirect} from 'react-router-dom';
import Login from './screens/Login';
import ProductList from './screens/ProductList';
import Route from './components/Route';

class App extends Component {
  state={isLogged: false}
  setIsLogged = isLogged => this.setState({isLogged})
  login = () => this.setIsLogged(true)
  logout = () => this.setIsLogged(false)
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact isPrivate isLogged={this.state.isLogged} path="/ProductList" component={ProductList}  logout={this.logout}/>
              <Route exact isLogged={this.state.isLogged} path="/" component={Login} login={this.login}/>
              <Redirect to="/"/>
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;