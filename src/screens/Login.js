import React from 'react'
import Form from '../Components/Form';
import {FIELDS_LOGIN} from '../constants/fields'

function Login ({login}) {
    return <Form fields={FIELDS_LOGIN} handleSubmit={login}/>
}

export default Login