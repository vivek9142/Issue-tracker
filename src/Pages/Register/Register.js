import React,{useEffect} from 'react';
import {Formik,Form} from 'formik';
import TextField from '../../Components/TextField/TextField';
import * as Yup from 'yup';

import { useDispatch,useSelector } from 'react-redux';
import { registerUser } from '../../Redux/Actions/UserActions';
import { userActions } from '../../Redux/Reducer/userReducer';

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
        <div className="container user-section mt-5 mb-3">
            <h3 className="text-center">
                Register 
            </h3>
            <hr/>
        </div>
        <div className="container mb-5">
            <h5 className="fs-6 text-center fw-normal ">{regError}
            </h5>
        </div>
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
                <>
                <div className="container user-section--auth-container">
                    <Form>
                    <div className="row g-3">
                            <div className="col-md-6">
                                <TextField type='text' name='firstName' label='First Name'/>
                            </div>
                            <div className="col-md-6">
                                <TextField type='text' name='lastName' label='Last Name'/>
                            </div>
                            <div className="col-md-6">
                                <TextField type='text' name='location' label='Location'/>
                            </div>
                            <div className="col-md-3">
                                <TextField type='email' name='email' label='Email'/>
                            </div>
                            <div className="col-md-3">
                                <TextField type='number' name='mobNo' label='Mobile Number'/>
                            </div>
                            <div className="col-md-6">
                                <TextField type='password' name='password' label='Password'/>
                            </div>
                            <div className="col-md-6">
                                <TextField type='password' name='passwordConf' label='Password Confirm'/>
                            </div>

                            <div className="col-12 " style={{'marginBottom':'5rem'}}>
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                    </div>
                    </Form>
                </div>
                </>
            )}
        </Formik>
        
        </>
    );
}

export default Register;