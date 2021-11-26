import React from 'react';
import { Field,ErrorMessage } from 'formik';

const TextField = ({type,label,...props}) => {
    return (
        <div className="">
            <label htmlFor={label} className='form-label'>
                {label}</label>
                <Field type={type} name={props.name} className='form-control' placeholder={`Enter your ${label}`}/>
                <div style={{'height':'1rem'}}>
                <ErrorMessage component='span' name={props.name} style={{'fontSize':'0.8rem',"color":'red'}}/>
                </div>
        </div>
    );
}

export default TextField;