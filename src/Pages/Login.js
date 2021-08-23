import React,{useEffect,useState} from 'react';
import {Formik,Form} from 'formik';
import TextField from '../Components/TextField';
import * as Yup from 'yup';

import { useDispatch,useSelector } from 'react-redux';
import { userActions } from '../Redux/Reducer/userReducer';

const Login = (props) => {
    const auth = useSelector(state => state.user.isAuthenticated);
    const [err,setErr] = useState('');
    console.log(auth);
    useEffect(() => {
        if(auth)
        props.history.push('/');
        
        return () => {
        }
    }, [props.history,auth]);

    const  dispatch = useDispatch();
    
    const validate = Yup.object({
        email:Yup.string()
        .email('Email is invalid')
        .required('Email is Required'),
        password:Yup.string()
        .min(6,'Password must be atleast 6 charaters long')
        .required('Password is Required')
    })

    const loginHandler = (user) => {
        
        dispatch(userActions.loginUser(user));
        if(!user.isAuthenticated) setErr('Wrong Username or Password');
        
    }
    
    return (
        <>
        <h1>Login Page</h1>
        <Formik initialValues={{
            email:''
            ,password:''
        }} 
        validationSchema={validate} 
        onSubmit={val => loginHandler(val)}>

            {formik => (
                <Form>
                    <span>{ err }</span>
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