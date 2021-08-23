import React from 'react';
import { Field,ErrorMessage } from 'formik';

const TextField = ({type,label,...props}) => {
    return (
        <div className="">
            <label htmlFor={label}>
                {label}
                <Field type={type} name={props.name} placeholder={`Enter your ${label}`}/>
                <ErrorMessage component='div' name={props.name} className=''/>
            </label>
        </div>
    );
}

export default TextField;