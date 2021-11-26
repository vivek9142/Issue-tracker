import React,{useEffect} from 'react';
import {Formik,Form} from 'formik';
import TextField from '../../Components/TextField/TextField';
import * as Yup from 'yup';

import { useDispatch,useSelector } from 'react-redux';
import { loginUser } from '../../Redux/Actions/UserActions';
import { userActions } from '../../Redux/Reducer/userReducer';
import './Login.css';

const Login = (props) => {
    
    const  dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(userActions.resetErrorStatus());
        }
    },[dispatch]);
    
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
        <div className="container user-section mt-5 mb-3 ">
            <h3 className="text-center">
                Login
            </h3>
            <hr/>
        </div>
        <div className="container mb-5">
            <h5 className="fs-6 text-center fw-normal ">{authError}
            </h5>
        </div>

        <Formik initialValues={{
            email:''
            ,password:''
        }} 
        validationSchema={validate} 
        onSubmit={val => loginHandler(val)}>

            {formik => (
                <>
                <div className="container user-section--auth-container">
                    <Form>
                    <div className="row g-3">
                            
                            <div className="col-12">
                            <div className="">
                                <label htmlFor='email' className='form-label'>
                                    Email</label>
                                    <input type='email' name='email' className='form-control' placeholder={`Enter your Email`}/>
                                    <div style={{"height":"1rem"}}>
                                    <span name='email' style={{"fontSize":"0.8rem","color":"red"}}/>
                                    </div>
                            </div>
                                
                            </div>
                            <div className="col-12">
                                <TextField type='password' name='password' label='Password'/>
                            </div>

                            <div className="col-12" style={{'marginBottom':'5rem'}}>
                                <button type="submit" className="btn btn-primary">Sign in</button>
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

export default Login;