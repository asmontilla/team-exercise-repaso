import React from 'react'
import Form from '../components/Form';
import {FIELDS_LOGIN} from '../constants/fields'

function Login ({login}) {
    return <Form fields={FIELDS_LOGIN} handleSubmit={login}/>
}

export default Login