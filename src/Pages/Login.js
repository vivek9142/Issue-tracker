import React,{useEffect} from 'react';
import {Formik,Form} from 'formik';
import TextField from '../Components/TextField';
import * as Yup from 'yup';

import { useDispatch,useSelector } from 'react-redux';
import { loginUser } from '../Redux/Actions/UserActions';
import { userActions } from '../Redux/Reducer/userReducer';

const Login = (props) => {
    
    const  dispatch = useDispatch();
    // eslint-disable-next-line
    useEffect(() => {
        return () => {
            dispatch(userActions.resetErrorStatus());
        }
    },[]);
    
    const authError = useSelector(state => state.user.error);
    const validate = Yup.object({
        email:Yup.string()
        .email('Email is invalid')
        .required('Email is Required'),
        password:Yup.string()
        .min(6,'Password must be atleast 6 charaters long')
        .required('Password is Required')
    })

    const loginHandler = (user) => dispatch(loginUser(user));
    
    return (
        <>
        <h1>Login Page</h1>
        <span>{authError}</span>
        <Formik initialValues={{
            email:''
            ,password:''
        }} 
        validationSchema={validate} 
        onSubmit={val => loginHandler(val)}>

            {formik => (
                <Form>
                    <TextField type='email' name='email' label='Email'/>
                    <TextField type='password' name='password' label='Password'/>
                    <input type='submit'/>
                </Form>
            )}
        </Formik>
        </>
    );
}

export default Login;