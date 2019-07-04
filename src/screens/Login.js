import React, {Component} from 'react'
import { connect } from 'react-redux'
import loginActions from '../redux/loginActions';
import Form from '../components/Form';
import {FIELDS_LOGIN} from '../constants/fields'

class Login extends Component {
    render(){
        return <Form fields={FIELDS_LOGIN} handleSubmit={this.props.login}/>
    }
}

const mapStateToProps = () => {};

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(loginActions.login())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)