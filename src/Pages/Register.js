import React,{useEffect} from 'react';
import {Formik,Form} from 'formik';
import TextField from '../Components/TextField';
import * as Yup from 'yup';

import { useDispatch,useSelector } from 'react-redux';
import { registerUser } from '../Redux/Actions/UserActions';
import { userActions } from '../Redux/Reducer/userReducer';

const Register = (props) => {
    const  dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(userActions.resetErrorStatus());
        }
    },[]);

    const regError = useSelector(state => state.user.error);

    const validate = Yup.object({
        firstName:Yup.string()
        .required('First Name is Required'),
        lastName:Yup.string()
        .required('Last Name is Required'),
        location:Yup.string()
        .required('Location is required'),
        email:Yup.string()
        .email('Email is invalid')
        .required('Email is Required'),
        mobNo:Yup.string()
        .min(10,'Mobile Number is invalid')
        .max(10,'Mobile Number is invalid')
        .required('Mobile Number is required'),
        password:Yup.string()
        .min(6,'Password must be atleast 6 charaters long')
        .required('Password is Required'),
        passwordConf:Yup.string()
        .oneOf([Yup.ref('password'),null],'Password should match')
        .required('Confirm Password is Required')
    })

    const registerHandler = (user) => {
        user.passwordConf = undefined;
        dispatch(registerUser(user))
        
    }
    return (
        <>
        <h1>Register Page</h1>
        <span>{regError}</span>
        <Formik initialValues={{
            firstName:''
            ,lastName:''
            ,location:''
            ,email:''
            ,mobNo:''
            ,password:''
            ,passwordConf:''
        }} 
        validationSchema={validate} 
        onSubmit={val => registerHandler(val)}>

            {formik => (
                <Form>
                    <TextField type='text' name='firstName' label='First Name'/>
                    <TextField type='text' name='lastName' label='Last Name'/>
                    <TextField type='text' name='location' label='Location'/>
                    <TextField type='email' name='email' label='Email'/>
                    <TextField type='number' name='mobNo' label='Mobile Number'/>
                    <TextField type='password' name='password' label='Password'/>
                    <TextField type='password' name='passwordConf' label='Password Confirm'/>
                    <input type='submit'/>
                </Form>
            )}
        </Formik>
        </>
    );
}

export default Register;