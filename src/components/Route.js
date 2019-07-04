import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import ROUTES from '../constants/routes';


class CustomRoute extends React.Component {
    shouldRedirect = () => {
        //falsy, truthy, ej !!3 = true
        const {isPrivate, isLogged} = this.props;
        if ((isLogged && isPrivate) || (!isLogged && !isPrivate)) {
            return false
        }
        return true
    }
  render () {
      const {component: Component, isPrivate, isLogged, login, logout, ...props} = this.props;
    return (
          <Route render={() => this.shouldRedirect() ? <Redirect to={isLogged ? ROUTES.productList : ROUTES.login} />: <Component login={login} logout={logout}/>} {...props}/>
    )
  }
}

const mapStateToProps = state => ({
    isLogged: state.login.isLogged
})

export default connect(mapStateToProps)(CustomRoute);